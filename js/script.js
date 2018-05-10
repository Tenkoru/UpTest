'use strict';
var main = document.querySelector('.main-content');
var chooseBlock = main.querySelector('.choose');
var chooseList = chooseBlock.querySelector('.choose__list');
var content = main.querySelector('.content');
var chooseContentItems = [].slice.call(chooseBlock.querySelectorAll('.content__item'));
var chooseItems = [].slice.call(chooseBlock.querySelectorAll('.choose__item'));
var tabs = [].slice.call(content.querySelectorAll('.content__tab'));
var contentItems = [].slice.call(content.querySelectorAll('.content__item'));
var screen = window.matchMedia("(max-width: 1200px)");

var syncTabs = function (targetEl) {
  var targetIndex = chooseItems.indexOf(targetEl);
  var chooseItemClass = "choose__item--active";
  var tabActiveClass = "content__tab--active";
  var contentActiveClass = "content__item--active";
  changeActiveClass(chooseContentItems, contentActiveClass, targetIndex)
  changeActiveClass(chooseItems, chooseItemClass, targetIndex)
  changeActiveClass(tabs, tabActiveClass, targetIndex);
  changeActiveClass(contentItems, contentActiveClass, targetIndex);
}

var changeActiveClass = function (array, activeClass, index) {
  array.forEach(function (item) {
    item.classList.remove(activeClass);
  });
  array[index].classList.add(activeClass);
}

chooseList.addEventListener('click', function (event) {
  var targetEl = event.target;
    while (targetEl && targetEl !== this) {
      if (targetEl.classList.contains('choose__item')) {
        main.classList.add('main-content--active');
        chooseBlock.classList.add('choose--active');
        targetEl.classList.add('choose__item--active');
        syncTabs(targetEl);
      }
      targetEl = targetEl.parentNode;
    }
});
