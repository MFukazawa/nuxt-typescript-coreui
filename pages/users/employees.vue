<template>
  <div>
    <CRow>
      <CCol sm="12">
        <CTableWrapper
          :items="getShuffledUsersData()"
          hover
          striped
          bordered
          small
          fixed
          caption="従業員"
        />
      </CCol>
    </CRow>
  </div>
</template>

<script>
import CTableWrapper from '~/components/base/Table.vue'
import usersData from '~/assets/UsersData'

export default {
  components: { CTableWrapper },
  methods: {
    shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },

    getShuffledUsersData () {
      return this.shuffleArray(usersData.slice(0))
    }
  }
}
</script>

<style>

</style>
