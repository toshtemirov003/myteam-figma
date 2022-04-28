const elHeaderNav = document.querySelector('.site-header__nav')
const elHeaderBtn = document.querySelector('.js-header-btn')

// site-header__nav--open

elHeaderBtn.addEventListener('click', () => {
  elHeaderNav.classList.toggle('sitenav--open')
})   