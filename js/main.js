setInputDate();
tabMenu();
slide();

//input date value, min 오늘 날짜로
function setInputDate() {
  const today = document.querySelectorAll('.today');
  for (let i = 0; i < today.length; i++) {
    const inputToday = new Date().toISOString().substr(0, 10);
    today[i].value = inputToday;
    today[i].min = inputToday;
  }
}

//탭메뉴
function tabMenu() {
  const tablinks = document.querySelectorAll('.reservation nav button');
  Array.from(tablinks).forEach(tablink => {
    tablink.addEventListener('click', tabopen);
  });

  function tabopen() {
    const tabcontents = document.querySelectorAll('.tabcontent');
    for (let i = 0; i < tabcontents.length; i++) {
      tablinks[i].classList.remove('active');
      tabcontents[i].classList.remove('active');
    }
    this.classList.add('active');
    for (let i = 0; i < tabcontents.length; i++) {
      if (tablinks[i].classList.contains('active')) {
        tabcontents[i].classList.add('active');
      }
    }
  }
}

//슬라이드
function slide() {
  let count = 0;
  const slides = document.querySelectorAll('.go .slide');
  const dots = document.querySelectorAll('.slideDots span');

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
      remove();
      count = i;
      add();
    });
  }
  setInterval(() => {
    remove();
    count++;
    if (count >= slides.length) count = 0;
    add();
  }, 3000);

  function remove() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
      dots[i].classList.remove('active');
    }
  }

  function add() {
    slides[count].classList.add('active');
    dots[count].classList.add('active');
  }
}
