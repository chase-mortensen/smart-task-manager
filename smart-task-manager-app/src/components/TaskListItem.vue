<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="ml-4">
          <span v-if="task.state">
            <input type="checkbox" v-model="task.state" class="rounded" checked>
          </span>
          <span v-if="!task.state">
            <input type="checkbox" v-model="task.state" class="rounded">
          </span>
          <span class="text-sm font-medium text-gray-900">
            &nbsp;{{ task.name }}
          </span>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <span v-if="task.type == 'Shopping'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        {{ task.type }}
      </span>
      <span v-if="task.type == 'Exercise'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
        {{ task.type }}
      </span>
      <span v-if="task.type == 'Personal'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
        {{ task.type }}
      </span>
      <span v-if="task.type == 'Work'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
        {{ task.type }}
      </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      <span v-if="task.duration >= 60">{{ Math.floor(task.duration / 60) }} hrs </span>
      <span v-if="task.duration % 60 != 0">{{ task.duration % 60 }} mins</span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <a href="#" class="text-indigo-600 hover:text-indigo-900">Details</a>
    </td>
  </tr>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  task: Object
})

</script>