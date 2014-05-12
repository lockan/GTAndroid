var myCSTCourses = new CourseMarksSet()// Generated from http://www.bcit.ca/study/outlines/20141072398
var BUSA2720 = new CourseMarks("BUSA 2720", "Business in a Networked Economy", 2014, 1, 4, "term1");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" BUSA 2720 ", " Business in a Networked Economy ", 4, 0 )'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(BUSA2720);


// Generated from http://www.bcit.ca/study/outlines/20141072588
var COMM1116 = new CourseMarks("COMM 1116", "Business Communications 1", 2014, 1, 4, "term1");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMM 1116 ", " Business Communications 1 ", 4, 0 )'); 
});
@@@*/
COMM1116.addMarkCategory("Quiz 1", 5);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMM 1116 ", 5, " Quiz 1 ")'); 
});
@@@*/
COMM1116.addMarkCategory("Quiz 2", 5);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMM 1116 ", 5, " Quiz 2 ")'); 
});
@@@*/
COMM1116.addMarkCategory("Midterm", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMM 1116 ", 25, " Midterm ")'); 
});
@@@*/
COMM1116.addMarkCategory("Take-home Report", 10);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMM 1116 ", 10, " Take-home Report ")'); 
});
@@@*/
COMM1116.addMarkCategory("Oral Presentation", 15);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMM 1116 ", 15, " Oral Presentation ")'); 
});
@@@*/
COMM1116.addMarkCategory("In-class Assignment", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMM 1116 ", 30, " In-class Assignment ")'); 
});
@@@*/
COMM1116.addMarkCategory("Participation", 10);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMM 1116 ", 10, " Participation ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMM1116);


// Generated from http://www.bcit.ca/study/outlines/20141048057
var COMP1100 = new CourseMarks("COMP 1100", "CST Program Fundamentals", 2014, 1, 1, "term1");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 1100 ", " CST Program Fundamentals ", 1, 0 )'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP1100);


// Generated from http://www.bcit.ca/study/outlines/20141077158
var COMP1111 = new CourseMarks("COMP 1111", "Essential Skills for Computing", 2014, 1, 4, "term1");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 1111 ", " Essential Skills for Computing ", 4, 0 )'); 
});
@@@*/
COMP1111.addMarkCategory("Lab Exercises", 60);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 1111 ", 60, " Lab Exercises ")'); 
});
@@@*/
COMP1111.addMarkCategory("In-Lab Quizzes", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 1111 ", 20, " In-Lab Quizzes ")'); 
});
@@@*/
COMP1111.addMarkCategory("Project", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 1111 ", 20, " Project ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP1111);


// Generated from http://www.bcit.ca/study/outlines/20141043402
var COMP1113 = new CourseMarks("COMP 1113", "Applied Mathematics", 2014, 1, 4, "term1");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 1113 ", " Applied Mathematics ", 4, 0 )'); 
});
@@@*/
COMP1113.addMarkCategory("Final Examination (comprehensive)",  40);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 1113 ",  40, " Final Examination (comprehensive) ")'); 
});
@@@*/
COMP1113.addMarkCategory("Mid-Term Test",  25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 1113 ",  25, " Mid-Term Test ")'); 
});
@@@*/
COMP1113.addMarkCategory("Assignments (10)",  20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 1113 ",  20, " Assignments (10) ")'); 
});
@@@*/
COMP1113.addMarkCategory("Weekly Quizzes (10)",  15);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 1113 ",  15, " Weekly Quizzes (10) ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP1113);


// Generated from http://www.bcit.ca/study/outlines/20141048058
var COMP1510 = new CourseMarks("COMP 1510", "Programming Methods", 2014, 1, 7, "term1");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 1510 ", " Programming Methods ", 7, 0 )'); 
});
@@@*/
COMP1510.addMarkCategory("Assignments", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 1510 ", 20, " Assignments ")'); 
});
@@@*/
COMP1510.addMarkCategory("Lab quizzes/assignments", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 1510 ", 20, " Lab quizzes/assignments ")'); 
});
@@@*/
COMP1510.addMarkCategory("Midterm Exam", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 1510 ", 20, " Midterm Exam ")'); 
});
@@@*/
COMP1510.addMarkCategory("Final Exam", 35);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 1510 ", 35, " Final Exam ")'); 
});
@@@*/
COMP1510.addMarkCategory("Participation", 5);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 1510 ", 5, " Participation ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP1510);


