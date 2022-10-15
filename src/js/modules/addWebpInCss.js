/**
 * Проверка поддержки .webp 
 * Добавление класса "webp", если браузер поддерживает этот формат
 * Добавление класса "no-webp", если браузер не поддерживает этот формат
 */

export function isWebp() {
   /**
    * Проверка поддержки webp
    */
   function testWebP(callback) {
      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   /**
    * Добавление класса "webp" или "no-webp" для html
    */
   testWebP(function (support) {
      let className = support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className)
   });
}