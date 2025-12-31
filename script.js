let page = 0;
const pages = document.querySelectorAll('.page');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
  pages[page].style.display = 'none';
  page++;
  if (page < pages.length) {
    pages[page].style.display = 'block';
  } else {
    alert("Happy New Year ❤️🎉");
    page = 0;
    pages[page].style.display = 'block';
  }
});