// Generated from http://www.bcit.ca/study/outlines/20141072593
var COMP1536 = new CourseMarks("COMP 1536", "Introduction to Web Development", 2014, 1, 4, "term1");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 1536 ", " Introduction to Web Development ", 4, 0 )'); 
});
@@@*/
COMP1536.addMarkCategory("Labs", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 1536 ", 20, " Labs ")'); 
});
@@@*/
COMP1536.addMarkCategory("Project", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 1536 ", 20, " Project ")'); 
});
@@@*/
COMP1536.addMarkCategory("Pre-lecture readings", 15);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 1536 ", 15, " Pre-lecture readings ")'); 
});
@@@*/
COMP1536.addMarkCategory("Midterm", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 1536 ", 20, " Midterm ")'); 
});
@@@*/
COMP1536.addMarkCategory("Final", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 1536 ", 25, " Final ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP1536);


// Generated from http://www.bcit.ca/study/outlines/20141072401
var COMM2216 = new CourseMarks("COMM 2216", "Business Communications 2", 2014, 1, 4, "term2");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMM 2216 ", " Business Communications 2 ", 4, 0 )'); 
});
@@@*/
COMM2216.addMarkCategory("Resume and Letter", 10);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMM 2216 ", 10, " Resume and Letter ")'); 
});
@@@*/
COMM2216.addMarkCategory("Job Interview", 10);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMM 2216 ", 10, " Job Interview ")'); 
});
@@@*/
COMM2216.addMarkCategory("Proposal Report", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMM 2216 ", 20, " Proposal Report ")'); 
});
@@@*/
COMM2216.addMarkCategory("Proposal Pitch", 5);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMM 2216 ", 5, " Proposal Pitch ")'); 
});
@@@*/
COMM2216.addMarkCategory("Instruction Manual", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMM 2216 ", 20, " Instruction Manual ")'); 
});
@@@*/
COMM2216.addMarkCategory("Final Exam", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMM 2216 ", 25, " Final Exam ")'); 
});
@@@*/
COMM2216.addMarkCategory("Participation", 10);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMM 2216 ", 10, " Participation ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMM2216);


// Generated from http://www.bcit.ca/study/outlines/20141072562
var COMP2121 = new CourseMarks("COMP 2121", "Discrete Mathematics", 2014, 1, 4, "term2");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 2121 ", " Discrete Mathematics ", 4, 0 )'); 
});
@@@*/
COMP2121.addMarkCategory("Assignments", 10);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 2121 ", 10, " Assignments ")'); 
});
@@@*/
COMP2121.addMarkCategory("Lab Quizzes", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 2121 ", 20, " Lab Quizzes ")'); 
});
@@@*/
COMP2121.addMarkCategory("Midterm Exam", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 2121 ", 30, " Midterm Exam ")'); 
});
@@@*/
COMP2121.addMarkCategory("Final Exam", 40);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 2121 ", 40, " Final Exam ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP2121);


// Generated from http://www.bcit.ca/study/outlines/20141012573
var COMP2510 = new CourseMarks("COMP 2510", "Procedural Programming in C", 2014, 1, 5, "term2");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 2510 ", " Procedural Programming in C ", 5, 0 )'); 
});
@@@*/
COMP2510.addMarkCategory("Final Exam", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 2510 ", 30, " Final Exam ")'); 
});
@@@*/
COMP2510.addMarkCategory("Midterm Exam I", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 2510 ", 25, " Midterm Exam I ")'); 
});
@@@*/
COMP2510.addMarkCategory("Assignments", 21);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 2510 ", 21, " Assignments ")'); 
});
@@@*/
COMP2510.addMarkCategory("Lab Activities", 24);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 2510 ", 24, " Lab Activities ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP2510);


// Generated from http://www.bcit.ca/study/outlines/20141072568
var COMP2526 = new CourseMarks("COMP 2526", "Object-Oriented Programming with Java", 2014, 1, 4, "term2");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 2526 ", " Object-Oriented Programming with Java ", 4, 0 )'); 
});
@@@*/
//TODO: Something went wrong; you have to do the grade chart by hand
myCSTCourses.addCourseMarksObject(COMP2526);


