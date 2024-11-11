document.addEventListener('DOMContentLoaded', function () {
  const currentYear = new Date().getFullYear();
  const footer = document.getElementById('currentYear');
  footer.innerHTML = ` ${currentYear}`;
});
