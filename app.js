var menu = document.querySelector('.menu');
var nav = document.querySelector('.navbar');
menu.addEventListener('click', function(){
  nav.classList.toggle('active')
});
var acceuil = document.querySelector('.lien1')
var collection = document.querySelector('.lien2')
var contact = document.querySelector('.lien3')
acceuil.addEventListener('click', function (){
  acceuil.classList.add('active');
  collection.classList.remove('active');
  contact.classList.remove('active');
});
collection.addEventListener('click', function (){
  acceuil.classList.remove('active');
  collection.classList.add('active');
  contact.classList.remove('active');
});
contact.addEventListener('click', function (){
  acceuil.classList.remove('active');
  collection.classList.remove('active');
  contact.classList.add('active');
});