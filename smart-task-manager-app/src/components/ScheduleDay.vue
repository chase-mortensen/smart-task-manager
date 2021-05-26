<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div
        class="pt-1 align-middle inline-block min-w-full sm:px-6 lg:px-8"
      >
        <div
          class="shadow max-w-full overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200 table-fixed">
            <thead class="bg-gray-200">
              <tr>
                <th v-if="date !== 'unscheduled'" scope="colgroup" class="px-6 py-3 text-left text-sm font-big text-gray-500 uppercase tracking-wider w-1/2">
                  {{ formatDate(date) }}
                </th>
                <th v-else scope="colgroup" class="px-6 py-3 text-left text-sm font-big text-red-500 uppercase tracking-wider w-1/2">
                  Unscheduled
                </th>
                <th v-show="!state.isMobile" class="w-1/3"></th>
                <th v-show="!state.isMobile" class="w-1/6"></th>
                <th class="w-1/6"></th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200" v-if="date !== 'unscheduled'">
              <ScheduleDayItem v-for="task in this.$store.getters.tasksByDate(date)" :key="task.id" :task="task" />
            </tbody>
            <tbody class="bg-white divide-y divide-gray-200" v-else>
              <ScheduleDayItem v-for="task in this.$store.getters.unscheduledTasks" :key="task.id" :task="task" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <br>

</template>

<script setup>
import ScheduleDayItem from "./ScheduleDayItem.vue";

import { defineProps, reactive } from 'vue'

defineProps({
  date: String
})

let formatDate = (date) => {
  return new Date(date).toDateString();
}

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

<!-- I'm still trying to figure out the script setup... -->
<!-- <script setup>
import ScheduleDayItem from "./ScheduleDayItem.vue";

import { defineProps, reactive } from 'vue'

defineProps({
  date: String
})

const state = reactive({
  data() {

  },
  methods: {
    formatDate (date) {
      let formattedDate = new Date(date)
      return formattedDate
    },
    getDay (date) {
      return 'Tuesday'
    }
  }
})

</script> -->