<template>
<!-- TODO: change to tr, td? -->
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        <!-- <ArrowCircleLeftIcon class="h-6 w-6" aria-hidden="true" /> Task Details -->
        
        <span class="text-gray-500 whitespace-nowrap w-full flex items-center justify-left border border-transparent text-base font-medium text-xl">
          <button class="bg-transparent p-1 rounded-full text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white"
          @click="this.$store.commit('clearDetails')">
          <!-- <span class="sr-only">View notifications</span> -->
          <ArrowCircleLeftIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        &nbsp;Task Details</span>
              
      </h3>
      <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Personal details and application.
      </p> -->
    </div>
    <!-- v-show if showDetails is true -->
    <div class="border-t border-gray-200">
      <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Task name
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ task.name }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Type(s)
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <span v-if="task.type == 'Shopping'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {{ task.type }}
            </span>
            <span v-if="task.type == 'Exercise'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
              {{ task.type }}
            </span>
            <span v-if="task.type == 'Personal'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
              {{ task.type }}
            </span>
            <span v-if="task.type == 'Work'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
              {{ task.type }}
            </span>
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Estimated Duration
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <span v-if="task.duration >= 60">{{ Math.floor(task.duration / 60) }} hrs </span>
            <span v-if="task.duration % 60 != 0">{{ task.duration % 60 }} mins</span>
          </dd>
        </div>
        <!-- This may end up being a list? Scheduled Times -->
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Scheduled Time
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <span v-if="task.isScheduled">{{ getTime(task) }}</span>
            <span v-if="task.has_deadline" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
              Unscheduled
            </span>
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            About
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <span v-if="task.recurring" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
              recurring
            </span>
            <span v-if="task.has_deadline" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
              has deadline
            </span>
            <span v-if="task.can_be_split" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
              divisible
            </span>
            <span v-if="!task.recurring && !task.has_deadline && !task.can_be_split">-</span>
          </dd>
        </div>
        <!-- <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Events (?)
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
              <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                <div class="w-0 flex-1 flex items-center">
                  <PaperClipIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span class="ml-2 flex-1 w-0 truncate">
                    resume_back_end_developer.pdf
                  </span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Download
                  </a>
                </div>
              </li>
              <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                <div class="w-0 flex-1 flex items-center">
                  <PaperClipIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span class="ml-2 flex-1 w-0 truncate">
                    coverletter_back_end_developer.pdf
                  </span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Download
                  </a>
                </div>
              </li>
            </ul>
          </dd>
        </div> -->
      </dl>
    </div>
  </div>
</template>

<script setup>
import { ArrowCircleLeftIcon } from '@heroicons/vue/solid'
import { defineProps, reactive } from 'vue'

defineProps({
  task: Object
})

let formatTime = (date) => {
  let hours = date.getHours()
  let mins = date.getMinutes()
  if (mins === 0) {
    mins = '00'
  }
  let amPm = 'AM'
  if (hours >= 12) {
      amPm = 'PM'
    }
  if (hours > 12) {
    hours -= 12
  }
  return hours + ':' + mins + amPm
}

let getTime = (task) => {
  if (task.isScheduled) {
    // let startTime = new Date(task.scheduledStartTime)
    // let endTime = new Date(task.scheduledEndTime)

    return formatTime(new Date(task.scheduledStartTime)) + ' - ' + formatTime(new Date(task.scheduledEndTime))
  }
  return
}

const state = reactive({ 
  components: {
    ArrowCircleLeftIcon,
  },
})
</script>
