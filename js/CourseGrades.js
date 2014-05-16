/* MarkInstance objects have a name (e.g. "Quiz 23"), and numeric "actual" and 
 * "possible" marks. The possible mark is the max possible grade; the actual mark
 * is what the student actually gets.
 */
function MarkInstance(name, actual, possible) {
    var name = name;
    var possibleMark = possible;
    var actualMark = actual;
    
    // Calculates percentage for this mark.
    this.getPercentage = function () {
        return 100 * actualMark / possibleMark;
    };

    // Your basic toString.
    this.toString = function () {
        return "" + 
               name + 
               ": " + 
               actualMark + 
               "/" + 
               possibleMark + 
               " = " + 
               this.getPercentage() + 
               "%"; 
    }

    // Basic getters and setters:

    this.getPossibleMark = function () {
        return possibleMark;
    };

    this.setPossibleMark = function (possibleMark) {
        this.possibleMark = possibleMark;
    };

    this.getActualMark = function () {
        return actualMark;
    };

    this.setActualMark = function (myFloat) {
        actualMark = myFloat;
    };

    this.getName = function () {
        return name;
    };

    this.setName = function(name) {
        this.name = name;
    };
}


/* A MarkCategory has a group of MarkInstances (stored as an array) with an 
 * associated category name ("Quizzes") and category weight that is used to
 * calculate final grades (maybe quizzes are worth 10 per cent)
 */
function MarkCategory(name, inputWeight) {
    var categoryName = name;
    var weight = inputWeight;
    var myMarkInstances = [];

    // Here are some generic getters and setters:

    this.getAllMarkInstances = function ()
    {
        return myMarkInstances;
    }

    this.getCategoryName = function () {
        return categoryName;
    };

    this.getWeight = function () {
        return weight;
    };

    // Returns the length of myMarkInstances:
    this.getNumInstances = function () {
        return myMarkInstances.length;
    };

    // Your basic toString:
    this.toString = function () {
        var output = categoryName + ": " + weight + "%";

        for (k = 0; k < myMarkInstances.length; k++) {
            output += "\n\t" + myMarkInstances[k];
        }

        return output;
    };

    // Calculates the average percentage for the whole category.
    this.averagePercentage = function () {

        var total = 0;
        
        for (j = 0; j < myMarkInstances.length; j++) {
            var percentage = myMarkInstances[j].getPercentage();
            total += myMarkInstances[j].getPercentage();
        }

        if (myMarkInstances.length > 0) { // Don't divide by zero
            total /= myMarkInstances.length;
        }

        return total;
    };  

    /* Alternative average calculation that divides the sum of all actual marks
     * within the category by the sum of all possible marks in that category.
     */
    this.averageOverall = function () {
        var sumActual = 0;
        var sumPossible = 0;
        var averageOverall = 0;

        for (j = 0; j < myMarkInstances.length; j++) {
            sumActual += myMarkInstances[j].getActualMark();
            sumPossible += myMarkInstances[j].getPossibleMark();
        }

        if (sumPossible > 0) { // Don't divide by zero
            averageOverall = sumActual / sumPossible * 100;
        }

        return averageOverall;
    }

    /* Adds a mark instance to the category. Returns false if a markInstance by 
     * that name already belongs to the category.
     */
    this.addMarkInstance = function (name, poss, actual) {
        var success = false;

        if (this.findMarkInstanceIndex(name) < 0) { 
            var m = new MarkInstance(name, poss, actual);
            // console.log("Adding MarkInstance " + m);
            myMarkInstances.push(m);
            success = true;
        }
        
        return success;
    };

    /* Finds the index of a mark instance that has a particular name ("Quiz 1"); 
     * returns -1 if it finds nothing.
     */
    this.findMarkInstanceIndex = function (name) {
        var output = -1;

        for (i = 0; i < myMarkInstances.length; i++) {
            if (name == myMarkInstances[i].getName()) {
                output = i;
            }
        }

        return output;
    };

    /* Gets a MarkInstance from within a category. All updates to grades should
     * work through this function. 
     */
     this.getMarkInstance = function (name) {
        var idx = this.findMarkInstanceIndex(name);
        var output = null; 

        if (idx >= 0) {
            output = myMarkInstances[idx];
        }

        return output;
     }

    // Deletes a mark instance from the category, by name.
    this.deleteMarkInstance = function (name) {
        var idx = this.findMarkInstanceIndex(name)
        if (idx >= 0) { 
            myMarkInstances.splice(idx, 1)
        } 

        return;        
     }

}

