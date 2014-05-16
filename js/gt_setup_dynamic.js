// Pulls course data from backend. 
var courses = myCSTCourses.getAllCourseMarks();
var selectedCourses = myCSTCourses.getSelectedCourseMarks();
var overallGPA = myCSTCourses.calculateTermGPA();
var overallHigh = 100/*insert method here*/;
var overallLow = 33/*insert method here*/;

// Populates the users course list. 
$(document).ready( function() {

   //MAIN PAGE AVERAGES
   updateMainPageAverages();

   // MAIN PAGE COURSE LIST
   initializeMainPageCourseList();

   // SETUP PAGE COURSE LIST - STATIC DOES NOT REQUIRE REFRESH AFTER DOCUMENT LOAD
   $('.setup').append('<fieldset data-role="controlgroup" id="setup_courselist"><legend><span class="sublabel">Select courses to display:</span></legend>');
   for ( var i in courses ) { 
      $('.setup').append('<input type="checkbox" name="checkbox-'+i+'" id="checkbox-'+i+'">');
      $('.setup').append('<label for="checkbox-'+i+'">'+courses[i].getName()+'</label>');
   }
   $('.setup').append('</fieldset>');     
   console.log("Setup Page - Courses loaded");
        
    console.log('Document Initialized');
});

/* Andrew's old, brusted method. Keeping for posterity. 
   $('#setup_courselist').controlgroup("container").append(' <label for="dynamic1"> COMP 5555 </label> ');
   $('#setup_courselist').controlgroup("container").append(' <input type="checkbox" name="dynamic1" id="dynamic1" class="setup_checkboxes"> ');
   $('#setup_courselist').checkboxradio();
   $('#setup_courselist').enhanceWithin().controlgroup("refresh");
*/
var nullString = "---";// Gets displayed if there's no data

function updateMainPageAverages() {
   overallGPA = myCSTCourses.calculateTermGPA();
   overallHigh = myCSTCourses.calculateHighTermGPA();
   overallLow = myCSTCourses.calculateLowTermGPA();


   overallGPA = (overallGPA >= 0)? overallGPA: nullString;
   overallHigh = (overallHigh >= 0)? overallHigh: nullString;
   overallLow = (overallLow >= 0)? overallLow: nullString;

   $('.main_mark_overall').html("" + overallGPA + "%");
   $('.main_mark_high').html("High: " + overallHigh + "%");
   $('.main_mark_low').html("Low: " + overallLow + "%");
   console.log("Mark Averages updated for home page");
};

function initializeMainPageCourseList() {
   var courseList = '<ul data-role="listview" id="main-page-courselist">';
   var endList = '</ul>';

   courseList += '<li data-role="list-divider"><center>Current Courses</center></li>';
   for (var i in selectedCourses) {
      var myMark = (courses[i].tallyMarks() >= 0)? courses[i].tallyMarks(): nullString;
      var myCourse = selectedCourses[i].getName();
      courseList += '<li><a href="#courseview" onclick="addCourseMarksView(\''+myCourse+'\')" data-transition="slide" class="course-select" id="' + selectedCourses[i].getName() + '">'+selectedCourses[i].getName()+'<span class="ui-li-aside">'+myMark+'%</span></a></li>'
   }
   courseList += endList;

   $('#listpanel').empty();
   $('#listpanel').append(courseList);
   $('#listpanel').trigger('create');
   //$('#listpanel').enhanceWithin();

   console.log("Main Page - Courses Loaded");
};

$(document).on( 'change', 'input:checkbox', function ()
{
   var courseNo = this.id.match(/\d+/);
   // alert(courseNo);
   if(courses[courseNo].getIncludeInGPA() ) {
      courses[courseNo].setIncludeInGPA(false);
      // alert(courses[courseNo].getName() + ' removed from main page');
   } else {
      courses[courseNo].setIncludeInGPA(true);
      // alert(courses[courseNo].getName() + ' added to main page');
   }
   //alert ($(this).attr ("checked"));
   selectedCourses = myCSTCourses.getSelectedCourseMarks();
   updateMainPageAverages();
   drawChart();
   initializeMainPageCourseList(courseNo);
}); 

function addCourseMarksView(course)
{
   var finalString = "";
   //alert("Showing course data for: " + course);
   //course = course.replace(/\s/g, '');
   var courseData = myCSTCourses.getCourse(course);
   var markCategories = courseData.getMarkCatagories();
   for ( var i in markCategories ) 
   {
      if (markCategories[i].getAllMarkInstances().length < 1)
      {
         continue;
      }
      var markInstances = markCategories[i].getAllMarkInstances();
      finalString += '<div data-role="collapsible">'; 
      finalString += '<h3>' + markCategories[i].getCategoryName() + ' - ' + markCategories[i].averageOverall() + '%</h3>';
   
      for (var x in markInstances) 
      {
         finalString += '<div data-role="controlgroup" data-type="horizontal" data-mini="true" class="markentry">';
         finalString += '<a class="ui-btn markbutton ui-state-disabled" href="">' + markInstances[x].getName() + ' - ' + markInstances[x].getPercentage() + '%</a>';
         finalString += '<a class="ui-btn ui-icon-edit ui-btn-icon-notext markedit" href="">Edit</a>';
         finalString += '<a class="ui-btn ui-icon-delete ui-btn-icon-notext markdelete" href="">Delete</a>';
         finalString += '</div>' 
      }
      finalString += '</div>';      
   }
      
   $('#mark-data').empty();
   $('#mark-data').append(finalString);
   $('#mark-data').trigger('create');
}
