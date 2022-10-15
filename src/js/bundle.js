/**
 * ! IMPORT 
 */

import $ from "jquery"
import OpenClose from "./modules/openClose.js" 
import { AccordionAndTabs } from "./modules/accordionAndTabs.js"
import "./modules/scroll-animate.js"
import Validation from "./modules/validation.js"

import "./modules/swipers.min.js"



function setNavbarAttr() {
   let items = document.querySelectorAll('.nav-menu-wrap .nav-menu li')

   items.forEach(el => {
      el.setAttribute('menu-arrow', '')
   })
}

setNavbarAttr()



/**
 * TODO: Валидация формы contact
 */
let validContact = new Validation(
   '#form-contact',
   '#form-contact [name=user_name]',
   null,
   '#form-contact [name=user_phone]',
   '#form-contact [name=user_email]',
   '#form-contact [name=user_message]'
)

/**
 * TODO: Валидация формы doc (page support)
 */
let validDoc = new Validation(
   '#form-doc',
   '#form-doc [name=user_name]',
   '#form-doc [name=user_company]',
   '#form-doc [name=user_phone]',
   '#form-doc [name=user_email]',
   '#form-doc [name=user_message]'
)








/**
 * TODO: Открытие/Закрытие мобильного меню
 */
const mobMenu = new OpenClose('menu', '', '', '.mobile-menu', '.overlay', '.burger', '.ui-close', '.m-menu li > a')



/**
 * 
 * TODO: Вкладки в мобильно меню
 */
const mobilaTabs = new AccordionAndTabs('tabs', '.m-tab', '.m-content', false)




/**
 * TODO: Accordion в мобильном меню
 */
const mobileAccordion = new AccordionAndTabs('accordion', '.mc-menu > li', '.mc-submenu')    




/**
 * TODO: Aside tabs (page products)
 */
// adaptiveProductsTabs()

// window.addEventListener('resize', function() { 
//    adaptiveProductsTabs()
// })

// function adaptiveProductsTabs() {
//    let winWidth = window.innerWidth
//    if (winWidth <= 800) {
//       $('.p-first-content').hide()
      
//    } else {
//       const productsTabs = new AccordionAndTabs('tabs', '.aside-catalog l', '.aside-catalog .row', true)
//    }
// }

// let asideTabs = new AccordionAndTabs('tabs', '.aside-tabs li', '.aside-catalog .row', false)
// let asideTabs800 = new AccordionAndTabs('accordion', '.aside-catalog-wrapper li', '.aside-catalog .row')


let asideCatalogRow = document.querySelectorAll('.aside-catalog .row')
for (let i = 0; i < asideCatalogRow.length; i++) {
   asideCatalogRow[i].setAttribute('id', i+1)
}

$(".aside-catalog .row").hide();
/* в режиме вкладок */
$(".aside-tabs li").click(function () {
   $(".aside-catalog .row").hide();
   var activeTabs = $(this).attr("data-tab-name");
   $("#" + activeTabs).fadeIn();
   $(".aside-tabs li").removeClass("active");
   $(this).addClass("active");
   $(".aside-catalog li").removeClass("active");
   $(".aside-catalog li[data-tab-name^='" + activeTabs + "']").addClass("active");

});

window.addEventListener('resize', function() {
   var activeTabs = $(".aside-tabs li.active").attr("data-tab-name");
   $("#" + activeTabs).fadeIn();
})

/* в режиме аккордеона */
$(".aside-catalog li").click(function () {
   var d_activeTabs = $(this).attr("data-tab-name");
   $(".aside-catalog li")
   $(this).next().slideToggle()
   $(".aside-catalog li").not($(this)).removeClass('active').next().slideUp()
   $(this).toggleClass('active')
   $(".aside-tabs li").removeClass("active");
   $(".aside-tabs li[data-tab-name^='" + d_activeTabs + "']").addClass("active");
});


$('li[data-tab-name]').on('click', function () {
   $('.p-first-content').hide()
})


/**
 * TODO: Aside tabs (page buy)
 */
