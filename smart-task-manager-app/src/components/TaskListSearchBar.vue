<template>
  <div>
    <div class="mt-1 relative rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span class="text-gray-500 sm:text-sm">
        </span>
      </div>
      <input type="text" name="price" id="price" v-model="searchText" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Search all tasks..." />
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

const state = reactive({ searchText: '' })
</script>