// Generated from http://www.bcit.ca/study/outlines/20141077186
var COMP2714 = new CourseMarks("COMP 2714", "Relational Database Systems", 2014, 1, 5, "term2");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 2714 ", " Relational Database Systems ", 5, 0 )'); 
});
@@@*/
COMP2714.addMarkCategory("Final Exam", 35);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 2714 ", 35, " Final Exam ")'); 
});
@@@*/
COMP2714.addMarkCategory("Midterm Exam", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 2714 ", 25, " Midterm Exam ")'); 
});
@@@*/
COMP2714.addMarkCategory("Quizzes", 15);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 2714 ", 15, " Quizzes ")'); 
});
@@@*/
COMP2714.addMarkCategory("Assignments / <br />               Case Studies", 15);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 2714 ", 15, " Assignments / <br />               Case Studies ")'); 
});
@@@*/
COMP2714.addMarkCategory("Lab Exercises", 10);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 2714 ", 10, " Lab Exercises ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP2714);


// Generated from http://www.bcit.ca/study/outlines/20141072574
var COMP2721 = new CourseMarks("COMP 2721", "Computer Organization/Architecture", 2014, 1, 4, "term2");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 2721 ", " Computer Organization/Architecture ", 4, 0 )'); 
});
@@@*/
//TODO: Something went wrong; you have to do the grade chart by hand
myCSTCourses.addCourseMarksObject(COMP2721);


// Generated from http://www.bcit.ca/study/outlines/20131072587
var COMP2910 = new CourseMarks("COMP 2910", "Projects", 2013, 1, 6, "term2");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 2910 ", " Projects ", 6, 0 )'); 
});
@@@*/
COMP2910.addMarkCategory("Achievement / Results", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 2910 ", 25, " Achievement / Results ")'); 
});
@@@*/
COMP2910.addMarkCategory("Project Planning", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 2910 ", 30, " Project Planning ")'); 
});
@@@*/
COMP2910.addMarkCategory("Project Milestone Reviews", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 2910 ", 30, " Project Milestone Reviews ")'); 
});
@@@*/
COMP2910.addMarkCategory("Teamwork / Participation / Professionalism", 15);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 2910 ", 15, " Teamwork / Participation / Professionalism ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP2910);


// Generated from http://www.bcit.ca/study/outlines/20141073692
var COMP3512 = new CourseMarks("COMP 3512", "Object Oriented Programming in C++", 2014, 1, 6, "term3xx");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 3512 ", " Object Oriented Programming in C++ ", 6, 0 )'); 
});
@@@*/
COMP3512.addMarkCategory("Final Exam", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3512 ", 30, " Final Exam ")'); 
});
@@@*/
COMP3512.addMarkCategory("Midterm Exam", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3512 ", 25, " Midterm Exam ")'); 
});
@@@*/
COMP3512.addMarkCategory("Assignments", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3512 ", 20, " Assignments ")'); 
});
@@@*/
COMP3512.addMarkCategory("Lab Exercises", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3512 ", 25, " Lab Exercises ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP3512);


// Generated from http://www.bcit.ca/study/outlines/20141073695
var COMP3711 = new CourseMarks("COMP 3711", "Object Oriented Analysis and Design", 2014, 1, 4, "term3xx");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 3711 ", " Object Oriented Analysis and Design ", 4, 0 )'); 
});
@@@*/
//TODO: Something went wrong; you have to do the grade chart by hand
myCSTCourses.addCourseMarksObject(COMP3711);


// Generated from http://www.bcit.ca/study/outlines/20141073698
var COMP3721 = new CourseMarks("COMP 3721", "Introduction to Data Communications", 2014, 1, 4, "term3xx");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 3721 ", " Introduction to Data Communications ", 4, 0 )'); 
});
@@@*/
COMP3721.addMarkCategory("Final Examination", 35);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3721 ", 35, " Final Examination ")'); 
});
@@@*/
COMP3721.addMarkCategory("Midterm Examination", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3721 ", 25, " Midterm Examination ")'); 
});
@@@*/
COMP3721.addMarkCategory("Quizzes", 10);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3721 ", 10, " Quizzes ")'); 
});
@@@*/
COMP3721.addMarkCategory("Assignments", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3721 ", 30, " Assignments ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP3721);


