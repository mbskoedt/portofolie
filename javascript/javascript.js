// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
  setActiveTab(pageId);
}

// set default page
function setDefaultPage() {
  let page = 'index';
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

// sets active tabbar/ menu item
function setActiveTab(pageId) {
  let pages = document.querySelectorAll(".tabbar a");
  for (let page of pages) {
    if (`#${pageId}` === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }

  }
}

setDefaultPage();

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.project-arrow').fadeIn();
  } else {
    $('.project-arrow').fadeOut();
  }
});

function myFunction(x) {
  x.classList.toggle("change");
}

////// Display elements

function refresh() {
  var elems = document.getElementsByClassName('elements');
  for (var i = 0; i < elems.length; i += 1) {
    elems[i].style.display = 'block';
  }
}
///////

/* SNIPPET FRA https:
//codemyui.com/animated-long-shadow-text-effect/

TEXT ANIMATION LIGESOM SYVKABALE */

///////
/*
var canvas = document.querySelector('.the-canvas');
var context = canvas.getContext('2d');
var ratio = window.devicePixelRatio || 1;

var totalLineHeight = 680;
var totalLines = 4;
var totalDiff = totalLineHeight / totalLines;
var fontHeight = 60 * ratio - 50; // Small centering

var smallestWidth = 280; // width of smallest line;
var offsetX = 12;
var offsetY = 6;
var iterations;
var verticalAlign, line1Diff, line2Diff, line3Diff, line4Diff, iterations, iteration, animationFrame;

var startRGB = [255, 255, 255];
var endRGB   = [220, 165, 163];
var fullColorSet = [];

init();

function init() {

  // Cancel any already running animations
  cancelAnimationFrame(animationFrame);

  // Set the canvas width and height
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;

  // Set the canvas font properties
  context.font = '180px Montserrat';
  context.textAlign = 'center';
  context.fillStyle = '#fff';
  context.strokeStyle = "#F0A5A3";
  context.lineWidth = "3";
  context.textBaseline = "middle";

  // Centering of the text
  verticalAlign = (window.innerHeight / 2  * ratio) - totalLineHeight / 2;
  line1Diff = totalLineHeight + fontHeight - totalDiff;
  line2Diff = totalLineHeight + fontHeight - totalDiff * 2;
  line3Diff = totalLineHeight + fontHeight - totalDiff * 3;
  line4Diff = totalLineHeight + fontHeight - totalDiff * 4;

  // How many iterations will we go through?
  iterations = Math.floor(((window.innerWidth * ratio / 2) - (smallestWidth * ratio / 2)) / offsetX + 5);
  prepareColorSets(iterations);

  iteration = 0;

  animationFrame = requestAnimationFrame(draw);
}

// Draw loop
function draw() {

  context.clearRect(0, 0, canvas.width, canvas.height);

  for( var i = iterations - 1; i > 0; i-- ) {
    context.fillStyle = 'rgb(' + fullColorSet[i][0] + ',' + fullColorSet[i][1] + ',' + fullColorSet[i][2] + ')';
    var x = window.innerWidth / 2 * ratio - i * offsetX;
    var y = verticalAlign + i * offsetY + (Math.sin(i + iteration) * 2);
    drawText( x, y );
  }

  iteration += 0.1;
  animationFrame = requestAnimationFrame(draw);
}

// Draw the single lines of text.
function drawText(x, y) {

  context.fillText("MATIAS", x, y + line4Diff);
  context.strokeText("MATIAS", x, y + line4Diff);

  context.fillText("SKØDT", x, y + line3Diff);
  context.strokeText("SKØDT", x, y + line3Diff);

  context.fillText("MATIAS", x, y + line2Diff);
  context.strokeText("MATIAS", x, y + line2Diff);

  context.fillText("SKØDT", x, y + line1Diff);
  context.strokeText("SKØDT", x, y + line1Diff);
}

// We do this so we don't have to calculate these EVERY loop.
function prepareColorSets(iterations) {
  fullColorSet = [];
  for( var i = 0; i < iterations; i++ ) {
    fullColorSet.push(colourGradientor(1 - i / iterations, startRGB, endRGB));
  }
}

// THNX - http://stackoverflow.com/questions/14482226/how-can-i-get-the-color-halfway-between-two-colors
function colourGradientor(p, rgb_beginning, rgb_end){

  var w = p * 2 - 1;
  var w1 = (w + 1) / 2.0;
  var w2 = 1 - w1;
  var rgb = [parseInt(rgb_beginning[0] * w1 + rgb_end[0] * w2),
             parseInt(rgb_beginning[1] * w1 + rgb_end[1] * w2),
             parseInt(rgb_beginning[2] * w1 + rgb_end[2] * w2)];
  return rgb;
};

window.onresize = init;
*/
