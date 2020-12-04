<template>
  <div>
    <CustomersTable />
    <EmployeesTable />
  </div>
</template>

<script>
import CustomersTable from './customers'
import EmployeesTable from './employees'

export default {
  components: {
    CustomersTable,
    EmployeesTable
  }
}
</script>

<style>

</style>
