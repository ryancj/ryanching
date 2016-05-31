$(function() {

  //Scrolling effect
  $('.scrollspy').scrollSpy();

  //Side nav for mobile
  $(".button-collapse").sideNav();

  //Image effect
  $('.materialboxed').materialbox();

  //Initialize modals
  $('.modal-trigger').leanModal();

  //Initialize parallax
  $('.parallax').parallax();

  //Initialize ScrollReveal
  window.sr = ScrollReveal({ reset: true });

  sr.reveal('.tech-logo', { duration: 1100, distance: '20px', viewFactor: 0.5 }, 40); 
  sr.reveal('.stag-list', { duration: 1000, distance:'20px', scale: 1 }, 100);
  sr.reveal('.photo-fade', { duration: 800, distance:'20px', scale: 1 }, 40);
  sr.reveal('.fade', { duration: 700, distance:'20px', scale: 1 });

});
