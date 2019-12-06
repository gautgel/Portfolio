// initialization of lax.js
window.onload = function() {
    lax.setup({
        breakpoints: { s:0 , m:1380 , l:1900}
    }) // init

    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }
    
    window.requestAnimationFrame(updateLax)
}
//


// anim for the navbar
function animNav (){
    const nav = document.querySelector("nav");
        const menu = document.querySelector("ul");
        const onglets = document.querySelectorAll(".onglets");

        if(scrollY>0){
        nav.classList.add("nav-active");
        menu.classList.add("menu-active");
        menu.classList.remove("menu");
        onglets.forEach(onglets => {
            onglets.classList.add("onglets-active");
        });
    }
    else{
        nav.classList.remove("nav-active");
        menu.classList.remove("menu-active");
        menu.classList.add("menu");
        onglets.forEach(onglets => {
            onglets.classList.remove("onglets-active");
        });
    }
}
//

//mediaqueries in order to delete gsap animations
if(window.innerWidth>1360){
    
    addEventListener("scroll", animNav);
    // anim from gsap
    //initialization of scrollmagic plugin
    
    const controller = new ScrollMagic.Controller();
    
    //anim paper boat
    
    //the path of my animation (same for the paper plane)
    const navPath = {
        curviness: 2.25,
        autoRotate: true,
        values:[
            {x:100, y:5},{x:300, y:64},{x:500, y:23},{x:800, y:50},{x:1000, y:0},{x:1250, y:60},{x:window.innerWidth+55, y:60}
        ]
    }
    
    //initialization of timelinelite
    const sail = new TimelineLite();
    
    sail.add(TweenLite.to(".paperBoat", 1, {bezier: navPath, ease: Power1.easeInOut}));
    
    const sea = new ScrollMagic.Scene({
        triggerElement:".story",
        duration: 1500,
        triggerHook: 0.3
    }).setTween(sail).setPin(".story").addTo(controller);
    
    //anim paper plane
    const flightPath = {
        curviness: 2.25,
        autoRotate: true,
        values:[
            {x: 200, y: -20},{x:300, y:10},{x:400, y:40},{x:500, y:10},{x:600, y:-80},{x:700, y:-120},{x:800, y:-110},{x:900, y:-80},{x:950, y:0},{x:900, y:30},{x:800, y:50},{x:650, y:20},{x:600, y:-60},{x:900, y:-80},{x:1200, y:60},{x:window.innerWidth+60, y:60}
        ]
    }

    const fly = new TimelineLite();

    fly.add(TweenLite.to(".paperPlane", 1, {bezier: flightPath, ease: Power1.easeInOut}));

    
    const scene = new ScrollMagic.Scene({
        triggerElement:".skills",
        duration: 1500,
        triggerHook: 0.3
    }).setTween(fly).setPin(".skills").addTo(controller);
}
//



//pop-closed
const cross = document.querySelector(".cross");
const pop = document.querySelector(".pop");
cross.addEventListener("click", ()=>{
    pop.classList.add("popActivate");
    //jquery.eraser-> choose a div then erase it (size:100 is there to increase the erasing zone)
    const erased= $(".erased");
    erased.eraser({size: 100});
    //
})
//

//activating card with mouseover event
const design = document.querySelector(".design");
const agile= document.querySelector(".agile");
const designCard= document.querySelector(".design-card");
const agileCard= document.querySelector(".agile-card");



function activated(element, card)
{
    element.addEventListener("mouseover", ()=>{
        card.classList.add("cardActivate");
        element.style.color="rgba(44, 44, 44, 0)";
    })
    element.addEventListener("mouseout", ()=>{
        card.classList.remove("cardActivate");
        element.style.color="rgba(44, 44, 44, 1)";
    })
}
//

activated(design, designCard);
activated(agile, agileCard);


const bottle = document.querySelector(".bottle");
const mdni = document.querySelector(".mdni");
const pounta = document.querySelector(".pounta");
const mdh = document.querySelector(".mdh");
const maquette = document.querySelector(".maquette");
const eval = document.querySelector(".eval");

const screenBottle = document.querySelector(".screenBottle");
const screenMdni = document.querySelector(".screenMdni");
const screenPounta = document.querySelector(".screenPounta");
const screenMdh = document.querySelector(".screenMdh");
const screenMaquette = document.querySelector(".screenMaquette");
const screenEval= document.querySelector(".screenEval");

