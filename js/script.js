$( document ).ready(function() {
    function showNext(evento){
      evento.preventDefault();
      var li = $('.video-galaxia li.active');
      li.removeClass('active');
      
      if(li.next().length != 0){ //Si hay siguiente
     	 li.next().addClass('active');
     	 }else{ //si no
        $('.video-galaxia li').first().addClass('active');
     	 }
     }

    $('a.next').click(showNext);


    function showPrev(evento){
      evento.preventDefault();
      var li = $('.video-galaxia li.active');
      li.removeClass('active');
      
      if(li.prev().length != 0){ //Si hay siguiente
     	 li.prev().addClass('active');
     	 }else{ //si no
        $('.video-galaxia li').last().addClass('active');
     	 }
     }

    $('a.previous').click(showPrev);




    function showRecompensaN (evento){
      evento.preventDefault();
      var li = $('.goteo li.moneyActive');
      li.removeClass('moneyActive');
      
      if(li.next().length != 0){ //Si hay siguiente
     	 li.next().addClass('moneyActive');
     	 }else{ //si no
        $('.rewards li').first().addClass('moneyActive');
        $('.money li').first().addClass('moneyActive');
       }
     }

    $('a.plus').click(showRecompensaN);



    function showRecompensaP(evento){
      evento.preventDefault();
      var li = $('.goteo li.moneyActive');
      li.removeClass('moneyActive');
      
      if(li.prev().length != 0){ //Si hay siguiente
       li.prev().addClass('moneyActive');
       }else{ //si no
        $('.rewards li').last().addClass('moneyActive');
        $('.money li').last().addClass('moneyActive');
       }
     }

    $('a.less').click(showRecompensaP);


    function addBackgroundToHeader(evento){
      var header = $('.mainHeader');

      if( $(window).scrollTop() > 100 ) {
        header.addClass('headerBackground');
      } else {
        header.removeClass('headerBackground')
      }
    };

    $(window).scroll(function(){
      addBackgroundToHeader();
      if( $(window).scrollTop() > 1500) {
        moveProgressBar();
      }
        
    });



    function fixDiv() {
        var $cache = $('.participarBases');

        if ($(window).scrollTop() > 757 && $(window).scrollTop() < 1607 )
          $cache.css({
            'position': 'fixed',
            'top': '100px',
            'float':'right',
            'max-width':'303px'
          });

        if($(window).scrollTop() < 757)
          $cache.css({
            'position':'relative',
            'top':'auto',

          });

        if($(window).scrollTop() > 1450)
          $cache.css({
            'position':'relative',
            'top':'700px',
            
          });
    }

    $(window).scroll(fixDiv);


    $('.menu-toggle a').click(function(event) {
            event.preventDefault();
            if($('.burger img').is(':visible')) {
              $('nav').show();
              $('.burger img').hide();
              $('.close').show();
            } else {
              $('nav').hide();
              $('.burger img').show();
              $('.close').hide();
            }
    });

    $('.login_btn').click(function(event) {
      $('.form_registro').show();
    });

    $('.closeLogin').click(function(event) {
      $('.form_registro').hide();
    });

////
    $('.more').click(function(event) {
      $('.more').hide();
      $('.oculto').show();
      $('.less').show();

    });

    $('.less').click(function(event) {
      $('.less').hide();
      $('.oculto').hide();
      $('.more').show();

    });

    $('.btn_visto').click(function(event) {
      $('.btn_visto').addClass('btn-active');
      $('.oculto').show();
      $('.visto').show();
      $('.votado').hide();
      $('.ultimo').hide();
    });

/////
    
    $('.ed-info').click(function(event) {
      $('.editar-perfil-info').show();
    });

    $('input[value="Cancel"]').click(function(event) {
      $('.editar-perfil-info').hide();
    });

    $('input[value="Guardar"]').click(function(event) {
      $('.editar-perfil-info').hide();
      $('.perfil-info').hide();
      $('.perfil-info-oculto').show();
    });


    $('.perfil-close').click(function(event) {
      $('.popup').hide();
    });

    $('.perfil-video input[value="ENVIAR"]').click(function(event) {
      $('.popup').show();
    });






        // on browser resize...
        $(window).resize(function() {
            moveProgressBar();
        });

        // SIGNATURE PROGRESS
        function moveProgressBar() {
            var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
            var getProgressWrapWidth = $('.progress-wrap').width();
            var progressTotal = getPercent * getProgressWrapWidth;
            var animationLength = 2500;
            
            // on page load, animate percentage bar to data percentage length
            // .stop() used to prevent animation queueing
            var markerProgress = progressTotal + $('.marker').width()/2;
            $('.marker').stop().animate({
              left: markerProgress
            }, animationLength);
            $('.progress-bar').stop().animate({
                left: progressTotal
            }, animationLength);
        }
});



