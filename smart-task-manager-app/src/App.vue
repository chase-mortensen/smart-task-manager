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
  { id: 1, name: 'Pick up groceries', type: 'Shopping', duration: 30, recurring: false, has_deadline: false, can_be_split: false, person_id: 1, state: 0 },
  { id: 2, name: 'Run 3 miles', type: 'Exercise', duration: 30, recurring: true, has_deadline: false, can_be_split: true, person_id: 1, state: 0 },
  { id: 3, name: 'Read book', type: 'Personal', duration: 45, recurring: true, has_deadline: false, can_be_split: true, person_id: 1, state: 1 },
  { id: 3, name: 'Finish work project', type: 'Work', duration: 195, recurring: false, has_deadline: true, can_be_split: true, person_id: 1, state: 0 },  
]})

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