const cross1 = document.querySelector(".cross1");
const cross2 = document.querySelector(".cross2");
const cross3 = document.querySelector(".cross3");
const cross4 = document.querySelector(".cross4");
const cross5 = document.querySelector(".cross5");
const cross6 = document.querySelector(".cross6");

const infoBottle = document.querySelector(".infoBottle");
const infoMdni = document.querySelector(".infoMdni");
const infoPoun = document.querySelector(".infoPounta");
const infoMdh = document.querySelector(".infoMdh");
const infoMaq = document.querySelector(".infoMaq");
const infoEval = document.querySelector(".infoEval");

const inf1 = document.querySelector(".inf1");
const inf2 = document.querySelector(".inf2");
const inf3 = document.querySelector(".inf3");
const inf4 = document.querySelector(".inf4");
const inf5 = document.querySelector(".inf5");
const inf6 = document.querySelector(".inf6");

const paragBottle = document.querySelector(".paragBottle");
const paragMdni = document.querySelector(".paragMdni");
const paragPounta = document.querySelector(".paragPounta");
const paragMdh = document.querySelector(".paragMdh");
const paragMaq = document.querySelector(".paragMaq");
const paragEval = document.querySelector(".paragEval");

appActive = (divActive, div1, div2, div3, div4, div5, div6, cross, inf, btn, para) =>{
    divActive.addEventListener("click", ()=>{
        if(div1.classList.contains("screenActive"))
        {
            div1.classList.remove("screenActive");
            setTimeout(()=>{
                div6.classList.add("screenActive");
            }, 500)
        }
        else if(div2.classList.contains("screenActive"))
        {
            div2.classList.remove("screenActive");
            setTimeout(()=>{
                div6.classList.add("screenActive");
            }, 500)
        }
        else if(div3.classList.contains("screenActive"))
        {
            div3.classList.remove("screenActive");
            setTimeout(()=>{
                div6.classList.add("screenActive");
            }, 500)
        }
        else if(div4.classList.contains("screenActive"))
        {
            div4.classList.remove("screenActive");
            setTimeout(()=>{
                div6.classList.add("screenActive");
            }, 500)
        }
        else if(div5.classList.contains("screenActive"))
        {
            div5.classList.remove("screenActive");
            setTimeout(()=>{
                div6.classList.add("screenActive");
            }, 500)
        }
        else if(!div6.classList.contains("screenActive"))
        {
            div6.classList.add("screenActive");
        }
        cross.addEventListener("click", ()=>{
            div6.classList.remove("screenActive");
        })
        btn.addEventListener("mouseover", ()=>{
            inf.classList.add("infoActivate");
            setTimeout(() => {
                para.classList.add("pActivate");
            }, 100);
        })
        btn.addEventListener("click", ()=>{
            para.classList.remove("pActivate");
            inf.classList.remove("infoActivate");
        })
    })
}

appActive(bottle, screenMdni, screenPounta, screenMdh, screenMaquette, screenEval, screenBottle, cross1, infoBottle, inf1, paragBottle);
appActive(mdni, screenBottle, screenPounta, screenMdh, screenMaquette, screenEval, screenMdni, cross2, infoMdni, inf2, paragMdni);
appActive(pounta, screenBottle, screenMdni, screenMdh, screenMaquette, screenEval, screenPounta, cross3, infoPoun, inf3, paragPounta);
appActive(mdh, screenBottle, screenPounta, screenMdni, screenMaquette, screenEval, screenMdh, cross4, infoMdh, inf4, paragMdh);
appActive(maquette, screenBottle, screenPounta, screenMdh, screenMdni, screenEval, screenMaquette, cross5, infoMaq, inf5, paragMaq);
appActive(eval, screenBottle, screenPounta, screenMdh, screenMaquette, screenMdni, screenEval, cross6, infoEval, inf6, paragEval);

// let boundScreenLeft = screen.getBoundingClientRect().left;
// let boundScreenTop = screen.getBoundingClientRect().top;
// let boundScreenRight = screen.getBoundingClientRect().right;
// let boundScreenBottom = screen.getBoundingClientRect().bottom;

// console.log(boundScreenLeft, boundScreenTop);