/* CourseMarks objects group a bunch of MarkCategorys together and add some
 * information about the course name, title, and credit tally.
 */   
function CourseMarks(name, desc, year, semester, credits, optionCode) {
    var courseName = name;
    var courseDesc = desc;
    var year = year;
    var semester = semester;
    var credits = credits;
    var includeInGPA = false; // I.e. include in GPA calculation
    var optionCode = optionCode; // This designates what option the course 
                                // belongs to
    var myMarkCategories = [];

    this.getMarkCatagories = function(categoryName) {
        return myMarkCategories;
    }

    /* Ansers the question: Do you have a mark Category with the name "foo"?
     */
    this.haveMarkCategory = function(categoryName) {
        var output = false;

        for (i = 0; i < myMarkCategories.length; i++) {
            if (myMarkCategories[i].getCategoryName() == categoryName) {
                output = true;
            }
        }
       
        return output;
    };

    /* Adds a MarkCategory to the array of MarkCategories. It won't allow duplicate
     * category names. Returns true if the category name you pass it is new; 
     * returns false otherwise.
     */
    this.addMarkCategory = function (categoryName, weight) {
        var success = !this.haveMarkCategory(categoryName);

        if (success) {
            var m = new MarkCategory(categoryName, weight);
//            console.log("Adding category " + m.toString() );
            myMarkCategories.push(m);
        }

        return success;    
    };

    /* Returns a markCategory if you pass it a String that is that markCategory's
     * name. Returns null if there is no category by that name.
     */  
    this.getMarkCategory = function (categoryName) {
        var output = null;

        for (j = 0; j < myMarkCategories.length; j++) {
            if (myMarkCategories[j].getCategoryName() == categoryName) {
                output = myMarkCategories[j];
            }
        }

        return output;
    };

    /* Adds a MarkInstance to the appropriate category within my list of categories.
     */
    this.addMarkInstance = function (categoryName, name, actualMark, possibleMark) {      
        var success = false;
        if (this.haveMarkCategory(categoryName)) {
            var myMarkCategory = this.getMarkCategory(categoryName);
          //  console.log("Current mark category is " + myMarkCategory.toString());
            success = myMarkCategory.addMarkInstance(name, actualMark, possibleMark); 
        }

        return success;
    };

    /* Gets a markInstance by its category name and instance name; returns null if
     * nothing by that name is in that category.
     */
    this.getMarkInstance = function (categoryName, instanceName) {
        var output = null;

        var myMarkCategory = this.getMarkCategory(categoryName);
        if (myMarkCategory) {
            output = myMarkCategory.getMarkInstance(instanceName)
        }
        
        return output;
    }

    this.setIncludeInGPA = function (value) {
        includeInGPA = value;
    }

    this.getIncludeInGPA = function () {
        return includeInGPA;
    }

    this.getOptionCode = function () {
        return optionCode;
    }

    /* This is the main grade-estimating function. Returns -1 if there are no grades
     * yet.
     */
    this.tallyMarks = function () {

        // Suppose the student has gotten 100% on quizzes, which are worth 
        // 10 percent of the final grade; and 100% on assignments, which are 
        // worth 20 percent; but hasnt gotten grades in any other category yet.
        // Our program should report that this student is getting 100%.
        // It would be a mistake to weight the student's quiz grade by .1 and 
        // the student's assignment grade by .2, since this would mean the 
        // program reports that ths student is currently averageing 30%.

        // To accurately weight categories, we need to disregard the categories
        // that are empty, and treat each category's weight only in proportion
        // to the sum of the weights of non-empty categories. Our quizzes and 
        // assignments weights add up to 30, so the quiz weight should be 10/ 30
        // or .33, and assignment weight should be 20/ 30 or .66.

        // Calculate the sum of weights of non-empty categories.
        var weightSum = 0;
        var sum = 0;

        for (i = 0; i < myMarkCategories.length; i++) {
            if (myMarkCategories[i].getNumInstances() > 0) { // If the category is not empty
                //console.log("Weight sum is " + weightSum);
                weightSum += myMarkCategories[i].getWeight();
               // console.log("Weight sum is now " + weightSum);

            }
        } 

        // Calculate the sum of the average percentages for each category 
        // multiplied by the adjusted weight for that category.
        if (weightSum > 0) {
            for (i = 0; i < myMarkCategories.length; i++) {
                var total = myMarkCategories[i].averageOverall();
                var weight = myMarkCategories[i].getWeight();
                var adjustedWeight = weight / weightSum;
                sum += total * adjustedWeight; 
            }
        } else {
            sum = -1;
        }

        //console.log("Your average for " + this.getName() + " is " + sum);

        return roundGrade(sum); 
    };

   /* Calculates the highest possible mark the user could get.
    * It works by assuming the user will get 100% in every empty category.
    */
    this.tallyHighest = function () {
        var sum = 0;
        //console.log("tally highest");
        for (i = 0; i < myMarkCategories.length; i++) {
            myMarkCategory = myMarkCategories[i];
            if (myMarkCategory.getNumInstances() > 0) { // If the category is not empty
                sum += myMarkCategory.averageOverall() * myMarkCategory.getWeight() / 100;
            } else {
                sum += myMarkCategory.getWeight();
            }
        }

        if (myMarkCategories.length == 0) {
            sum = 100;
        } 

        //console.log("The sum is " + sum);

        return roundGrade(sum);
    };

    /* Calculates the lowest possible mark the user could get.
    * It works by assuming the user will get 0% in every empty category.
    */
    this.tallyLowest = function () {
        var sum = 0;

        for (i = 0; i < myMarkCategories.length; i++) {
            myMarkCategory = myMarkCategories[i];
            if (myMarkCategory.getNumInstances() > 0) { // If the category is not empty
                sum += myMarkCategory.averageOverall() * myMarkCategory.getWeight() / 100;
            } 
        } 

        return roundGrade(sum);
    };

    // Generic getter
    this.getName = function () {
        return courseName;
    };

    this.getNumCredits = function () {
        return credits;
    };

    // Print category weights
    this.printData = function () {
        console.log("\nData for " + courseName + " is as follows:");

        for (l = 0; l < myMarkCategories.length; l++) {
            console.log(myMarkCategories[l].toString());
        }

        console.log("");
    };
}

