<template>
  <div :class="classList">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      default: '',
      type: String,
    },
  },
  computed: {
    classList() {
      return ['callout', this.calloutVariant]
    },
    calloutVariant() {
      return this.variant ? `callout-${this.variant}` : ''
    },
  },
}
</script>
