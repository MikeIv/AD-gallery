<template>
  <button
    type="button"
    :class="classes"
    :disabled="disabled"
    @click.prevent.stop="handleClick"
  >
    <i :class="icons" />
    <slot />
    <span class="a-button__label">{{ label }}</span>
  </button>
</template>

<script setup>
/*
props
 */

const props = defineProps({
  bgColor: {
    type: String,
    default: 'accent',
    validator: (value) => ['accent', 'primary', 'secondary', 'ghost-accept'].includes(value),
  },
  label: {
    type: String,
    default: 'Button',
  },
  onlyIcon: {
    type: String,
    default: 'none',
    validator: (value) => ['none', 'rounded', 'square'].includes(value),
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  size: {
    type: String,
    default: 'none',
    validator: (value) => ['none', 'xlarge', 'large', 'medium', 'small'].includes(value),
  },
  type: {
    type: String,
    default: 'default',
    validator: (value) => ['accent', 'primary', 'default'].includes(value),
  },
  fontSize: {
    type: String,
    default: 'none',
    validator: (value) => ['none', 'l', 'm', 's'].includes(value),
  },

  addIcon: {
    type: String,
    default: 'none',
    validator: (value) => ['none', 'fonts-icon'].includes(value),
  },
  iconPosition: {
    type: String,
    default: 'none',
    validator: (value) => ['none', 'left', 'right'].includes(value),
  },
  iconType: {
    type: String,
    default: '',
  },
});

/*
emit
 */

const emit = defineEmits(['handleClick']);
const handleClick = () => {
  emit('handleClick');
};

/*
computed
 */

const classes = computed(() => ({
  'a-button': true,
  [`a-button-s--${props.size || 'medium'}`]: true,
  [`a-button-bg--${props.bgColor}`]: true,
  [`a-button--${props.addIcon}`]: true,
  [`a-button--${props.onlyIcon}`]: true,
  [`a-button--${props.type}`]: true,
}));

const icons = computed(() => ({
  'a-button__icon': true,
  [`a-button__icon--${props.addIcon}`]: true,
  [`a-button__icon--${props.iconPosition}`]: true,
  [`${props.iconType}`]: true,
}));
</script>

<style scoped lang="scss">
@import './a_button.scss';
</style>
