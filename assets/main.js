const godown = document.getElementById('godown')
godown.addEventListener('click', function (event) {
  event.preventDefault()
  window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth' 
  })
})
