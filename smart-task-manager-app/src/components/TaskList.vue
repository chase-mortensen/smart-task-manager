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
          <!-- This needs to be able to fit into the tbody above...
          Here are the options:
          1) Show details in the table by expanding the cell and continuing to show all tasks
          2) Hide other tasks (using v-if or v-show) and just display the single task and its details
          
          I think I'm going to go with #2 since trying to get the details page to fit neatly into the
          table as it is currently built would be a huge pain and I like the idea of having the page be
          slightly less crowded. This will be taken care of in App.vue instead of here -->
              <!-- <TaskDetails /> -->

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TaskListSearchBar from "./TaskListSearchBar.vue"
import TaskListItem from "./TaskListItem.vue"
import TaskDetails from './TaskDetails.vue'

</script>