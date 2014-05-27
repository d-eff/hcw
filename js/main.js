(function(){
    var menu = document.querySelectorAll('.parent_link'),
        burger = document.querySelectorAll('header .burger')[0],
        main = document.getElementById('mainWrap');

    for(var x = 0; x < menu.length; ++x){
        (function (x){
         menu[x].addEventListener('click', function(e){
             //      e.preventDefault();
             var sib = e.target.nextElementSibling;
             console.log(sib);

         });
        })(x);
    
    }

    burger.addEventListener('click', function(e){
        main.classList.toggle('shifted')
    })



})();
