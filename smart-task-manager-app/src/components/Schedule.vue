<template>
  <div>
    <!-- for date in dates with tasks... -->
      <!-- show date -->

      <!-- display tasks for date -->  
      <ScheduleDay v-for="date in this.$store.getters.datesWithTasks" :key="date" :date="date" />
      <ScheduleDay :key="'unscheduled'" :date="'unscheduled'" />

  </div>
</template>

<!-- this is probably where I need to get tasks that start on a specific day -->
<script setup>
import ScheduleDay from "./ScheduleDay.vue"
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//   setup() {
    
//   },
// })
</script>
