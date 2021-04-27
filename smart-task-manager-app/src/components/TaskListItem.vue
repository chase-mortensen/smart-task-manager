<template>
  <h2>
    {{ taskName }}
  </h2>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  taskName: String
})

</script>