<template>
  <section class="main layout__wrapper">
    <h1 class="main__title a-font__h2">
      Презентация нового салона
    </h1>

    <div class="main__button-wrapper">
      <AButton
        class="main__button-switch shadow"
        :class="{ active: setActive.status }"
        label="Галерея 1"
        bg-color="accent"
        size="medium"
        @handleClick="toggleGalleryFirst"
      />
      <AButton
        class="main__button-switch shadow"
        :class="{ active: !setActive.status }"
        label="Галерея 2"
        bg-color="accent"
        size="medium"
        @handleClick="toggleGalleryNext"
      />
    </div>

    <div class="main__gallery">
      <ul
        class="main__gallery-list"
        :class="{ next: setGallery }"
      >
        <template v-if="!setGallery">
          <li
            v-for="item in imgList"
            :key="item.id"
            class="main__gallery-item"
            :class="`item-${item.id}`"
          >
            <img
              :src="item.links"
              alt="image"
            >
          </li>
        </template>
        <template v-if="!!setGallery">
          <li
            v-for="(item, index) in imgListNext"
            :key="index"
            class="main__gallery-item"
            :class="`item-g${index}`"
          >
            <img
              :src="item.links"
              alt="img"
            >
          </li>
        </template>
      </ul>
    </div>
  </section>
</template>

<script setup>
/*
Import ui
 */

import AButton from '~/components/_ui/AButton/a_button.vue';

/*
Set active tab
 */

const setActive = reactive({
  status: true,
});

/*
Toggle gallery
 */
const setGallery = ref(false);

const toggleGalleryFirst = () => {
  setActive.status = true;
  // eslint-disable-next-line
  setGallery.value ? (setGallery.value = false) : '';
};

const toggleGalleryNext = () => {
  setActive.status = false;
  // eslint-disable-next-line
  !setGallery.value ? (setGallery.value = true) : '';
};

/*
Get Data
 */

const { imgLinks } = imgData();
const imgList = imgLinks.value;

const { imgLinksNext } = imgDataNext();
const imgListNext = imgLinksNext.value;
</script>

<style lang="scss">
@import './main.scss';
</style>
