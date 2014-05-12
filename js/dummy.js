for (i = 0; i < myCSTCourses.getAllCourseMarks().length; i++) {
    if (myCSTCourses.getAllCourseMarks()[i].getOptionCode() == "term3xx" || 
        myCSTCourses.getAllCourseMarks()[i].getOptionCode() == "term3cs") {
        myCSTCourses.getAllCourseMarks()[i].setIncludeInGPA(true);
    } 
}

var myCourseArray = myCSTCourses.getSelectedCourseMarks();

//console.log(myCourseArray.length);
var m;

for (m = 0; m < myCourseArray.length; m++) {
    console.log(myCourseArray[m].getName());
    console.log(myCourseArray[m].tallyMarks());
    console.log(myCourseArray[m].tallyHighest());
    console.log(myCourseArray[m].tallyLowest());
}