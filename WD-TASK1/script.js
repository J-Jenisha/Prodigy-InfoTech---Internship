window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#000';
    } else {
      navbar.style.backgroundColor = 'transparent';
    }
  });
  
  document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = '#fff';
      item.style.color = '#000';
    });
    item.addEventListener('mouseout', () => {
      item.style.backgroundColor = 'transparent';
      item.style.color = '#fff';
    });
  });
  
