 // navbar initialization
 document.addEventListener('DOMContentLoaded', function () {
     let elems = document.querySelectorAll('.sidenav');
     M.Sidenav.init(elems);
 });

 // colapsible
 let elems = document.querySelectorAll('.collapsible');
 M.Collapsible.init(elems);

 // slider
 let slider = document.querySelectorAll('.slider');
 M.Slider.init(slider, {
     height: 400,
     interval: 4000
 });
 // parallax
 let parallax = document.querySelectorAll('.parallax');
 M.Parallax.init(parallax);

 // materialbox
 document.addEventListener('DOMContentLoaded', function () {
     let materialbox = document.querySelectorAll('.materialboxed');
     M.Materialbox.init(materialbox);
 });
 // scoll
 let scroll = document.querySelectorAll('.scrollspy');
 M.ScrollSpy.init(scroll, {
     scrollOffset: 63
 });

 // textarea lenght
 let textArea = document.getElementById('textarea2');
 M.CharacterCounter.init(textArea);