/* Objects of this class are meant to hold and manipulate a set of CourseMarks 
 * objects.
 */
function CourseMarksSet () {
    var myCourseMarks = [];
    var myOldGPA = 0;
    var myOldCredits = 0;

    this.addCourseMarksObject = function (obj) {
       
        myCourseMarks.push(obj);
     
    };

    /* Gives back a reference to a course with the name [foo], if i have it.
     */
    this.getCourse = function (courseName) {
        var output = null;
        var i = 0;

       // console.log("get course");
        if (myCourseMarks.length == 0) return null;

        while (myCourseMarks[i].getName() != courseName && 
               i < myCourseMarks.length-1) {
            //console.log(i);
            i++;
        }

        if (i < myCourseMarks.length) {
            output = myCourseMarks[i];
        }

        return output;
    };

    /* Adds a MarkCategory to a named CourseMarks on my list.
     */
    this.addMarkCategory = function (courseName, categoryName) {
        var success = false;
        var myCourse = this.getCourse(courseName)

        if (myCourse) {
            success = myCourse.addMarkCategory(categoryName)
        }

        return success;
    };

    /* Sets the GPA for all courses the user has taken in the past.
     */
    this.setOldGPA = function (oldCredits, oldGPA) {
        myOldGPA[oldCredits] = oldCredits;
        myOldGPA[GPA] = oldGPA;
    };


        /* Calculates the GPA for all courses that the user has currently 
     * selected.
     */
    this.calculateTermGPA = function () {
       // console.log("CTGPA");
        var totalCredits = 0;
        var totalMarks = 0;
        var termGPA = -1;
        //console.log("My course marks is " + myCourseMarks.length + "long");
        var myCourseArray = this.getSelectedCourseMarks();

        //console.log("My course array is " + myCourseArray.length + " long");

        for (x = 0; x < myCourseArray.length; x++) {
            //console.log(myCourseArray[x].getName());
            //console.log("TOtal credits is " + totalCredits);
            var localTally = myCourseArray[x].tallyMarks();
            if (localTally >= 0) {
                totalMarks += localTally * myCourseArray[x].getNumCredits();
             //   console.log("Total marks is " + totalMarks);
                totalCredits += myCourseArray[x].getNumCredits();
            }
        }

        if (totalCredits > 0) {
            //console.log("Hello");
            termGPA = totalMarks / totalCredits;
        }

        //console.log("Your term GPA is " + termGPA);
        return roundGrade(termGPA);
    };

    this.calculateHighTermGPA = function () {
       //console.log("CHTGPA");
        var totalCredits = 0;
        var totalMarks = 0;
        var highTermGPA = -1;
        //console.log("My course marks is " + myCourseMarks.length + "long");
        var myCourseArray = this.getSelectedCourseMarks();

//console.log(myCourseArray.length);

        for (m = 0; m < myCourseArray.length; m++) {
           // console.log(myCourseArray[m].getName());
           // console.log("Highest possible is " + myCourseArray[m].tallyHighest());
           // myCourseArray[m].printData();
            var localTally = myCourseArray[m].tallyHighest();
            if (localTally >= 0) {
             //   console.log("Num credits is " + myCourseArray[m].getNumCredits());
                totalMarks += localTally * myCourseArray[m].getNumCredits();
             //   console.log("Total marks is now " + totalMarks);
                totalCredits += myCourseArray[m].getNumCredits();
            }

        }

      // console.log("Total credits: " + totalCredits);
      // console.log("Total marks: " + totalMarks);

        if (totalCredits > 0) {
          //  console.log("Hello");
            highTermGPA = totalMarks / totalCredits;
        }

     //   console.log("Your highest term GPA is " + highTermGPA);
        return roundGrade(highTermGPA);
    };

    this.calculateLowTermGPA = function () {
       // console.log("CLTGPA");
        var totalCredits = 0;
        var totalMarks = 0;
        var lowTermGPA = -1;
        //console.log("My course marks is " + myCourseMarks.length + "long");
        var myCourseArray = this.getSelectedCourseMarks();

//console.log(myCourseArray.length);

        for (m = 0; m < myCourseArray.length; m++) {
     //       console.log(myCourseArray[m].getName());
      //      console.log("Lowesrt possible is " + myCourseArray[m].tallyLowest());
            totalCredits += myCourseArray[m].getNumCredits();
            var localTally = myCourseArray[m].tallyLowest();
            if (localTally >= 0) {
                totalMarks += localTally * myCourseArray[m].getNumCredits();
                totalCredits += myCourseArray[m].getNumCredits();
            }
        }

        if (totalCredits > 0) {
            lowTermGPA = totalMarks / totalCredits;
        }

//        console.log("Your lowest term GPA is " + lowTermGPA);
        return roundGrade(lowTermGPA);
    };

    this.calculateTermCredits = function () {
        var totalCredits = 0;
        for (i = 0; i < myCourseMarks.length; i++) {
            if (myCourseMarks[i].getIncludeInGPA()) {
                totalCredits += myCourseMarks[i].getNumCredits();
            }
        }

        return totalCredits;
    };

    /* Calculates the weighted average of the users old GPA and term GPA.
     */
    this.calculateCGPA = function () {
        var creditsCount;
        var oldGPAWeight;
        var newGPAWeight;
        var CGPA = null;
        var thisTermsCredits = this.calculateTermCredits();
        var newGPA = this.calculateTermGPA();

        if (myOldCredits = 0) {
            CGPA = this.calculateTermGPA()
        } else if (thisTermsCredits == 0) {
            CGPA = myOldGPA;
        } else {
            creditsCount = myOldCredits + thisTermsCredits;
            oldGPAWeight = myOldCredits / creditsCount;
            newGPAWeight = thisTermsCredits / creditsCount;
            CGPA = myOldGPA * oldGPAWeight + newGPA * newGPAWeight;
        }

        return roundGrade(CGPA);
    };    

    /* Returns the entire array of CourseMarks.
     */
    this.getAllCourseMarks = function () {
        return myCourseMarks;
    };

    /* Returns the array of all CourseMarks that are currently selected by the
     * user.
`    */
    this.getSelectedCourseMarks = function () {
        var selectedCourseMarks = []
        for (i = 0; i < myCourseMarks.length; i++) {
            if (myCourseMarks[i].getIncludeInGPA()) {
                selectedCourseMarks.push(myCourseMarks[i]);
            }
        }

        return selectedCourseMarks;
    }

    this.printAllData = function () {
        for (i = 0 ; i < myCourseMarks.length; i++) {        
            myCourseMarks[i].printData();
        }
    };

    this.printGPAData = function () {
        for (i = 0 ; i < myCourseMarks.length; i++) {        
            if (myCourseMarks[i].getIncludeInGPA()) {
                myCourseMarks[i].printData();
            }
        }
    };

}


function roundGrade(grade) {
    return Math.round(grade * 100) / 100;
}