// Generated from http://www.bcit.ca/study/outlines/20141073701
var COMP3760 = new CourseMarks("COMP 3760", "Algorithm Analysis and Design", 2014, 1, 4, "term3xx");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 3760 ", " Algorithm Analysis and Design ", 4, 0 )'); 
});
@@@*/
COMP3760.addMarkCategory("Lab Assignments", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3760 ", 20, " Lab Assignments ")'); 
});
@@@*/
COMP3760.addMarkCategory("Quizzes", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3760 ", 20, " Quizzes ")'); 
});
@@@*/
COMP3760.addMarkCategory("Midterm", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3760 ", 30, " Midterm ")'); 
});
@@@*/
COMP3760.addMarkCategory("Final Exam", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3760 ", 30, " Final Exam ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP3760);


// Generated from http://www.bcit.ca/study/outlines/20141073710
var COMP3900 = new CourseMarks("COMP 3900", "Computer Projects Practicum 1", 2014, 1, 5, "term3xx");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 3900 ", " Computer Projects Practicum 1 ", 5, 0 )'); 
});
@@@*/
//TODO: Something went wrong; you have to do the grade chart by hand
myCSTCourses.addCourseMarksObject(COMP3900);


// Generated from http://www.bcit.ca/study/outlines/20133031249
var COMP3940 = new CourseMarks("COMP 3940", "Client/Server Computing 1", 2013, 3, 5, "term3cs");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 3940 ", " Client/Server Computing 1 ", 5, 0 )'); 
});
@@@*/
COMP3940.addMarkCategory("Midterms", 50);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3940 ", 50, " Midterms ")'); 
});
@@@*/
COMP3940.addMarkCategory("Final Exam", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3940 ", 20, " Final Exam ")'); 
});
@@@*/
COMP3940.addMarkCategory("Assignments", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3940 ", 30, " Assignments ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP3940);


// Generated from http://www.bcit.ca/study/outlines/20141073712
var COMP3951 = new CourseMarks("COMP 3951", "Technical Programming 1", 2014, 1, 5, "term3tp");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 3951 ", " Technical Programming 1 ", 5, 0 )'); 
});
@@@*/
COMP3951.addMarkCategory("Final exam", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3951 ", 25, " Final exam ")'); 
});
@@@*/
COMP3951.addMarkCategory("Midterm", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3951 ", 20, " Midterm ")'); 
});
@@@*/
COMP3951.addMarkCategory("Assignments", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3951 ", 20, " Assignments ")'); 
});
@@@*/
COMP3951.addMarkCategory("Quizzes", 15);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3951 ", 15, " Quizzes ")'); 
});
@@@*/
COMP3951.addMarkCategory("Term project", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3951 ", 20, " Term project ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP3951);


// Generated from http://www.bcit.ca/study/outlines/20141073708
var COMP3770 = new CourseMarks("COMP 3770", "Programming Windows", 2014, 1, 4, "term3dp");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 3770 ", " Programming Windows ", 4, 0 )'); 
});
@@@*/
COMP3770.addMarkCategory("Final Examination", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3770 ", 20, " Final Examination ")'); 
});
@@@*/
COMP3770.addMarkCategory("Quizzes", 40);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3770 ", 40, " Quizzes ")'); 
});
@@@*/
COMP3770.addMarkCategory("Assignments", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3770 ", 20, " Assignments ")'); 
});
@@@*/
COMP3770.addMarkCategory("Project", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3770 ", 20, " Project ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP3770);


// Generated from http://www.bcit.ca/study/outlines/20133032087
var COMP3931 = new CourseMarks("COMP 3931", "Digital Image, Video and Audio Fundamentals", 2013, 3, 5, "term3dp");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 3931 ", " Digital Image, Video and Audio Fundamentals ", 5, 0 )'); 
});
@@@*/
COMP3931.addMarkCategory("Final Exam", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3931 ", 20, " Final Exam ")'); 
});
@@@*/
COMP3931.addMarkCategory("Midterm Exam", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3931 ", 20, " Midterm Exam ")'); 
});
@@@*/
COMP3931.addMarkCategory("Quizzes/In class assignments", 10);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3931 ", 10, " Quizzes/In class assignments ")'); 
});
@@@*/
COMP3931.addMarkCategory("Assignments", 10);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3931 ", 10, " Assignments ")'); 
});
@@@*/
COMP3931.addMarkCategory("Project", 40);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3931 ", 40, " Project ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP3931);


