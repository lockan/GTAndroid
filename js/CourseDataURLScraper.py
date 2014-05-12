import urllib.request, re
# This program scrapes the bcit website for course outline data that we input.
# It's better than doing everything by hand but could use further automation
# if we want the software to be more pro. The  problem is that all the
# data I have entered is going to be obsolete in four months.
# To make it better we would need to write something that checks
# the BCIT website automatically for the most recent course outlines and then
# adds them.

##from bs4 import BeautifulSoup
##from xml.etree import ElementTree as ET

# Retrieves a file from an url; returns it as a string.
def filegrabber(url):
    f = urllib.request.urlopen(url)
    myfile = f.read()
   # print(myfile)
    return str(myfile)

# Retrieves a BCIT course outline from an url; parses out course information
# and writes it to a javascript file as calls to our various constructors and
# methods.
def fileparser(url, outputFile, termCode):
    ignore = ["1100", "4900"]
    noSql = True
    file = filegrabber(url)
    coursetitle = re.search('<span id="coursetitle">[\s]*(.*?)[\s]*</span>',
                            file).group(1)
    subjectcode = re.search('<span id="subjectcode">(.*?)</span>',
                            file).group(1)
    coursenumber = re.search('<span id="coursenumber">(.*?)</span>',
                             file).group(1)
    print("Working on " + subjectcode + coursenumber)
    creds = re.search('<th>Course Credits:</th>\s*(.*)',
                      file).group(1)
    creds = re.search('\d', creds).group(0)

    year = url[34:38]  # Year and semester are both embedded in the BCIT url
    semester = url[38]

    # Start the javascript
    myStr = "// Generated from " + url + "\n"
    myStr += "var "
    myStr += subjectcode + coursenumber
    myStr += ' = new CourseMarks("'        #activating js constructor
    myStr += subjectcode + " " + coursenumber
    myStr += '", "'
    myStr += coursetitle
    myStr += '", '
    myStr += str(year)
    myStr += ', '
    myStr += str(semester)
    myStr += ', '
    myStr += str(creds)
    myStr += ', "'
    myStr += termCode
    myStr += '");\n'
    if noSql:
            myStr += "/*@@@"
    myStr += ("db.transaction(function (tx) {\n")
    myStr += ("""\ttx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) """)
    myStr += ("""\n\t\t\t\t   VALUES(" """ + subjectcode + " " + coursenumber + """ ", " """ + coursetitle + """ ", """ + creds + """, 0 )'); \n""")
    myStr += ("});\n")
    if noSql:
            myStr += "@@@*/\n"

    # That's the class constructor. We now have to get the mark categories, which is harder...
    data = file.split("<h2>Evaluation criteria</h2>")[1]
    data = re.search('<div class="courseOutlineSectionBlockContent">[\s]*(.*?)[\s]*</div>',
                     data).group(1)
    data = data.replace("\\n", "")
    values = re.findall('<td>(.*?)</td>',data)
    
    l = []

# This is a horrible hack that doesn't work in all cases, but better than nothing
    if coursenumber not in ignore:
        try:
            firstrow = re.search('<tr>(.*?)</tr>', data).group(1)
            rowcount = firstrow.count('<td>')
            for thing in values:
                if rowcount == 3 and thing.strip() != "" and "<strong" not in thing and (values.index(thing) +1) % rowcount != 0 and "total" not in thing.lower() and "100" not in thing:
                    l.append(thing.strip())
                else:
                    if rowcount == 2 and "total" not in thing.lower() and thing.strip() != "" and "<strong" not in thing and  (values.index(thing) -1) % rowcount != 0 and values.index(thing) != len(values)-1:
                        l.append(thing.strip())
                        l.append(values[values.index(thing) +1])

            #print("data is as follows:\n" + str(data))
    ##        print("values is as follows:\n" + str(values))
    ##        print('firstrow is as follows:\n' + str(firstrow))
    ##        
    ##        print("count is " + str(rowcount))

            for i in range(len(l)):
                if i % 2 == 0 and i < len(l)-1:
                    myStr += subjectcode + coursenumber
                    myStr += '.addMarkCategory("'
                    myStr += l[i]
                    myStr += '", '
                    myStr += l[i+1].replace("%", "")
                    myStr += ');\n'
                    #print(myStr)
                    
                    if noSql:
                        myStr += "/*@@@"
                    myStr += ("db.transaction(function (tx) {\n")
                    
                    myStr += ("""\ttx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) """)
                    myStr += ("""\n\t\t\t\t   VALUES(" """ + subjectcode + " " + coursenumber + """ ", """ + l[i+1].replace("%", "") + """, " """ + l[i] + """ ")'); \n""")

                    myStr += ("});\n")

                    if noSql:
                        myStr += "@@@*/\n"
                    
        except:
            myStr += "//TODO: Something went wrong; you have to do the grade chart by hand\n"

    myStr += ('myCSTCourses.addCourseMarksObject(' + subjectcode + coursenumber + ');\n')
    myStr += ('\n\n')      
    with open(outputFile, "a") as myfile:
        myfile.write(myStr)

## Big data dump of all CST courses. This is better than by hand but it
## still seems like too much work.
    
