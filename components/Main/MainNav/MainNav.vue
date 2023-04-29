<template>
  <!--  <ul class="main-nav">-->
  <!--    <li class="main-nav__item" v-for="(item, index) in routeLinks" :key="index">-->
  <!--      <NuxtLink :to="item.route">{{ item.name }}</NuxtLink>-->
  <!--    </li>-->
  <!--  </ul>-->

  <nav class="main-nav">
    <ul class="main-nav__list">
      <!--
      <NuxtLink class="main-nav__item a-font__h4" :to="localePath('/portfolio')">
      {{ $t('navigation.portf') }}
      </NuxtLink>
      -->
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss">
@import './main-nav.scss';
</style>
