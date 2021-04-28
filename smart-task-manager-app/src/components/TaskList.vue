<template>
  <!-- <TaskListSearchBar /> -->
  <!-- <TaskListItem 
    v-for="task in tasks"
    :key="task.id"
    :taskName="task.name"></TaskListItem> -->
  
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <!-- <thead class="bg-gray-50">
              <tr> -->
                <!-- <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex-shrink-0 h-10 w-10">
                </th> -->
                <!-- <div class="flex-shrink-0 h-10 w-10"></div> -->
                <!--
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Task
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead> -->
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="task in tasks" :key="task.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <!-- <img class="h-10 w-10 rounded-full" :src="person.image" alt="" /> -->
                      <div v-if="task.state">
                        <input type="checkbox" checked v-model="task.state">
                      </div>
                      <div v-if="!task.state">
                        <input type="checkbox" v-model="task.state">
                      </div>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ task.name }}
                      </div>
                      <!-- <div class="text-sm text-gray-500">
                        {{ task.type }}
                      </div> -->
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <!-- <div class="text-sm text-gray-900">{{ person.title }}</div>
                  <div class="text-sm text-gray-500">{{ person.department }}</div> -->
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import TaskListSearchBar from './TaskListSearchBar.vue'
import TaskListItem from './TaskListItem.vue'

defineProps({
  tasks: Array
})

</script>