term1 = ['http://www.bcit.ca/study/outlines/20141072398',
         'http://www.bcit.ca/study/outlines/20141072588',
         'http://www.bcit.ca/study/outlines/20141048057',
         'http://www.bcit.ca/study/outlines/20141077158',
         'http://www.bcit.ca/study/outlines/20141043402',
         'http://www.bcit.ca/study/outlines/20141048058',
         'http://www.bcit.ca/study/outlines/20141072593']

term2 = ['http://www.bcit.ca/study/outlines/20141072401',
         'http://www.bcit.ca/study/outlines/20141072562',
         'http://www.bcit.ca/study/outlines/20141012573',
         'http://www.bcit.ca/study/outlines/20141072568',
         'http://www.bcit.ca/study/outlines/20141077186',
         'http://www.bcit.ca/study/outlines/20141072574',
         'http://www.bcit.ca/study/outlines/20131072587']

#Common Term 3 courses
term3xx = ['http://www.bcit.ca/study/outlines/20141073692', # c++
           'http://www.bcit.ca/study/outlines/20141073695', # ooad
           'http://www.bcit.ca/study/outlines/20141073698', # datacomm
           'http://www.bcit.ca/study/outlines/20141073701', # aad
           'http://www.bcit.ca/study/outlines/20141073710'] # practicum 1

#Now client server
term3cs = ['http://www.bcit.ca/study/outlines/20133031249'] # cs 1

#Info systems
term3is = [] # no outlines

#tec pro
term3tp = ['http://www.bcit.ca/study/outlines/20141073712'] # techpro 1

#database
term3db = ['http://www.bcit.ca/study/outlines/20141073704', # DB 1
           'http://www.bcit.ca/study/outlines/20141074172'] # db selected topics

#digpro
term3dp = ['http://www.bcit.ca/study/outlines/20141073708', # Windows prog
           'http://www.bcit.ca/study/outlines/20133032087'] # DP fundamentals

#datacom
term3dc = [] # No outline

# Common Term 4 courses
term4xx = ['http://www.bcit.ca/study/outlines/20141012716', # law
           'http://www.bcit.ca/study/outlines/20141073686', # career prep
           'http://www.bcit.ca/study/outlines/20141047992', # internet sw dev
           'http://www.bcit.ca/study/outlines/20141073687', # operating systems
           'http://www.bcit.ca/study/outlines/20141073716'] # practicum 2

# Option term 4 courses:
term4cs = ['http://www.bcit.ca/study/outlines/20141012777', # graphics     
           'http://www.bcit.ca/study/outlines/20141019468', # casual server 2
           'http://www.bcit.ca/study/outlines/20141019467'] # cs special tops

term4is = ['http://www.bcit.ca/study/outlines/20141049851', # intranet
           'http://www.bcit.ca/study/outlines/20141015526', # Infosys dev
           'http://www.bcit.ca/study/outlines/20141016344']
           
term4tp = ['http://www.bcit.ca/study/outlines/20133035507', # techpro 2
           'http://www.bcit.ca/study/outlines/20133035509', # system prg
           'http://www.bcit.ca/study/outlines/20141012777'] # graphics

term4db = ['http://www.bcit.ca/study/outlines/20141012777', # graphics
           'http://www.bcit.ca/study/outlines/20133035504'] # db systems 2

term4dp = ['http://www.bcit.ca/study/outlines/20141012777', # graphics
           'http://www.bcit.ca/study/outlines/20141042403', # advanced digpro
           'http://www.bcit.ca/study/outlines/20141042404'] # gaming systems

term4dc = ['http://www.bcit.ca/study/outlines/20141015508', # datacom 2
           'http://www.bcit.ca/study/outlines/20141015509'] # datacom topics

terms = [term1,
         term2,
         term3xx,
         term3cs,
         term3is,
         term3tp,
         term3dc,
         term3dp,
         term3db,
         term4xx,
         term4cs,
         term4is,
         term4db,
         term4dc,
         term4dp,
         term4tp]

# Select output filename
outputFilename = "coursedata.js"

with open(outputFilename, "w") as myfile:
    myfile.write("var myCSTCourses = new CourseMarksSet()" ) 

for url in term1:
    fileparser(url, outputFilename, "term1")
for url in term2:
    fileparser(url, outputFilename, "term2")
for url in term3xx:
    fileparser(url, outputFilename, "term3xx")
for url in term3cs:
    fileparser(url, outputFilename, "term3cs")
for url in term3is:
    fileparser(url, outputFilename, "term3is")
for url in term3tp:
    fileparser(url, outputFilename, "term3tp")
for url in term3dc:
    fileparser(url, outputFilename, "term3dc")
for url in term3dp:
    fileparser(url, outputFilename, "term3dp")
for url in term3db:
    fileparser(url, outputFilename, "term3db")
for url in term4xx:
    fileparser(url, outputFilename, "term4xx")
for url in term4cs:
    fileparser(url, outputFilename, "term4cs")
for url in term4is:
    fileparser(url, outputFilename, "term4is")
for url in term4db:
    fileparser(url, outputFilename, "term4db")
for url in term4dc:
    fileparser(url, outputFilename, "term4dc")
for url in term4dp:
    fileparser(url, outputFilename, "term4dp")
for url in term4tp:
    fileparser(url, outputFilename, "term4tp")


    





    
