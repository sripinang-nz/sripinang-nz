setInterval(function loop() {
  if (document.documentElement.scrollTop == 0) {
    document.getElementById('Navbar').style.height = '120px';
  } else {
    document.getElementById('Navbar').style.height = '60px';
  };
},0);