
















function videopart(){
    var video = document.querySelector("#videopart");
var cursor = document.querySelector(".videocursor");


video.addEventListener("mouseenter", (event) => {
    cursor.style.opacity = 1;
})
video.addEventListener("mouseleave", () => {

    cursor.style.opacity = 0;
})


video.addEventListener("mousemove", (event) => {
    gsap.to(".videocursor", {
        x: event.x-70,
        y: event.y-70,
    })
})


}

function cursoranimation(){
    document.addEventListener("mousemove",(dets)=> {
        gsap.to(".bodycursor",{
            x:dets.x,
            y:dets.y
        })
    
    })
    var cuberto = document.querySelector("#cuberatormain");

cuberto.addEventListener("mousemove",(dets)=> {
    gsap.to(".bodycursor",{
        x:dets.x,
        y:dets.y
    })
})

var cubertopart= document.getElementById("cuberatormain");

cubertopart.addEventListener("mousemove",(elem)=> {
    gsap.to(".cubertocursor",{
        x:elem.x-100,
        y:elem.y-400,

    })
})

}


function navmenu(){
 var tl= gsap.timeline();
tl.to("#openav",{
    right:0,
    duration:.1,
    stagger:.1
})
tl.from("#openav .topnav h4",{
    duration:.2,
    stagger:.1,
    opacity:0
},"nav")
tl.from("#openav .topnav p",{
    duration:.2,
    stagger:.1,
    opacity:0
},"nav")

tl.from("#openav i",{
    duration:.1,
    stagger:.1,
    opacity:0
})
tl.from("#openav .btmnav",{
    duration:.2,
    stagger:.2,
    opacity:0,
    delay:1.5
},"nav")

tl.pause();

var menu = document.querySelector("#nav .right i");
menu.addEventListener("click",()=> {
 tl.play();
})
  

var closemenu= document.querySelector("#nav #openav i");
closemenu.addEventListener("click",()=> {
    tl.reverse()
})
}


function video2open(){
    
var cursorvideoplay= document.querySelector(".videocursor")
let video = document.querySelector("#videopart .video2");
let video1 = document.querySelector("#videopart .video1");
var iconeclose = document.querySelector("#videopart .videocursor2")
video.pause()
cursorvideoplay.addEventListener("click",()=> {
  
    video.play();
    gsap.to(video,{
        opacity:1,
        y:150,
        borderRadius:"10px",
        width:"70%",
        height:"100%"

    })
    gsap.to(video1,{
        opacity:0,
      

    })
   
})

video.addEventListener("click",()=> {
    gsap.to(video,{
        opacity:0,
    },"open")
    gsap.to(video1,{
        opacity:1,
      
    
    },"open")
  

})
}

function changecursoreverypage(){
    
var blackpart= document.querySelector("#blackdiv");
var changecursor = document.querySelector(".bodycursor");
blackpart.addEventListener("mouseenter",()=> {
    changecursor.style.backgroundColor="white"
})
blackpart.addEventListener("mouseleave",()=> {
    changecursor.style.backgroundColor="black"
})

var videopartcursor= document.querySelector("#videopart");
videopartcursor.addEventListener("mouseenter",()=> {
    changecursor.style.opacity=0
})

videopartcursor.addEventListener("mouseleave",()=> {
    changecursor.style.opacity=1
})
var cubertocursro= document.querySelector("#cuberatormain .rightcuberato button");
cubertocursro.addEventListener("mouseenter",()=> {
    changecursor.style.backgroundColor="white"

})
cubertocursro.addEventListener("mouseleave",()=> {
    changecursor.style.backgroundColor="black"
})
var cusronav = document.querySelector("#openav");
cusronav.addEventListener("mouseenter",()=> {
    changecursor.style.backgroundColor="white"

})
cusronav.addEventListener("mouseleave",()=> {
    changecursor.style.backgroundColor="black"
})
var blackpage= document.querySelector("#page6");
blackpage.addEventListener("mouseenter",()=> {
    changecursor.style.backgroundColor="white"


})
blackpage.addEventListener("mouseleave",()=> {
    changecursor.style.backgroundColor="black"


})
var blackpage= document.querySelector("#page8");
blackpage.addEventListener("mouseenter",()=> {
    changecursor.style.backgroundColor="white"


})
blackpage.addEventListener("mouseleave",()=> {
    changecursor.style.backgroundColor="black"


})
var blackpage= document.querySelector(".insta");
blackpage.addEventListener("mouseenter",()=> {
    changecursor.style.backgroundColor="black"


})
blackpage.addEventListener("mouseleave",()=> {
    changecursor.style.backgroundColor="white"


})
var blackpage= document.querySelector(".moveinsta");
blackpage.addEventListener("mouseenter",()=> {
    changecursor.style.backgroundColor="black"


})
blackpage.addEventListener("mouseleave",()=> {
    changecursor.style.backgroundColor="white"


})
var blackpage= document.querySelector("#page9");
blackpage.addEventListener("mouseenter",()=> {
    changecursor.style.backgroundColor="white"


})
blackpage.addEventListener("mouseleave",()=> {
    changecursor.style.backgroundColor="black"


})


}