const asideTabsBuy = new AccordionAndTabs('tabs', '.aside-tabs[has_child_tab] > li', '.buy-content', false)

/**
 * TODO: Вкладки на странице поддержки (page support)
 */
const documentsTabs = new AccordionAndTabs('tabs', '.aside-tabs[dont_has_child_tab] > li', '.d-content', false)





/**
 * TODO: Переключение языков
 */
selectedLangs()

function selectedLangs() {
   let langs = document.querySelectorAll('.langs li')
   
   for (let i = 0; i < langs.length; i++) {
      langs[i].onclick = function() {
         for (let j = 0; j < langs.length; j++) {
            langs[j].classList.remove('selected')
         }
         langs[i].classList.add('selected')
      }
   }
}




/**
 * TODO: Слайдер в popup certificate (модальное окно с просмотром сертификатов)
 */
const popupCertificate = new OpenClose(
   'popup', 
   '#popup-certificate', 
   '.certificates .img', 
   '', 
   '.popup-overlay', 
   '', 
   '.ui-close', 
   ''
)



/**
 * TODO: Слайдер в popup certificate (модальное окно с просмотром сертификатов)
 */
const popupPreviewProduct = new OpenClose(
   'popup', 
   '#popup-preview-product', 
   '.productSwiper2 .swiper-slide img', 
   '', 
   '.popup-overlay', 
   '', 
   '.ui-close', 
   ''
)




/**
 * TODO: Кастомные стрелки для swiper
 */
customSliderArrow('.swiper-button-prev', 'prev')
customSliderArrow('.swiper-button-next', 'next')

function customSliderArrow(selector, direction) {
   let btnArrows = document.querySelectorAll(selector)

   for (let i = 0; i < btnArrows.length; i++) {
      if (direction == 'prev')
         btnArrows[i].innerHTML = '<svg viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path opacity="0.7" d="M19.1165 37L1 19L19.1165 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>'
      else btnArrows[i].innerHTML = '<svg viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path opacity="0.7" d="M1 37L19.1165 19L1 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>'
   }
}









/** 
 * TODO: Добавление arrow decoration к .has-children
 */
createDecorationArrow()

function createDecorationArrow() {
   let itemsHasChildren = document.querySelectorAll('.has-children')
   for (let i = 0; i < itemsHasChildren.length; i++) {
      let arrowDecoration = document.createElement('span')
      arrowDecoration.classList.add('arrow-decoration')
      itemsHasChildren[i].append(arrowDecoration)
   }
}





// TODO: Кастомный palceholder
let inputs = document.querySelectorAll('form .form-item')

for (let i = 0; i < inputs.length; i++) {
   let placeholder = inputs[i].querySelector('.placeholder')
   let input = inputs[i].querySelector('.field')

   if (!!input) {
      input.addEventListener('blur', () => {
         if (input.value != '') {
            placeholder.style.opacity = 0
         } else {
            placeholder.style.opacity = ''
         }
      })
   }
}





/**
 * TODO: Header scroll animation
 */
let currentScrollPos = 0
window.addEventListener('scroll', () => {
   headerScroll()
})


window.addEventListener('resize', () => {
   setPaddingTop()
})

headerScroll()
setPaddingTop()

function headerScroll() {
   let windowScroll = window.pageYOffset
   let header = document.querySelector('header.scroll')

   // * Появление header.scroll только при скролле вниз
   if (windowScroll >= header.clientHeight + 100) {
      header.classList.add('active')
      if (windowScroll > currentScrollPos) 
         header.classList.remove('active')
         else  header.classList.add('active') 
   } else {
      header.classList.remove('active')
   }
   
   currentScrollPos = windowScroll
};

