$(() => {
  $('.bugger').on('click', (e) => {
    $('.navbar-nav').slideToggle();
    e.stopPropagation();
  })
})