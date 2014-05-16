/* This script contains various functions that concern
the gradetracker UI */

var nav_home;   
var nav_add;
var nav_setup;
var nav_heading;

function initNavVars()
{
	console.log("Initialize nav variables");
	
	nav_home = $('#navhome');
	nav_add = $('#navadd');
	nav_setup = $('#navsetup');
	nav_heading = $('#nav_heading');
}


function startAddListener() {
	console.log("Starting add listener");
	$(document).on('pagechange', function(e) {
		if ( $.mobile.activePage.attr('id') == 'add') {
			console.log("UPDATE ADD MARK COURSE LIST");
            var tracked = myCSTCourses.getSelectedCourseMarks();
        
            $('#select-course').empty();
            $('#select-course').append('<option>Select a course</option>');
            for ( var i in tracked ) {	
                //console.log('<option value="' + tracked[i].getName() + '">' + tracked[i].getName() + '</option>');
                $('#select-course').append('<option value="' + tracked[i].getName() + '">' + tracked[i].getName() + '</option>');
            }
		}
    });
 }

function startNavListener()
{
	console.log("Starting nav listener");
	$(document).on('pagechange', function(e) {
		console.log("Page change detected");
		if ( $.mobile.activePage.attr('id') == 'home') {
			console.log("GO HOME!");
			nav_home.on("pagecontainerhide", fixNav_Home());
		}
		if ( $.mobile.activePage.attr('id') == 'add') {
			console.log("GO ADD!");
			nav_add.on("pagecontainerhide", fixNav_Add());
		}
		if ( $.mobile.activePage.attr('id') == 'setup') {
			console.log("GO SETUP!");
			nav_setup.on("pagecontainerhide", fixNav_Setup());
		}
		if ( $.mobile.activePage.attr('id') == 'courseview') {
			console.log("GO COURSEVIEW!");
			$("#courseview").on("pagecontainerhide", fixNav_CrsView());
		}
	});	
}

function fixNav_Home()
{
	console.log("Toggle nav to HOME config");

		//Set Page title
		nav_heading.html('Home');
		
		//Toggle active button status
		nav_home.addClass('ui-btn-active');
		nav_add.removeClass('ui-btn-active');
		nav_setup.removeClass('ui-btn-active');

		//Set transition directions
		nav_home.removeAttr('data-direction');
		nav_add.removeAttr('data-direction');
		nav_setup.removeAttr('data-direction');
}

function fixNav_Add()
{
	console.log("Toggle nav to ADD config");
	
		//Set Page title
		nav_heading.html('Add Mark');

		//Toggle active button status
		nav_add.addClass('ui-btn-active');
		nav_home.removeClass('ui-btn-active');
		nav_setup.removeClass('ui-btn-active');

		//Set transition directions
		nav_home.attr('data-direction', 'reverse');
		nav_add.removeAttr('data-direction');
		nav_setup.removeAttr('data-direction');
}

function fixNav_Setup()
{
	console.log("Toggle nav to SETUP config");
	
		//Set Page title
		nav_heading.html('Course Setup');
		
		//Toggle active button status
		nav_setup.addClass('ui-btn-active');
		nav_home.removeClass('ui-btn-active');
		nav_add.removeClass('ui-btn-active');

		//Set transition directions
		nav_home.attr('data-direction', 'reverse');
		nav_add.attr('data-direction', 'reverse');
		nav_setup.removeAttr('data-direction');
}

function fixNav_CrsView()
{
	console.log("Toggle nav to COURSE-VIEW config");
		
		//Set Page title
		nav_heading.html('Course View');
		
		//Toggle active button status
		nav_setup.removeClass('ui-btn-active');
		nav_home.removeClass('ui-btn-active');
		nav_add.removeClass('ui-btn-active');

		//Set transition directions
		nav_home.attr('data-direction', 'reverse');
		nav_add.removeAttr('data-direction');
		nav_setup.removeAttr('data-direction');
}

function showAddPopUp()
{
    var popupText = '<p>Mark <b>' + $("#note").val() + '</b> added to course <b>' + $("#select-course").find("option:selected").text() + '</b></p>';
    $('#popupAdd').empty();
    $('#popupAdd').append(popupText);
    $('#popupAdd').trigger('create');
    
	$('#popupAdd').popup("open");
	setTimeout( function() {
		$('#popupAdd').popup('close')
	}, 
	3000);	
}