document.querySelector('.menu').addEventListener('click', function(){
  document.querySelector('.navbar').classList.toggle('navbar-active');
});

document.addEventListener("touchstart", function() {}, true);

// Smooth Scrolling
$('.navbar a, .btn').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 20,
      },
      800
    );
  }
});
