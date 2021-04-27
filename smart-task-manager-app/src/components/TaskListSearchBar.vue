<template>
  <input v-model="searchText" />
</template>

<script setup>
import { defineProps, reactive } from 'vue'

const state = reactive({ searchText: '' })
</script>