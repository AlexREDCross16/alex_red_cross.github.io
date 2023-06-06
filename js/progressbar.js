$(document).ready(function() {

    $('.skills-bar').each(function () {
       changeProgress(this);
    })

    function changeProgress(element) {
       let progressBar = $(element).find('.cssProgress-bar');
       let percent = $(progressBar).data().percent;

       progressBar.css({ "width": '0%', "transition": '0.2s' })

       setTimeout(function () {
          $(element).find('.cssProgress-bar').css({
            "width": percent + '%',
            "transition": '2s'
          })}, 500)
    }
});