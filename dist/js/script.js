document.querySelector('.menu').addEventListener('click', function(){
  document.querySelector('.navbar').classList.toggle('navbar-active');
});

document.addEventListener("touchstart", function() {}, true);

// Smooth Scrolling
if(window.innerWidth < 980) {
  $('.navbar a, .btn').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 250,
        },
        800
      );
    }
  });
} else {
  $('.navbar a, .btn').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 60,
        },
        800
      );
    }
  });
}

const links = document.getElementsByTagName('a');
const linkArr = [...links];

linkArr.forEach(function(link) {
  link.addEventListener('click', function() {
    document.querySelector('.navbar').classList.remove('navbar-active');
  });
});
