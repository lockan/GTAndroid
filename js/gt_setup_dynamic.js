// Test data. Will eventually pull from database/other file. 
var courses = myCSTCourses.getAllCourseMarks();

// populates the setup screen course list. 
function populateCourseSetup() {
	$(document).ready( function() {
		$('.setup').append('<fieldset data-role="controlgroup" id="setup_courselist"><legend>Select courses to display:</legend>');
		for ( var i in courses ) {	
			createCourseListEntry(i);
		}
		$('.setup').append('</fieldset>');		
		console.log("Setup Page - Courses loaded");	
	});
}

// Creates a single entry in the setup screen course list
function createCourseListEntry(i) {
	$('.setup').append('<label for="checkbox-'+ i +'">'+ courses[i].getName() +'</label><input type="checkbox" name="checkbox-'+i+'" id="checkbox-'+i+'" class="setup_checkboxes">');

/* Andrew's old, brusted method. Keeping for posterity. 
	$('#setup_courselist').controlgroup("container").append(' <label for="dynamic1"> COMP 5555 </label> ');
	$('#setup_courselist').controlgroup("container").append(' <input type="checkbox" name="dynamic1" id="dynamic1" class="setup_checkboxes"> ');
	$('#setup_courselist').checkboxradio();
	$('#setup_courselist').enhanceWithin().controlgroup("refresh");
*/
}



   
   
      

   