function divescursor(){
    var videoblack= document.querySelectorAll(".blackbtmpart .cardvideo");
    var videoblackcursor= document.querySelector(".blackcursor");
    videoblack.forEach((elem)=> {
    
        elem.addEventListener("mouseenter",()=> {
    
            gsap.to(elem.childNodes[1], {
                opacity: 1,
                scale: 1
            })
            gsap.to(changecursor,{
                opacity:0
            })
            
        })
        elem.addEventListener("mouseleave",()=> {
            gsap.to(elem.childNodes[1], {
                opacity: 0,
                scale: 0
            })
            gsap.to(changecursor,{
                opacity:1
            })
        })
    
        elem.addEventListener("mousemove",(dets)=> {
            gsap.to(elem.childNodes[1], {
                x: dets.x - elem.getBoundingClientRect().x - 60,
                y: dets.y - elem.getBoundingClientRect().y - 40,
            })
        })
        
    
    
    })
}


function page6imgcursordrag(){
    
var page6imagescursor= document.querySelectorAll(".page6img");
page6imagescursor.forEach((elems)=> {
   elems.addEventListener("mouseenter",()=> {
   gsap.to(elems.childNodes[1],{
    opacity:1,
    scale:1,
    duration:.5

   })
    })
    elems.addEventListener("mouseleave",()=> {
        gsap.to(elems.childNodes[1],{
         opacity:0,
         scale:0,
      duration:.5

        })
         })
    elems.addEventListener("mousemove",(dets)=> {
       gsap.to(elems.childNodes[1],{
        x: dets.x - elems.getBoundingClientRect().x - 60,
        y: dets.y - elems.getBoundingClientRect().y - 40,
       })

    })
    


})
}

function textmovindaimation()
{
    
var animaiton = document.querySelector("#page7");
animaiton.addEventListener("wheel",(dets)=> {
    if(dets.deltaY>0){
        gsap.to(".move",{
            transform:"translateX(-200%)",
            duration:16,
            ease:"none",
            repeat:-1
        })
    }
    else{
        gsap.to(".move",{
            transform:"translateX(0%)",
            duration:16,
            ease:"none",
            repeat:-1
        })
       
       
    }

})
}



function page4imgcursro(){
        
var page7imagescursor= document.querySelectorAll(".page7div");
page7imagescursor.forEach((elems)=> {
   elems.addEventListener("mouseenter",()=> {
   gsap.to(elems.childNodes[1],{
    opacity:1,
    scale:1,
    duration:.5

   })
    })
    elems.addEventListener("mouseleave",()=> {
        gsap.to(elems.childNodes[1],{
         opacity:0,
         scale:0,
      duration:.5

        })
         })
    elems.addEventListener("mousemove",(dets)=> {
       gsap.to(elems.childNodes[1],{
        x: dets.x - elems.getBoundingClientRect().x - 60,
        y: dets.y - elems.getBoundingClientRect().y - 40,
       })

    })
    


})
}


 function page8folowanimation(){

      
var animaiton2 = document.querySelector("#page8");
animaiton2.addEventListener("wheel",(dets)=> {
    if(dets.deltaY>0){
        gsap.to(".folow",{
            transform:"translateX(-200%)",
            duration:9,
            ease:"none",
            repeat:-1
        })
    }
    else{
        gsap.to(".folow",{
            transform:"translateX(0%)",
            duration:9,
            ease:"none",
            repeat:-1
        })
       
       
    }

})
 }

 page8folowanimation();

page4imgcursro();
textmovindaimation();
page6imgcursordrag();
divescursor();
changecursoreverypage();
video2open();
cursoranimation();
videopart();
navmenu();

