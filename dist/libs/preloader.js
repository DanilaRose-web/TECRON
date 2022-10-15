initPreloader()

function initPreloader() {
   let preloader = document.querySelector('.preloader')
   let preloaderLine = document.querySelector('.preloader-line')

   
   if (!sessionStorage.getItem('firstLoad')) {
      sessionStorage.setItem('firstLoad', true)

      window.addEventListener('load', function () {
         preloader.classList.add('hide')
         if (preloaderLine) preloaderLine.style.display = 'none'
      })
   } else {
      preloader.style.display = 'none'
      if (preloaderLine)
         window.addEventListener('load', function () {
            preloaderLine.classList.add('hide')
         })
   }

}
