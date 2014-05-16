var markViewPanels = [$('#main_mark_averages'), $('#chart_markpanel')];
var chartmarkpanel = $('#chart_markpanel');
var navButtonLeft = $('#main_mark_navleft');
var navButtonRight = $('#main_mark_navright');
var navCounter = 0;

$(document).ready(function() {
  var markViewPanels = [$('#main_mark_averages'), $('#chart_markpanel')];
  var navButtonLeft = $('#main_mark_navleft');
  var navButtonRight = $('#main_mark_navright');
  
  for (var i in markViewPanels)
  {
    if ( i != 0 )
      markViewPanels[i].hide();
  }

  navButtonLeft.hide();
  console.log('panel initialized');
});

function navLeft() {
  $('#main_mark_averages').show();
  $('#main_mark_navleft').hide();
  $('#main_mark_navright').show();
  $('#chart_markpanel').hide();
  console.log('navLeft called');
};

function navRight() {
  $('#main_mark_averages').hide();
  $('#main_mark_navright').hide();
  $('#main_mark_navleft').show();
  $('#chart_markpanel').show();
  drawChart();
  console.log('navRight called');
};


// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.
  var coursesToGraph = myCSTCourses.getSelectedCourseMarks();
  var graphArray = [ ['Courses', 'Average'] ];

  if ( coursesToGraph.length == 0 )
    graphArray.push(['No Courses Added', 0]);
  console.log(graphArray);

  for (var i in coursesToGraph ) {
    console.log(coursesToGraph[i].getName());
    console.log(coursesToGraph[i].tallyMarks());
    if ( coursesToGraph[i].tallyMarks() < 0 )
      graphArray.push([coursesToGraph[i].getName(), 0]);
    else
      graphArray.push([coursesToGraph[i].getName(), coursesToGraph[i].tallyMarks()]);
  }
  
  console.log(graphArray);

  var data = new google.visualization.arrayToDataTable(graphArray);

  // Set chart options
  var options = {'title':'Course Averages',
                 'titlePosition': 'none',
                 'legend': 'none',
                 width: '100%',
                 height: '100%',
                 'vAxis': {
                    viewWindowMode: 'explicit',
                    viewWindow: {
                      min: 0,
                      max: 101
                    }
                 },
                 'hAxis.minTextSpacing': '8',
                };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_markpanel'));
  chart.draw(data, options);
  $('chart_markpanel').enhanceWithin();
  console.log('chart refreshed');
}