

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
    "text" : "Currently Reading : ",
    "color" : "#2d2d2d",
    "style" : "oblique",
  },
  {
    "text" : "Coming Soon...",
    "color" : "#2d2d2d",
    "style" : "oblique",
  },
  {
    "text" : "MUST READ : ",
    "color" : "#2d2d2d",
    "style" : "oblique",
  },
  {
    "text" : "Vim > Emacs!",
    "color" : "#2d2d2d",
    "style" : "oblique",
  },
  {
    "text" : "GamerTag : ",
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
var info = [
  {
    "text": "\'The Great Indian Novel\' "
  },
  {
    "text" : "Flock Together!!!"
  },
  {
    "text": "\'The Three Body Problem\'"
  },
  {
    "text": "Tabs > Spaces!!"
  },
  {
    "text": "Kavka"
  },
  {
    "text": ""
  },
  {
    "text": ""
  },
  {
    "text": ""
  },
];
var moreInfo = [
  {
    "text": "by Shashi Tharoor."
  },
  {
    "text": ""
  },
  {
    "text": "by Cixin Liu."
  },
  {
    "text": "MacOS > Windows!!!"
  },
  {
    "text":""
  },
   {
    "text":""
  },
  {
    "text": ""
  },
  {
    "text": ""
  },
];


  var generated =  Math.floor(Math.random() * infoHead.length);
  console.log(infoHead[generated]["text"]);
  document.querySelector(".infoHead").innerHTML = infoHead[generated]["text"];
  document.querySelector(".infoFact").innerHTML = info[generated]["text"];
  document.querySelector(".moreInfo").innerHTML = moreInfo[generated]["text"];
  console.log(document.getElementsByClassName("infoHead").innerHTML);