// Generated from http://www.bcit.ca/study/outlines/20141073704
var COMP3920 = new CourseMarks("COMP 3920", "Database Systems 1", 2014, 1, 5, "term3db");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 3920 ", " Database Systems 1 ", 5, 0 )'); 
});
@@@*/
COMP3920.addMarkCategory("Final Exam", 35);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3920 ", 35, " Final Exam ")'); 
});
@@@*/
COMP3920.addMarkCategory("Midterm Exam", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3920 ", 30, " Midterm Exam ")'); 
});
@@@*/
COMP3920.addMarkCategory("Quizzes", 16);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3920 ", 16, " Quizzes ")'); 
});
@@@*/
COMP3920.addMarkCategory("Assignments / Lab Exercises", 19);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 3920 ", 19, " Assignments / Lab Exercises ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP3920);


// Generated from http://www.bcit.ca/study/outlines/20141074172
var COMP4925 = new CourseMarks("COMP 4925", "Selected Topics in Database Systems", 2014, 1, 5, "term3db");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4925 ", " Selected Topics in Database Systems ", 5, 0 )'); 
});
@@@*/
COMP4925.addMarkCategory("Final Exam", 35);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4925 ", 35, " Final Exam ")'); 
});
@@@*/
COMP4925.addMarkCategory("Midterm Exam", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4925 ", 30, " Midterm Exam ")'); 
});
@@@*/
COMP4925.addMarkCategory("Quizzes", 16);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4925 ", 16, " Quizzes ")'); 
});
@@@*/
COMP4925.addMarkCategory("Assignments / Lab Exercises", 19);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4925 ", 19, " Assignments / Lab Exercises ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4925);


// Generated from http://www.bcit.ca/study/outlines/20141012716
var BLAW3600 = new CourseMarks("BLAW 3600", "Computers and the Law", 2014, 1, 4, "term4xx");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" BLAW 3600 ", " Computers and the Law ", 4, 0 )'); 
});
@@@*/
BLAW3600.addMarkCategory("Presentations", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" BLAW 3600 ", 20, " Presentations ")'); 
});
@@@*/
BLAW3600.addMarkCategory("Class participation", 10);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" BLAW 3600 ", 10, " Class participation ")'); 
});
@@@*/
BLAW3600.addMarkCategory("Midterm Exam", 35);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" BLAW 3600 ", 35, " Midterm Exam ")'); 
});
@@@*/
BLAW3600.addMarkCategory("Final Exam", 35);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" BLAW 3600 ", 35, " Final Exam ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(BLAW3600);


// Generated from http://www.bcit.ca/study/outlines/20141073686
var COMP4100 = new CourseMarks("COMP 4100", "Career Preparation", 2014, 1, 2, "term4xx");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4100 ", " Career Preparation ", 2, 0 )'); 
});
@@@*/
//TODO: Something went wrong; you have to do the grade chart by hand
myCSTCourses.addCourseMarksObject(COMP4100);


// Generated from http://www.bcit.ca/study/outlines/20141047992
var COMP4711 = new CourseMarks("COMP 4711", "Introduction to Internet Software Development", 2014, 1, 3, "term4xx");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4711 ", " Introduction to Internet Software Development ", 3, 0 )'); 
});
@@@*/
COMP4711.addMarkCategory("Assignments", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4711 ", 30, " Assignments ")'); 
});
@@@*/
COMP4711.addMarkCategory("Labs", 40);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4711 ", 40, " Labs ")'); 
});
@@@*/
COMP4711.addMarkCategory("Final exam", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4711 ", 30, " Final exam ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4711);


// Generated from http://www.bcit.ca/study/outlines/20141073687
var COMP4735 = new CourseMarks("COMP 4735", "Operating Systems", 2014, 1, 5, "term4xx");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4735 ", " Operating Systems ", 5, 0 )'); 
});
@@@*/
COMP4735.addMarkCategory("Assignments", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4735 ", 25, " Assignments ")'); 
});
@@@*/
COMP4735.addMarkCategory("Midterm", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4735 ", 25, " Midterm ")'); 
});
@@@*/
COMP4735.addMarkCategory("Quizzes", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4735 ", 25, " Quizzes ")'); 
});
@@@*/
COMP4735.addMarkCategory("Final Exam", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4735 ", 25, " Final Exam ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4735);


