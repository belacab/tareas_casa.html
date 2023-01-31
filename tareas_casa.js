document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', event => {
        if (event.target.className == "subrayado") {
            event.target.className = ""
        }
        else{
            event.target.className = "subrayado"
        }
      
    })
  })