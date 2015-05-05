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
    $('.goteo li').first().addClass('moneyActive');
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
    $('.goteo li').last().addClass('moneyActive');
   }
 }

$('a.less').click(showRecompensaP);




 // on page load...
    moveProgressBar();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar();
    });

    // SIGNATURE PROGRESS
    function moveProgressBar() {
      console.log("moveProgressBar");
        var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2500;
        
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }