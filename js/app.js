

let cursor = document.querySelector(".cursor");

let sizeup = document.querySelectorAll(".hover");

window.addEventListener("mousemove", customcursor);
function customcursor(e) {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
}
sizeup.forEach(item => {
  item.addEventListener("mouseover", ()=>{
    cursor.classList.add("growcursor");
  })
})

sizeup.forEach(item => {
  item.addEventListener("mouseleave", ()=>{
    cursor.classList.remove ("growcursor");
  })
})


var coll = document.getElementsByClassName("collapsible");
var con = document.getElementsByClassName("content");
var i;
var prev ;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
        prev = null;
    } else {
        for(i=0; i<con.length; i++){
            con[i].style.maxHeight = null;
            
        }
        if(prev){
            prev.toggle("active");
        }
      content.style.maxHeight = content.scrollHeight + "px";
      prev = this.classList;
    }
  });
}

var random = document.getElementsByClassName("random");

var infoHead = [
  {
    "text" : "Currently Reading : \'The Great Indian Novel\' by Shashi Tharoor.",
    "color" : "#2d2d2d",
    "style" : "oblique",
  },
  {
    "text" : "Coming Soon...Flock Together!!!",
    "color" : "#2d2d2d",
    "style" : "oblique",
  },
  {
    "text" : "MUST READ : \'The Three Body Problem\' by Cixin Liu.",
    "color" : "#2d2d2d",
    "style" : "oblique",
  },
  {
    "text" : "Vim > Emacs!Tabs > Spaces!!MacOS > Windows!!!",
    "color" : "#2d2d2d",
    "style" : "oblique",
  },
  {
    "text" : "GamerTag : Kavka",
    "color" : "#2d2d2d",
    "style" : "oblique",
  },
  {
    "text" : "Baking Brownies For Everybody!",
    "color" : "#2d2d2d",
    "style" : "oblique",
  },
  {
    "text" : "Fist Bump Me If I Know You!",
    "color" : "#2d2d2d",
    "style" : "oblique",
  },
  {
    "text" : "THE CAFFEINE JUST KICKED IN!!!!!!",
    "color" : "#2d2d2d",
    "style" : "oblique",
  },
];



  var generated =  Math.floor(Math.random() * infoHead.length);
  console.log(infoHead[generated]["text"]);
  document.querySelector(".infoHead").innerHTML = infoHead[generated]["text"];

// Theme.js
// Description: Random theme will be applied on loading of screen. It can be manually changed from the top left corner
var ThemeSelect = document.querySelectorAll(".Theme");
var major = document.querySelectorAll(".Major");
var minor = document.querySelectorAll(".Minor");
var majorbg = document.querySelectorAll(".MajorBg");
var minorbg = document.querySelectorAll(".MinorBg");
var themes = [
  {
    "name" : "a",
  },
  {
    "name" : "b",
  },
  {
    "name" : "c",
  },
  {
    "name" : "d"
  }
]
var randomTheme = Math.floor(Math.random() * themes.length);
var prevTheme = document.querySelector("#" + themes[randomTheme]["name"]);
$(prevTheme).css({"border": "2px solid #2d2d2d"},);
themeChanger(prevTheme.id);

ThemeSelect.forEach(Theme => {
  Theme.addEventListener("click", ()=>{
    $(Theme).css({"border": "2px solid #2d2d2d"},);
    if(prevTheme != Theme){
      $(prevTheme).css({"border": "2px hidden #2d2d2d"},);
      themeChanger(Theme.id);
    }
  prevTheme = Theme;
  });
});


function themeChanger(themeName) {
  var pp = document.querySelector(".ProfilePicture");
  var minorbgclr, majorbgclr, minorclr, majorclr; 
  if(themeName == "a"){
    $("#favicon").attr("href","./images/Favicon.png");
    $(pp).hover(function () {
      $(this).css({"background-image" : "url(\"../images/Profile\ Picture.png\")"});
    },
    function () {
      $(this).css({"background-image" : "url(\"../images/sumedh.JPG\")"});
    });
    minorbgclr = "#2d2d2d";
    majorbgclr = "#fffc31";
    minorclr = "#2d2d2d";
    majorclr = "#fffc31";
  }else if (themeName == "b") {
    minorbgclr = "#2d2d2d";
    majorbgclr = "#55d6c2";
    minorclr = "#f6f5ea";
    majorclr = "#55d6c2";

  } else if (themeName == "c") {
      $("#favicon").attr("href","./images/Favicon_c.png");
      $(pp).hover(function () {
        $(this).css({"background-image" : "url(\"../images/Profile\ Picture_c.png\")"});
      },
      function () {
        $(this).css({"background-image" : "url(\"../images/sumedh.JPG\")"});
      });
      minorbgclr = "#2d2d2d";
      majorbgclr = "#9a999d";
      minorclr = "#e1aa7d";
      majorclr = "#f6f5ea";  
  } else if (themeName == "d") {
    minorbgclr = "#2d2d2d";
    majorbgclr = "#ef5b5b";
    minorclr = "#94c9a9";
    majorclr = "#94c9a9";
  } else {
    minorbgclr = "#2d2d2d";
    majorbgclr = "#8e96fe";
    minorclr = "#2d2d2d";
    majorclr = "#f6f5ea";
  }
   major.forEach(M => {
      $(M).css({"color" : majorclr});
    });
    minor.forEach(m => {
      $(m).css({"color" : minorclr});
    });
    majorbg.forEach(Mbg => {
      $(Mbg).css({"background-color" : majorbgclr});
    });
    minorbg.forEach(mbg => {
      $(mbg).css({"background-color" : minorbgclr});
    });
}

var mail = document.querySelector("#submit");
mail.addEventListener("click", function () {
  var name = document.querySelector("#name").value;
  var email =  document.querySelector("#email").value;
  var message = document.querySelector("#message").value;
  $.ajax({
      url: "../php/mail.php",
      method: "POST",
      type: "POST",
      data: {
        name: JSON.stringify(name),
        email: JSON.stringify(email),
        message: JSON.stringify(message),
      },
      success: function (res) {
        console.log(res);
        consolee.log("hello");
      },
    });
})
