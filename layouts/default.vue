<template>
  <!-- <client-only> -->
  <UIContainer>
    <!-- <Nuxt /> -->
  </UIContainer>
  <!-- </client-only> -->
</template>

<script>
import UIContainer from '~/components/UIContainer'

export default {
  name: 'Default',
  middleware: ['authenticated', 'dashboard'],
  components: {
    UIContainer,
  },
}
</script>

<style>
/* html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
} */
</style>
