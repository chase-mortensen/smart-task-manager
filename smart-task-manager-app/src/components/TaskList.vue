<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div
        class="py-0 align-middle inline-block min-w-full w-auto sm:px-6 lg:px-8"
      >
      <!-- <h2>&nbsp;Task List</h2> -->
      
        
        <TaskListSearchBar
          class="min-w-full max-w-full divide-y divide-gray-200"
        />
        <div
          class="shadow max-w-full overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <tbody class="bg-white divide-y divide-gray-200">
              <TaskListItem v-for="task in this.$store.getters.incompleteTasks" :key="task.id" :task="task" />
              <TaskListItem v-for="task in this.$store.getters.completeTasks" :key="task.id" :task="task" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TaskListSearchBar from "./TaskListSearchBar.vue";
import TaskListItem from "./TaskListItem.vue";

</script>