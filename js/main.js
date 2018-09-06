inputToday();
tabMenu();

//input date value, min 오늘 날짜로
function inputToday() {
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
