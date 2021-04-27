<template>
  <!-- <TaskListSearchBar /> -->
  <TaskListItem 
    v-for="task in tasks"
    :key="task.id"
    :taskName="task.name"></TaskListItem>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import TaskListSearchBar from './TaskListSearchBar.vue'
import TaskListItem from './TaskListItem.vue'

defineProps({
  tasks: Array
})

</script>