function setPaddingTop() {
   let pageTitle = document.querySelector('[data-calc-height]')
   let titleContainer = document.querySelector('.title-container')
   let headerHeight = document.querySelector('header.absolute').clientHeight
   let pageTitleBg = document.querySelector('.page-title-bg')
   let pageTitleWrapHeight = document.querySelector('.page-title-wrap')

   if (titleContainer) titleContainer.style.paddingTop = headerHeight + 'px'
   if (pageTitle) pageTitle.style.paddingTop = headerHeight + 'px'
   if (pageTitleBg && pageTitleWrapHeight ) pageTitleBg.style.height = pageTitleWrapHeight.clientHeight + 'px'
}








/**
 * TODO: Адаптив изображений на главном слайдере под высоту окна
 */
window.addEventListener('resize', () => {
   adaptiveImg()
})

adaptiveImg()

function adaptiveImg() {
   let windowHeight = window.innerHeight
   let titleHeight = document.querySelector('.title-container')
   let infoHeight = document.querySelectorAll('.ms-card-info')[0]
   let slidesImg = document.querySelectorAll('.ms-card img')
  
   if (titleHeight && infoHeight && slidesImg) {
      if (windowHeight <= 980 || windowHeight >= 640) {
         for (let i = 0; i < slidesImg.length; i++) {
            slidesImg[i].style.maxHeight = windowHeight - titleHeight.clientHeight - infoHeight.clientHeight - 7 + 'px'
            slidesImg[i].style.maxWidth = 'none';
            slidesImg[i].style.width = 'auto';
            slidesImg[i].style.height = '100%';
         }
      } else {        
         for (let i = 0; i < slidesImg.length; i++) {
            slidesImg[i].style.maxHeight = '100%';
            slidesImg[i].style.maxWidth = '180px';
            slidesImg[i].style.width = '100%';
            slidesImg[i].style.height = 'auto';
         }
      }                                                                                                                                                                                                                                                                                                                             
   }
}




/**
 * TODO: Аккордион aside-tabs-buy (page buy)
 */
$('.aside-tabs[has_child_tab] .top').next().hide()
$('.aside-tabs[has_child_tab] .top').on('click', function() {
   $('.aside-tabs[has_child_tab] .item-content').not($(this).next()).slideUp()
   $('.aside-tabs[has_child_tab] .top').not($(this)).removeClass('active')
   $(this).toggleClass('active').next().slideToggle()
})




/**
 * TODO: Добавление стрелки arrow hide в аккордионах
 */
addHideArrow()
function addHideArrow() {
   let listItems = document.querySelectorAll('.item-content ul:last-child')

   for (let i = 0; i < listItems.length; i++) {
      let hideArrow = document.createElement('div')
      hideArrow.classList.add('hide-arrow')
      listItems[i].append(hideArrow)
   }
}



/**
 * TODO: Закрытие элементов аккордиона при клике на arrow hide
 */
onClickHideArrow('.item-content')

function onClickHideArrow(content) {
   $('.hide-arrow').on('click', function () {
      $(this).parents(content).slideUp()
      $(this).parents(content).prev().removeClass('active')
   })
}




/**
 * TODO: Изменение название активной вкладки в breadcrumbs (page support)
 */

setTabNameInBreadcrumbs()

function setTabNameInBreadcrumbs() {
   let tabsItems = document.querySelectorAll('.section-d-main .aside-tabs li')
   let breadcrumbsSpan = document.querySelector('.breadcrumbs .last-breadcrumb')
   let asideTabs = document.querySelector('.aside-tabs')

   for (let i = 0; i < tabsItems.length; i++) {
      if (tabsItems[i].classList.contains('active'))
         breadcrumbsSpan.innerText = tabsItems[i].innerText
   }

   if (asideTabs)
      asideTabs.addEventListener('click', function (event) {
         let nodeName = event.target.nodeName.toLowerCase()

         if (nodeName === 'li' && breadcrumbsSpan)
            breadcrumbsSpan.innerText = event.target.innerText
      })
}


/**
 * TODO: Аккордион в описании товара (page product single)
 */
$('.product-descr > li > span').next().hide()
$('.product-descr > li > span').on('click', function () {
   $(this).toggleClass('active').next().slideToggle()
})

onClickHideArrow('.product-descr .content')