// deplacer = (div, img) => {
//     //the draggable.create function is very easy to use, type of drag, the resistance of the drag, the borders of the drag with window so the window compared to the div wall. it's a greensock pluggin 
//     // Draggable.create(".port", {type:"x,y", edgeResistance:0.65, bounds:window});

//     let TopPosDiv = 0;
//     let LeftPosdiv = 0;
//     let oldX = 0;
//     let oldY = 0;
//     let PositionX = 0;
//     let PositionY = 0;
//     let mouse = false;
//     let boundDivRight= null;
//     let boundDivLeft= null;
//     let boundDivTop= null;
//     let boarrayundDivBottom= null;

//     // console.log(_PageX)
//     // Début de la function Drag, action qui se passe lorsque l'utilisateur appuit sur la souris
//     function Drag() 
//     {
//         div.addEventListener("mousedown", _MouseDown);
//     }
//     // Appel des fonctions selon l'action de l'utilisateur mouseup arret du drag et mousemove deplacement
//     Drag();
//     function _MouseDown(e) {
//         mouse = true;
//         TopPosDiv = e.clientX;
//         LeftPosdiv = e.clientY;
        
//         document.addEventListener("mouseup", StopDrag);
//         document.addEventListener("mousemove", MouseMoveDiv);
//     }
//     // fonction drag relative à la position de l'élément drager (ici le div des héros que l'ont peur glisser)
//     function MouseMoveDiv(e) {
//         if(mouse)
//         {
            
//             PositionX = e.clientX - TopPosDiv + oldX;
//             PositionY = e.clientY - LeftPosdiv + oldY;
            
//             div.style.transform = `translate( ${PositionX}px, ${PositionY}px)`;
            
//             boundDivLeft = div.getBoundingClientRect().left;
//             boundDivTop = div.getBoundingClientRect().right;
//             boundDivBottom = div.getBoundingClientRect().bottom;
//             boundDivRight = div.getBoundingClientRect().right;
//             if(boundDivLeft>boundScreenLeft && boundDivTop>boundScreenTop && boundDivBottom<boundScreenBottom && boundDivLeft<boundScreenRight)
//             {
//                     div.classList.add("appActive");
//                     div.classList.remove("app");
                    
//                 }
//             // else if(boundDivLeft<boundScreenLeft || boundDivLeft>boundScreenRight)
//             // {
//             //         div.classList.remove("appActive");
//             //         div.classList.add("app");
//             // }
//             else if(boundDivBottom<boundScreenBottom || boundDivTop<boundScreenTop)
//             {
//                     div.classList.remove("appActive");
//                     div.classList.add("app");
//             }
//                 console.log(div.getBoundingClientRect().left , div.getBoundingClientRect().top);
//         }
//     }
//     //function qui stop le drap au mouseup, gauthier ajoute le timeOut pour la gestion des événement (mouseup/click en conflit)
//     function StopDrag() {
//         mouse = false;
//         oldX = PositionX;
//         oldY = PositionY;
//         oldBoundY = boundDivTop;
//         oldBoundX = boundDivLeft;
//         oldBoundR = boundDivRight;
//         oldBoundB = boundDivBottom;
//         div.classList.add("app");
//         div.classList.remove("appActive");
//         document.removeEventListener("mouseup", StopDrag);
//         document.removeEventListener("mousemove", MouseMoveDiv);
//     }
// };

// deplacer(port);
// deplacer(mdni);
// deplacer(horl);
// deplacer(mdh);
// deplacer(bottle);
// deplacer(pounta);

//initializing animation on scroll library


const linked_i = document.querySelector(".fa-linkedin");
const mail_i = document.querySelector(".fa-envelope");
const faceb_i = document.querySelector(".fa-facebook-square");
const num_i = document.querySelector(".fa-phone-square-alt");

const link = document.querySelector(".linked");
const mail = document.querySelector(".mail");
const faceb = document.querySelector(".faceb");
const num = document.querySelector(".num");


logoActivate = (div1 , div2) =>
{
    div1.addEventListener("mouseover", ()=>
    {
        div1.classList.add("iActive");

        div1.addEventListener("mouseout", ()=>{
            div1.classList.remove("iActive");
            });
    });

    div1.addEventListener("click", ()=>
    {
        div2.classList.add("youpi");
    });
}

logoActivate(linked_i, link);
logoActivate(mail_i, mail);
logoActivate(faceb_i, faceb);
logoActivate(num_i, num);


AOS.init();