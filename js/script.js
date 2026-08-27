(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);

  toggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  var navToggle = document.getElementById('navToggle');
  var topbar = document.querySelector('.topbar');
  navToggle.addEventListener('click', function () {
    topbar.classList.toggle('open');
  });
  document.querySelectorAll('.nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      topbar.classList.remove('open');
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
