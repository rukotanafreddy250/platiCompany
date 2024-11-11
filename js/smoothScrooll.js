  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });

        // Control the duration by adjusting the setTimeout delay
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 300000); // Duration in milliseconds (1000ms = 1s)
      }
    });
  });

