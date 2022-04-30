const elHeaderNav = document.querySelector('.site-header__nav')
const elHeaderBtn = document.querySelector('.js-header-btn')

// site-header__nav--open

elHeaderBtn.addEventListener('click', () => {
  elHeaderNav.classList.toggle('sitenav--open')
})   
//
const elCard = document.querySelector('.director-card')
const elCardBtn = document.querySelectorAll('.director-card__toggler')

elCardBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.director-card').classList.toggle('director-card--back-visible')
  })
})