/**
 * TODO: Изменение href у "Написать нам" при наличии или отсутствии секции "contact"
 */
changeAnchorAttr()

function changeAnchorAttr() {
   let smoothAnchor = document.querySelectorAll('.ui-button.smooth')
   let sectionContact = document.getElementById('contact')

   if (sectionContact)
      setAttr(smoothAnchor, 'href', '#contact')
   else setAttr(smoothAnchor, 'href', '/#contact')
}

function setAttr(elements, attr, value) {
   for (let i = 0; i < elements.length; i++) {
      elements[i].setAttribute(attr, value)
   }
}


/**
 * TODO: Плавный переход по якорям
 */
$(function () {
   $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $('.mobile-menu').removeClass('active')
      $('.overlay').removeClass('active')
      $('body').removeClass('hidden')
      $('.smooth').removeClass('active').filter(this).addClass('active');
      var selector = $(this).attr('href');
      var h = $(selector);

      $('html, body').animate({
         scrollTop: h.offset().top - 100
      }, 600);
   });
});





/**
 * TODO: Переключение карт при клике на адреса
 */
setCurrentMap()

function setCurrentMap() {
   $('.buy-content iframe[data-map-id').not(':first').hide()
   $('.item-content .address[data-map]').on('click', function() {
      let currentAttr = $(this).attr('data-map')
      $('.buy-content iframe[data-map-id]').hide()
      $(`.buy-content iframe[data-map-id="${currentAttr}"]`).fadeIn()
   })
}



/**
 * TODO: Активная вкладки при переходе по страницам (product, support)
 */
setCurrentTabActive()

function setCurrentTabActive() {
   $('[data-item-name]').on('click', function() {
      localStorage.setItem('currentContent', $(this).attr('data-item-name'))
   })
}



getCurrentTab()
function getCurrentTab() {
   if (localStorage.getItem('currentContent')) {
      $('[data-tab-name]').removeClass('active')
      // $('[data-content-name]').hide()

      let currentTab = $(`[data-tab-name="${localStorage.getItem('currentContent')}"]`)
      currentTab.addClass('active')
      $('.p-first-content').hide()
      $(`[data-content-name]:eq(${currentTab.index()})`).fadeIn(500)
      localStorage.removeItem('currentContent')
   }
}




/**
 * TODO: Изменение фоновой картинки (page products) при переключении вкладок
 */
changePageTitleBg()

function changePageTitleBg() {
   let pageTitle = document.querySelector('.page-title-bg')
   let asideTabsLi = document.querySelectorAll('li[data-tab-name]')
   let asideActiveTab = document.querySelector('li[data-tab-name].active')

   if (asideActiveTab) {
      pageTitle.style.background = `url(${asideActiveTab.getAttribute('data-image')}) no-repeat center / cover`;
   }

   asideTabsLi.forEach(item => {
      item.addEventListener('click', function() {
         let attr = event.target.getAttribute('data-image')
         pageTitle.style.background = `url(${attr}) no-repeat center / cover`;
      })
   })
}

 



/**
 * TODO: Устанавливаем активный слайд по активному сертификату
 */

initCerfImgAttr()

function initCerfImgAttr() {
   let cerfs = document.querySelectorAll('.certificates .img')
   let popupCerf = document.querySelector('.popup-certificate-container .img img')

   cerfs.forEach(el => {
      el.addEventListener('click', () => {
         let imgSrc = el.querySelector('img').getAttribute('src')

         popupCerf.setAttribute('src', imgSrc)
      })
   })
}







/**
 * TODO: Адаптивная ширина фоновой картинки page-title
 */

function adaptBgWidth() {
   let title = document.querySelector('.page-title')
   let bg = document.querySelector('.page-title-bg')
   let titleWrap = document.querySelector('.page-title-wrap')

   bg.style.width = window.innerWidth - (title.clientWidth + 40 + ((window.innerWidth - titleWrap.clientWidth) / 2)) + 'px'
}

window.addEventListener('resize', adaptBgWidth)
window.addEventListener('load', adaptBgWidth)