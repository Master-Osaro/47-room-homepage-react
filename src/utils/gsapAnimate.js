import gsap from "gsap"

export const slideIn =(element1, element2)=> {
    gsap.fromTo(element1, {opacity: 0.3, ease:'back'}, {duration : 4, opacity: 1, ease:'back'});
    gsap.fromTo(element2, {x:100, opacity: 0, ease:'back'}, {duration : 1, x:0, opacity: 1, ease:'back'});
}