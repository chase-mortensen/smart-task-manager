<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" />  -->
  <!-- <Example /> -->
  <TaskList :tasks="state.tasks" />
</template>

<script setup>
import { defineProps, reactive } from 'vue'

import TaskList from './components/TaskList.vue'
import HelloWorld from './components/HelloWorld.vue'
import Example from './components/Example.vue'


const state = reactive({ tasks: [
  { id: 1, name: 'Task 1' },
  { id: 2, name: 'Task 2' },
  { id: 3, name: 'Task 3' },
]})

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

