var t = new Trianglify();
var pattern = t.generate(window.innerWidth, window.innerHeight);

var frames = ["<h1><a href='Physics/Physics.html'>Physics</a></h1><h3>A Unity Physics Simulation</h3><iframe width='100%' height='100%' src='Physics/Physics.html' frameborder='0' />",
"<h1><a href='//www.github.com/AgentEpsilon/GradeCalc'>GradeCalc</a></h1><h3>A BPS Grade Calculator</h3><iframe width='100%' height='100%' src='GradeCalc/index.html' frameBorder='0'></iframe>",
"<h1><a href='//www.github.com/AgentEpsilon/Mineshock'>Mineshock</a></h1><h2>A Minecraft mod in progress</h2>"];

var index = 0;

var nextIndex = function(){
  index = (index + 1)%frames.length;
  return index;
};
var previousIndex = function(){
  index = ((index - 1)==-1)?frames.length-1:index-1;
  return index;
};

var slideRight = function(){
  var frame = $(".frame");
  frame.addClass("animated bounceOutLeft");
  frame.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    var frame = $(".frame");
    frame.removeClass("animated bounceOutLeft");
    frame.html(frames[nextIndex()]);
    frame.addClass("animated bounceInRight");
    frame.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      frame.removeClass("animated bounceInRight");
    });
  });
};
var slideLeft = function(){
  var frame = $(".frame");
  frame.addClass("animated bounceOutRight");
  frame.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    var frame = $(".frame");
    frame.removeClass("animated bounceOutRight");
    frame.html(frames[previousIndex()]);
    frame.addClass("animated bounceInLeft");
    frame.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      frame.removeClass("animated bounceInLeft");
    });
  });
};


$(document).ready(function(){
$("body").attr('style', 'background-image: '+pattern.dataUrl);
$(".center").append("<div class='frame'>"+frames[0]+"</div>");
console.log("Page Loaded.");
});
