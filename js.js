window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var content = document.getElementById('content');
    var contentOffset = content.offsetTop;
  
    if (window.pageYOffset > contentOffset) {
      navbar.classList.add('navbar-transparent');
    } else {
      navbar.classList.remove('navbar-transparent');
    }
  });