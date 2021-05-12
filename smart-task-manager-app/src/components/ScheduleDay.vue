<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div
        class="py-2 align-middle inline-block min-w-full w-auto sm:px-6 lg:px-8"
      >
        <div
          class="shadow max-w-full overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <tbody class="bg-white divide-y divide-gray-200">
              <!-- <ScheduleDayItem v-for="task in this.$store.getters.incompleteTasks" :key="task.id" :task="task" /> -->
              <!-- <ScheduleDayItem v-for="task in this.$store.getters.completeTasks" :key="task.id" :task="task" /> -->
              <div v-for="date in this.$store.getters.datesWithTasks" :key="date">
                <h2>{{ date }}</h2>
                <p v-for="task in this.$store.getters.tasksByDate(date)" :key="task.id">{{ task.name }}</p>
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ScheduleDayItem from "./ScheduleDayItem.vue";

</script>