// Generated from http://www.bcit.ca/study/outlines/20141073716
var COMP4900 = new CourseMarks("COMP 4900", "Computer Projects Practicum 2", 2014, 1, 5, "term4xx");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4900 ", " Computer Projects Practicum 2 ", 5, 0 )'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4900);


// Generated from http://www.bcit.ca/study/outlines/20141012777
var COMP4560 = new CourseMarks("COMP 4560", "Computer Graphics for Computer Systems Technology", 2014, 1, 4, "term4cs");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4560 ", " Computer Graphics for Computer Systems Technology ", 4, 0 )'); 
});
@@@*/
COMP4560.addMarkCategory("Quizzes", 15);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4560 ", 15, " Quizzes ")'); 
});
@@@*/
COMP4560.addMarkCategory("Assignments (6)", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4560 ", 20, " Assignments (6) ")'); 
});
@@@*/
COMP4560.addMarkCategory("Midterm Test", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4560 ", 25, " Midterm Test ")'); 
});
@@@*/
COMP4560.addMarkCategory("Final exam", 40);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4560 ", 40, " Final exam ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4560);


// Generated from http://www.bcit.ca/study/outlines/20141019468
var COMP4941 = new CourseMarks("COMP 4941", "Client/Server Computing 2", 2014, 1, 5, "term4cs");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4941 ", " Client/Server Computing 2 ", 5, 0 )'); 
});
@@@*/
COMP4941.addMarkCategory("Final", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4941 ", 30, " Final ")'); 
});
@@@*/
COMP4941.addMarkCategory("Midterms", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4941 ", 30, " Midterms ")'); 
});
@@@*/
COMP4941.addMarkCategory("Lab  Assignments", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4941 ", 20, " Lab  Assignments ")'); 
});
@@@*/
COMP4941.addMarkCategory("Project/Presentation", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4941 ", 20, " Project/Presentation ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4941);


// Generated from http://www.bcit.ca/study/outlines/20141019467
var COMP4945 = new CourseMarks("COMP 4945", "Special Topics in Client/Server", 2014, 1, 5, "term4cs");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4945 ", " Special Topics in Client/Server ", 5, 0 )'); 
});
@@@*/
COMP4945.addMarkCategory("Exams", 60);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4945 ", 60, " Exams ")'); 
});
@@@*/
COMP4945.addMarkCategory("Lab Assignments", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4945 ", 20, " Lab Assignments ")'); 
});
@@@*/
COMP4945.addMarkCategory("Project/Presentation", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4945 ", 20, " Project/Presentation ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4945);


// Generated from http://www.bcit.ca/study/outlines/20141049851
var COMP4870 = new CourseMarks("COMP 4870", "Intranet Planning and Development", 2014, 1, 7, "term4is");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4870 ", " Intranet Planning and Development ", 7, 0 )'); 
});
@@@*/
COMP4870.addMarkCategory("Lab Work", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4870 ", 20, " Lab Work ")'); 
});
@@@*/
COMP4870.addMarkCategory("Quiz", 10);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4870 ", 10, " Quiz ")'); 
});
@@@*/
COMP4870.addMarkCategory("Assignments", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4870 ", 25, " Assignments ")'); 
});
@@@*/
COMP4870.addMarkCategory("Individual or group project", 10);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4870 ", 10, " Individual or group project ")'); 
});
@@@*/
COMP4870.addMarkCategory("Mid term exam", 15);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4870 ", 15, " Mid term exam ")'); 
});
@@@*/
COMP4870.addMarkCategory("Final Exam", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4870 ", 20, " Final Exam ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4870);


// Generated from http://www.bcit.ca/study/outlines/20141015526
var COMP4911 = new CourseMarks("COMP 4911", "Managing IS Development", 2014, 1, 5, "term4is");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4911 ", " Managing IS Development ", 5, 0 )'); 
});
@@@*/
COMP4911.addMarkCategory("Project artifacts", 35);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4911 ", 35, " Project artifacts ")'); 
});
@@@*/
COMP4911.addMarkCategory("Peer assessment", 10);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4911 ", 10, " Peer assessment ")'); 
});
@@@*/
COMP4911.addMarkCategory("Quizzes", 10);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4911 ", 10, " Quizzes ")'); 
});
@@@*/
COMP4911.addMarkCategory("Midterm", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4911 ", 20, " Midterm ")'); 
});
@@@*/
COMP4911.addMarkCategory("Final", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4911 ", 25, " Final ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4911);


