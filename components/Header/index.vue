<template>
  <section class="header shadow">
    <nav class="header__nav">
      <!--  Одноязычный вариант    -->

      <!--      <ul class="header__nav-list">-->
      <!--        <li class="header__item a-font__s" v-for="(item, index) in routeLinks" :key="index">-->
      <!--          <NuxtLink :to="item.route">{{ item.name }}</NuxtLink>-->
      <!--        </li>-->
      <!--      </ul>-->

      <!--  Мультиязычный вариант    -->
      <ul class="header__nav-list">
        <!--        <NuxtLink class="header__item a-font__s" :to="localePath('/portfolio')">{{ $t('navigation.portf') }}</NuxtLink>-->
      </ul>
    </nav>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import './header.scss';
</style>
