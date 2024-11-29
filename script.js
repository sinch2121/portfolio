document.querySelectorAll('.project a').forEach(link => {
    link.addEventListener('click', () => {
      console.log('Redirecting to:', link.href);
    });
  });
  