// Generated from http://www.bcit.ca/study/outlines/20141016344
var COMP4915 = new CourseMarks("COMP 4915", "Special Topics in MIS", 2014, 1, 5, "term4is");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4915 ", " Special Topics in MIS ", 5, 0 )'); 
});
@@@*/
COMP4915.addMarkCategory("Quizzes", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4915 ", 20, " Quizzes ")'); 
});
@@@*/
COMP4915.addMarkCategory("Assignments", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4915 ", 25, " Assignments ")'); 
});
@@@*/
COMP4915.addMarkCategory("Midterm", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4915 ", 20, " Midterm ")'); 
});
@@@*/
COMP4915.addMarkCategory("Final", 35);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4915 ", 35, " Final ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4915);


// Generated from http://www.bcit.ca/study/outlines/20141012777
var COMP4560 = new CourseMarks("COMP 4560", "Computer Graphics for Computer Systems Technology", 2014, 1, 4, "term4db");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4560 ", " Computer Graphics for Computer Systems Technology ", 4, 0 )'); 
});
@@@*/
COMP4560.addMarkCategory("Quizzes", 15);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4560 ", 15, " Quizzes ")'); 
});
@@@*/
COMP4560.addMarkCategory("Assignments (6)", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4560 ", 20, " Assignments (6) ")'); 
});
@@@*/
COMP4560.addMarkCategory("Midterm Test", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4560 ", 25, " Midterm Test ")'); 
});
@@@*/
COMP4560.addMarkCategory("Final exam", 40);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4560 ", 40, " Final exam ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4560);


// Generated from http://www.bcit.ca/study/outlines/20133035504
var COMP4921 = new CourseMarks("COMP 4921", "Database Systems 2", 2013, 3, 5, "term4db");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4921 ", " Database Systems 2 ", 5, 0 )'); 
});
@@@*/
COMP4921.addMarkCategory("Final Exam", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4921 ", 30, " Final Exam ")'); 
});
@@@*/
COMP4921.addMarkCategory("Midterm Exam", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4921 ", 30, " Midterm Exam ")'); 
});
@@@*/
COMP4921.addMarkCategory("Quizzes", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4921 ", 20, " Quizzes ")'); 
});
@@@*/
COMP4921.addMarkCategory("Assignments / Lab Exercises", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4921 ", 20, " Assignments / Lab Exercises ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4921);


// Generated from http://www.bcit.ca/study/outlines/20141015508
var COMP4981 = new CourseMarks("COMP 4981", "Data Communications/Internetworking 2", 2014, 1, 5, "term4dc");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4981 ", " Data Communications/Internetworking 2 ", 5, 0 )'); 
});
@@@*/
//TODO: Something went wrong; you have to do the grade chart by hand
myCSTCourses.addCourseMarksObject(COMP4981);


// Generated from http://www.bcit.ca/study/outlines/20141015509
var COMP4985 = new CourseMarks("COMP 4985", "Selected Topics in Data Communications/Internetworking", 2014, 1, 5, "term4dc");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4985 ", " Selected Topics in Data Communications/Internetworking ", 5, 0 )'); 
});
@@@*/
//TODO: Something went wrong; you have to do the grade chart by hand
myCSTCourses.addCourseMarksObject(COMP4985);


// Generated from http://www.bcit.ca/study/outlines/20141012777
var COMP4560 = new CourseMarks("COMP 4560", "Computer Graphics for Computer Systems Technology", 2014, 1, 4, "term4dp");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4560 ", " Computer Graphics for Computer Systems Technology ", 4, 0 )'); 
});
@@@*/
COMP4560.addMarkCategory("Quizzes", 15);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4560 ", 15, " Quizzes ")'); 
});
@@@*/
COMP4560.addMarkCategory("Assignments (6)", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4560 ", 20, " Assignments (6) ")'); 
});
@@@*/
COMP4560.addMarkCategory("Midterm Test", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4560 ", 25, " Midterm Test ")'); 
});
@@@*/
COMP4560.addMarkCategory("Final exam", 40);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4560 ", 40, " Final exam ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4560);


