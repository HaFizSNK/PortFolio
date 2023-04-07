let menu =Document.querySelector('#menu');
let navbar =Document.querySelector('.navbar');

menu.onclick() => {
menu.classList.toggle('bx-x');
navbar.classList.toggle('active');
}


let sections =document.querySelectorAll('section');
let navlinks =document.querySelectorAll('header nav a');


window.onscroll()=>{
   sections.forEach(sec=>{
    let top =window.scrollY;
    let offset =sec.offsetTop-150;
    let height =sec.offsetHeight;
    let id=sec.getAttribute('id');
if(top>=offset && top<offset+height){
    navlinks.forEach(links=>{
        links.classList.remove('active');
        document.querySelector('Header nav a[href*='+ id  +']').classList.add('active');
    })
}


   })
   let header.querySelector('header');
   header.classList.toggle('sticky',window.scrollY>100)
}
menu.classList.remove('bx-x');
navbar.classList.remove('active');