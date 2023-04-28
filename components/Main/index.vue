<template>
  <section class="main layout__wrapper">
    <h1 class="main__title a-font__s hidden">Главная</h1>

    <div class="main__button-wrapper">
      <AButton @handleClick="toggleGalleryFirst" class="main__button-switch shadow" label="Галерея 1" bgColor="accent">
      </AButton>
      <AButton @handleClick="toggleGalleryNext" class="main__button-switch shadow" label="Галерея 2" bgColor="accent">
      </AButton>
    </div>

    <div class="main__gallery">
      <ul class="main__gallery-list" :class="{ next: setGallery }">
        <li
          v-show="!setGallery"
          class="main__gallery-item"
          :class="`item-${item.id}`"
          v-for="item in imgList"
          :key="item.id"
        >
          <img :src="item.links" />
        </li>
        <li
          v-show="!!setGallery"
          class="main__gallery-item"
          :class="`item-g${index}`"
          v-for="(item, index) in imgListNext"
          :key="index"
        >
          <img :src="item.links" />
        </li>
      </ul>
    </div>

    <!--    <div class="main__block">-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH02568.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH02578.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH02602.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH02671.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH02674.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH02715.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH02759.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH02838.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH02907.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH02923.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH02948.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03008.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03020.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03048.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03061.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03096.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03170.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03186.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03211.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03271.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03306.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03451.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03471.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03559.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03567.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03579.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03707.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03754.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03777.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03813.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH03910.jpg" />-->
    <!--      <img src="https://cdn.ascgroup.ru/news_media/13099/ACH04011.jpg" />-->
    <!--    </div>-->
  </section>
</template>

<script setup>
/*
Import ui
 */

import AButton from '~/components/_ui/AButton/a_button.vue';

const setGallery = ref(false);

const toggleGalleryFirst = () => {
  setGallery.value ? (setGallery.value = false) : false;
};
const toggleGalleryNext = () => {
  !setGallery.value ? (setGallery.value = true) : true;
};

const { imgLinks } = imgData();
const imgList = imgLinks.value;

const { imgLinksNext } = imgDataNext();
const imgListNext = imgLinksNext.value;
</script>

<style lang="scss">
@import './main.scss';
</style>
