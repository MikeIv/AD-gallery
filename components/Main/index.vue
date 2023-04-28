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
          v-if="!setGallery"
          class="main__gallery-item"
          :class="`item-${item.id}`"
          v-for="item in imgList"
          :key="item.id"
        >
          <img :src="item.links" />
        </li>
        <li
          v-if="!!setGallery"
          class="main__gallery-item"
          :class="`item-g${index}`"
          v-for="(item, index) in imgListNext"
          :key="index"
        >
          <img :src="item.links" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
/*
Import ui
 */

import AButton from '~/components/_ui/AButton/a_button.vue';

const setGallery = ref(false);

const toggleGalleryFirst = () => {
  setGallery.value ? (setGallery.value = false) : '';
};
const toggleGalleryNext = () => {
  !setGallery.value ? (setGallery.value = true) : '';
};

const { imgLinks } = imgData();
const imgList = imgLinks.value;

const { imgLinksNext } = imgDataNext();
const imgListNext = imgLinksNext.value;
</script>

<style lang="scss">
@import './main.scss';
</style>
