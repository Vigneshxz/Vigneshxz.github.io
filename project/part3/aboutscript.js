document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.getElementById('main-nav');
    nav.querySelector('ul').style.display = nav.querySelector('ul').style.display === 'block' ? 'none' : 'block';
  });
  