<template>
  <section class="posts-view layout-custom__wrapper">
    <h2>{{ $route.params.id }}</h2>
    <div class="posts-view__img-wrapper">
      <img
        :src="imgList[0].links"
        alt="image"
        class="posts-view__img"
      >
    </div>
    <NuxtLink
      to="/"
      class="main__gallery-link"
    >
      <span class="a-font__s">На главную</span>
    </NuxtLink>
  </section>
</template>

<script setup>
const route = useRoute();
const imgId = route.params.id;

const { imgLinks } = imgData();
const imgList = imgLinks.value.filter((value) => value.id === imgId);
</script>

<style lang="scss">
@import './posts-view.scss';
</style>
