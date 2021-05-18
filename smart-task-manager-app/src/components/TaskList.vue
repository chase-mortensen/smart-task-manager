<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div
        class="py-2 align-middle inline-block min-w-full w-auto sm:px-6 lg:px-8"
      >
      <!-- <h2>&nbsp;Task List</h2> -->
        <button class="justify-center w-1/4">
          <div class="rounded-md shadow">
            <span class="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-700 md:py-2 md:text-lg md:px-10">
              Add Task
            </span>
          </div>
        </button>
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