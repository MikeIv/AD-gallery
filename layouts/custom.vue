<template>
  <div class="layout-custom">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Custom',
};
</script>

<style lang="scss">
.layout-custom {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  padding-bottom: rem(40);
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: rem(80) rem(12) rem(20) rem(12);

    @media screen and (min-width: $tablet) {
      max-width: rem(768);
      padding: rem(80) rem(40);
    }
    @media screen and (min-width: $tabletMax) {
      max-width: rem(832);
    }
    @media screen and (min-width: $desktopMin) {
      max-width: rem(1080);
    }
  }

  .nuxt-icon {
    display: flex;
    width: 100%;
    height: 100%;

    svg {
      object-fit: cover;
      width: auto;
      height: 100%;
      margin: 0;
    }
  }
}
</style>
