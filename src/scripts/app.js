"use strict";

// cibler un ou des el a observer
const els = document.querySelectorAll("li");

// options disponibles
let options = {
  // null = viewport
  // on peut aussi sélectionner 1 el précis ==> root: document.querySelector('.container')
  root: null,

  // ajoute des marges sur la zone du root
  rootMargin: '0px',

  //1.0 => 100% visible
  //0.5 => 50% visible
  threshold: 1.0,
}

// il se lance à chaque fois que les options sont remplies
let callback = (entries, observer) => {

  entries.forEach((entry) => {
    // if(entry.intersectionRatio >= 1){
    //   console.log('coucou');
    // }else{
    //   console.log('bye');
    // }

    if (entry.isIntersecting) {
      console.log("coucou");

      // on ajoute une classe visible à l'el
      entry.target.classList.add('visible');

      // une fois l'el dans le viewport, on arrete de l'observer
      // pour nepas rejouer l'anim à chaque fois
      observer.unobserve(entry.target);
    }
  });

}

let observer = new IntersectionObserver(callback, options);

els.forEach(function(el){
  observer.observe(el);
});
