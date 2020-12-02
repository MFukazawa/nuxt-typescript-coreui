<template>
  <div class="c-app">
    <TheSidebar />
    <CWrapper>
      <TheHeader />
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
      <!-- <TheFooter/> -->
      <footer class="c-footer">footer</footer>
    </CWrapper>
  </div>
</template>

<script>
import TheSidebar from '~/components/nav/TheSidebar'
import TheHeader from '~/components/nav/TheHeader'

export default {
  components: {
    TheSidebar,
    TheHeader
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
