/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav');
const navToggle = navMain.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--no-js');

const onNavToggleClick = () => {
  navMain.classList.toggle('main-nav--opened');
};

navToggle.addEventListener('click', onNavToggleClick);

navToggle.click();
