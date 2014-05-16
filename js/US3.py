import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.support.ui import Select
driver = webdriver.Firefox()

url = 'http://www.bcit.ca/study/programs/cst'

r = requests.get(url)
data = r.text
soup = BeautifulSoup(data)

programsAndProgramUrls = {}

programUrls = []

programCourseListUrls = []

# Get

for thing in soup.find_all(class_ = 'program_title'):
    print("Href: " +thing['href'])
    print(thing.attrs)
    print("Contents: " + thing.contents[0])
    programsAndProgramUrls[thing.contents[0]] = (url[:-3] + thing['href'])
    programUrls.append(url[:-3] + thing['href'])
    programCourseListUrls.append(url[:-3] + thing['href'] + "#courses")

# print(str(programCourseListUrls))

print("Going now to " + programCourseListUrls[0])

prequest = requests.get(programCourseListUrls[0])
pdata = prequest.text

# print(pdata)
psoup = BeautifulSoup(pdata)

outlineSelectUrls = []

for thing in psoup.find_all(class_ = 'course_outline'):
    print("www.bcit.ca/" +thing['href'])
    outlineSelectUrls.append("http://www.bcit.ca" +thing['href'])

sr = requests.get(outlineSelectUrls[0])
sd = sr.text
ss = BeautifulSoup(sd)

driver.get(outlineSelectUrls[0])

select = Select(driver.find_element_by_id('subjectCourseTerm'))


subject = outlineSelectUrls[0][-8:-4]
courseNum = outlineSelectUrls[0][-4:]

termYear = select.options[1].text.split()[1]

termString = select.options[1].text.split()[0];

if termString == "Winter":
    termNum = "10"
if termString == "Summer":
    termNum = "20"
if termString == "Fall":
    termNum = "30"


termRequest = requests.get("http://www.bcit.ca//study/outlines/" +
                           "indexajax.php/index/populatecoursetable/" +
                           "term/" + termYear + termNum +
                           "/course/" + courseNum +
                           "/subj/" + subject)

termRequestText = termRequest.text

print(termRequestText)
soup = BeautifulSoup(termRequestText);

table = soup.find('table', {'class': 'gentable'})
href = table.findAll('a')[0].get('href')

print(href)
                           

# select.options[1].click()



term = ss.find(id = 'subjectString')

print(term)

# http://www.bcit.ca//study/outlines/indexajax.php/index/ populatecoursetable/term/201330/course/3600/subj/blaw
## subject = 

##
##for a in soup.find_all('a', class_ = 'program_title'):
##    print(requests.get(url[:-3] + a['href']).text)
