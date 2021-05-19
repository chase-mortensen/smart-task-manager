<template>
  <div>
    <MenuBar />
    <!-- <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h2 class="text-xl font-bold text-gray-900">
          Dashboard
        </h2>
      </div>
    </header> -->
    <main class="relative">
      <div class="flex items-center justify-center pt-6 sm:px-6 min-w-min">
        <button class="justify-center xl:w-1/6 w-full md:w-1/4">
          <div class="rounded-md shadow">
            <span class="whitespace-nowrap w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 md:py-2 md:text-lg md:px-10">
              Add Task
            </span>
          </div>
        </button>
      </div>
      <div class="grid xl:grid-cols-2 sm:grid-cols-1">
        <div class="max-w-7xl xl:min-w-min sm:min-w-full xl:ml-auto py-6 sm:px-6 xl:pl-8 xl:pr-4 xl:w-5/6">
          <TaskList />
        </div>
        <!-- <div class="max-w-7xl xl:min-w-min sm:min-w-full xl:mr-auto py-6 sm:px-6 xl:pr-8 xl:pl-4"> -->
        <div class="max-w-7xl sm:min-w-min xl:mr-auto py-6 sm:px-6 xl:pr-8 xl:pl-4 xl:w-5/6">
          <!-- <h2>&nbsp;Schedule</h2> -->
          <Schedule />
          <!-- <TaskList :tasks="state.tasks" /> -->
          <!-- <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
            <button @click="this.$store.commit('increment')">count is: {{ this.$store.state.count }}</button>
          </div> -->
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { defineProps, reactive, ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon, CogIcon } from '@heroicons/vue/outline'

import TaskList from './components/TaskList.vue'
import Schedule from './components/Schedule.vue'
import MenuBar from './components/MenuBar.vue'



const state = reactive({ 
  tasks: [
    { id: 1, name: 'Pick up groceries Pick up groceries Pick up groceries', type: 'Shopping', duration: 30, recurring: false, has_deadline: false, can_be_split: false, person_id: 1, state: 0 },
    { id: 2, name: 'Run 3 miles', type: 'Exercise', duration: 30, recurring: true, has_deadline: false, can_be_split: true, person_id: 1, state: 0 },
    { id: 3, name: 'Read book', type: 'Personal', duration: 45, recurring: true, has_deadline: false, can_be_split: true, person_id: 1, state: 1 },
    { id: 3, name: 'Finish work project', type: 'Work', duration: 195, recurring: false, has_deadline: true, can_be_split: true, person_id: 1, state: 0 },  
  ],
  components: {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      Menu,
      MenuButton,
      MenuItem,
      MenuItems,
      CogIcon,
      MenuIcon,
      XIcon,
    },
    innerWidth: window.innerWidth,
  setup() {
    const open = ref(false)

    return {
      navigation,
      profile,
      open,
    }
  },

  mounted() {
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth
      console.log("innerWidth: ", this.innerWidth)
    })
  },
})


// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

