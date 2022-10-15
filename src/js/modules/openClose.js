export default class OpenClose {
   /**
    * 
    * @param {''} target target: Принимает значения: 'menu' и 'popup'
    * @param {HTMLElement} popup popup: Селектор модального окна '.popup-wrap'
    * @param {HTMLCollection} openPopup openPopup: Массив элементов для открытия модального окна
    * @param {HTMLElement} menu menu: HTMLElement селектор мобильного меню 
    * @param {HTMLElement} overlay overlay: HTMLElement селектор overlay
    * @param {HTMLElement} burger burger: HTMLElement селектор иконки мобильного меню
    * @param {HTMLElement} closebtn closebtn: HTMLElement селектор иконки закрытия мобильного меню
    * @param {HTMLCollection} menuLinks menuLinks: HTMLCollection элементы мобильного меню, при клике на которые, закрывается мобильное меню
    */
   
   constructor(target, popup, openPopup, menu, overlay, burger, closebtn, menuLinks) {
      this.target = target

      if (this.target && this.target == 'popup') {
         this.$popup = document.querySelector(popup)
         this.$openPopup = document.querySelectorAll(openPopup)
      } else {
         this.$menu = document.querySelector(menu)
         this.$burger = document.querySelectorAll(burger)
         this.$menuLinks = document.querySelectorAll(menuLinks)
      }

      this.$overlay = document.querySelectorAll(overlay)
      this.$closebtn = document.querySelectorAll(closebtn)
      this.$body = document.body

      
      this.#setup()
   }

   #setup() {
      if (this.target == 'popup') {
         for (let i = 0; i < this.$openPopup.length; i++) {
            this.$openPopup[i].addEventListener('click', this.open.bind(this))
         }
      } 

      if (this.target == 'menu') {
         for (let i = 0; i < this.$burger.length; i++) {
            this.$burger[i].addEventListener('click', this.open.bind(this)) // переопределяем контекст this, как контекст класса, а не метода open
         }
      }

      // TODO: Закрытие по крестику
      for (let i = 0; i < this.$closebtn.length; i++) {
         this.$closebtn[i].addEventListener('click', this.close.bind(this))
      }

      // TODO: Закрытие по overlay
      for (let i = 0; i < this.$overlay.length; i++) {
         this.$overlay[i].addEventListener('click', this.close.bind(this))
      }

      // TODO: Закрытие по Escape
      this.$body.addEventListener('keydown', (e) => {
         if (e.keyCode == 27) this.close()
      })

   }

   open() {
      if (this.target == 'popup') 
         if (this.$popup) this.$popup.classList.add('active')
      
      if (this.target == 'menu')
         if (this.$menu) this.$menu.classList.add('active')

      this.$body.classList.add('hidden')

      for (let i = 0; i < this.$overlay.length; i++) {
         this.$overlay[i].classList.add('active')
      }
      
   }

   close(e) { 
      if (this.target == 'popup') 
         if (this.$popup) this.$popup.classList.remove('active')

      if (this.target == 'menu') 
         if (this.$menu) this.$menu.classList.remove('active')
       
      this.$body.classList.remove('hidden')

      for (let i = 0; i < this.$overlay.length; i++) {
         this.$overlay[i].classList.remove('active')
      }
   }
}