// Generated from http://www.bcit.ca/study/outlines/20141042403
var COMP4932 = new CourseMarks("COMP 4932", "Advanced Topics in Digital Processing", 2014, 1, 5, "term4dp");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4932 ", " Advanced Topics in Digital Processing ", 5, 0 )'); 
});
@@@*/
COMP4932.addMarkCategory("Exam", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4932 ", 30, " Exam ")'); 
});
@@@*/
COMP4932.addMarkCategory("Quizzes", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4932 ", 20, " Quizzes ")'); 
});
@@@*/
COMP4932.addMarkCategory("Assignments", 50);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4932 ", 50, " Assignments ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4932);


// Generated from http://www.bcit.ca/study/outlines/20141042404
var COMP4995 = new CourseMarks("COMP 4995", "Gaming Systems", 2014, 1, 5, "term4dp");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4995 ", " Gaming Systems ", 5, 0 )'); 
});
@@@*/
COMP4995.addMarkCategory("Exam", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4995 ", 20, " Exam ")'); 
});
@@@*/
COMP4995.addMarkCategory("Assignments", 40);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4995 ", 40, " Assignments ")'); 
});
@@@*/
COMP4995.addMarkCategory("Project", 40);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4995 ", 40, " Project ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4995);


// Generated from http://www.bcit.ca/study/outlines/20133035507
var COMP4952 = new CourseMarks("COMP 4952", "Technical Programming 2", 2013, 3, 5, "term4tp");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4952 ", " Technical Programming 2 ", 5, 0 )'); 
});
@@@*/
COMP4952.addMarkCategory("Mid-term Examination", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4952 ", 25, " Mid-term Examination ")'); 
});
@@@*/
COMP4952.addMarkCategory("Programming Assignments", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4952 ", 20, " Programming Assignments ")'); 
});
@@@*/
COMP4952.addMarkCategory("Term Project", 45);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4952 ", 45, " Term Project ")'); 
});
@@@*/
COMP4952.addMarkCategory("Presentations", 10);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4952 ", 10, " Presentations ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4952);


// Generated from http://www.bcit.ca/study/outlines/20133035509
var COMP4956 = new CourseMarks("COMP 4956", "System Programming", 2013, 3, 5, "term4tp");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4956 ", " System Programming ", 5, 0 )'); 
});
@@@*/
COMP4956.addMarkCategory("Midterm Examination", 30);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4956 ", 30, " Midterm Examination ")'); 
});
@@@*/
COMP4956.addMarkCategory("Quiz", 5);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4956 ", 5, " Quiz ")'); 
});
@@@*/
COMP4956.addMarkCategory("Assignments", 15);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4956 ", 15, " Assignments ")'); 
});
@@@*/
COMP4956.addMarkCategory("Project", 50);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4956 ", 50, " Project ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4956);


// Generated from http://www.bcit.ca/study/outlines/20141012777
var COMP4560 = new CourseMarks("COMP 4560", "Computer Graphics for Computer Systems Technology", 2014, 1, 4, "term4tp");
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Course` (`courseNo`, `courseName`, `credits`, `beingTracked`) 
				   VALUES(" COMP 4560 ", " Computer Graphics for Computer Systems Technology ", 4, 0 )'); 
});
@@@*/
COMP4560.addMarkCategory("Quizzes", 15);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4560 ", 15, " Quizzes ")'); 
});
@@@*/
COMP4560.addMarkCategory("Assignments (6)", 20);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4560 ", 20, " Assignments (6) ")'); 
});
@@@*/
COMP4560.addMarkCategory("Midterm Test", 25);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4560 ", 25, " Midterm Test ")'); 
});
@@@*/
COMP4560.addMarkCategory("Final exam", 40);
/*@@@db.transaction(function (tx) {
	tx.executeSql('INSERT INTO `Category` (`categoryID`, `courseNo`, `weight`, `categoryName`) 
				   VALUES(" COMP 4560 ", 40, " Final exam ")'); 
});
@@@*/
myCSTCourses.addCourseMarksObject(COMP4560);


