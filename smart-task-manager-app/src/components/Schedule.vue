<template>
  <div>
    <!-- for date in dates with tasks... -->
      <!-- show date -->
      <h2>Date</h2>

      <!-- display tasks for date -->  
      <ScheduleDay />

  </div>
</template>

// this is probably where I need to get tasks that start on a specific day
<script setup>
import ScheduleDay from "./ScheduleDay.vue"
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//   setup() {
    
//   },
// })
</script>
