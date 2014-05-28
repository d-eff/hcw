(function(){
    var menu = document.querySelectorAll('.parent_link'),
        burger = document.querySelectorAll('header .burger')[0],
        main = document.getElementById('mainWrap'),
        nav = document.getElementById('navWrap');

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
    });

    window.onresize = makeMenuFollow;
    makeMenuFollow();

    function makeMenuFollow(){
        console.log("fire");
      if(window.matchMedia('screen and (max-width:800px)').matches){ 
        window.onscroll = function(){
            console.log("scroll: " + window.scrollY + " nav: " + nav.offsetHeight + " main: " + main.offsetHeight);
          if(( window.scrollY + nav.offsetHeight ) > main.offsetHeight){
              console.log("pop");
            nav.style.position = "absolute";    
            nav.style.bottom = "95px";
          } else {
            nav.style.position = "fixed";
            nav.style.bottom = "";
          }
        }
      } else {
        window.onscroll = null;
        nav.style.position = "";
        nav.style.bottom = "";
      }
    }


})();
