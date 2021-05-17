<template>
  <tr>
    <td class="px-3 sm:px-6 py-4 whitespace-normal w-1/2">
      <div class="flex items-center">
        <div class="ml-4">
          <!-- {{ this.isComplete(task.id) }}? -->
            <input type="checkbox" @click="this.$store.commit('switchCompletion', task.id)" class="rounded">
          <span class="text-sm font-medium text-gray-900">
            &nbsp;{{ task.name }}
          </span>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 w-1/6" v-show="!state.isMobile">
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
      <span v-if="!task.isScheduled" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
        Unscheduled
      </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-1/6" v-show="!state.isMobile">
      <span v-if="task.duration >= 60">{{ Math.floor(task.duration / 60) }} hrs </span>
      <span v-if="task.duration % 60 != 0">{{ task.duration % 60 }} mins</span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium w-1/6">
      <button class="text-indigo-600 hover:text-indigo-500" v-on:click="console.log('clicked...')">Details</button>
    </td>
  </tr>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  task: Object
})

const state = reactive({
  innerWidth: window.innerWidth,
  isMobile: window.innerWidth < 550,
  mounted() {
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth
      this.isMobile = window.innerWidth < 550
      console.log("innerWidth: ", this.innerWidth)
    })
  },
  methods: {
    isComplete (id) {
      return $store.state.tasks.find(t => t.id == id).isComplete
    },
  }
})


</script>