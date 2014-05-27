(function(){
    var menu = document.querySelectorAll('nav')[0],
        burger = document.querySelectorAll('header .burger')[0],
        main = document.getElementById('mainWrap');

    menu.addEventListener('click', function(e){
      e.preventDefault();
        var sib = e.target.nextElementSibling;
        console.log(sib);

        if(sib){
            sib.classList.toggle('expanded');
        }
    });

    burger.addEventListener('click', function(e){
        main.classList.toggle('shifted')
    })



})();
