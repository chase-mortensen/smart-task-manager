import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
import './index.css'


const store = createStore({
  state () {
    return {
      count: 0,
      tasks: [
        { id: 1, name: 'Pick up groceries', type: 'Shopping', duration: 30, recurring: false, has_deadline: false, can_be_split: false, person_id: 1, state: 0, isComplete: false },
        { id: 2, name: 'Run 3 miles', type: 'Exercise', duration: 30, recurring: true, has_deadline: false, can_be_split: true, person_id: 1, state: 0, isComplete: false },
        { id: 3, name: 'Read book', type: 'Personal', duration: 45, recurring: true, has_deadline: false, can_be_split: true, person_id: 1, state: 1, isComplete: true },
        { id: 4, name: 'Finish work project', type: 'Work', duration: 195, recurring: false, has_deadline: true, can_be_split: true, person_id: 1, state: 0, isComplete: false },  
      ]
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    switchCompletion (state, id) {
      console.log('switching completion...')
      state.tasks.filter(task => task.id == id).isComplete = !state.tasks.filter(task => task.id == id).isComplete
    }
  },
  getters: {
    incompleteTasks (state) {
      return state.tasks.filter(task => !task.isComplete)
    },
    completeTasks (state) {
      return state.tasks.filter(task => task.isComplete)
    },
    // taskCompletionStatus (state, id) {
    //   // console.log('in taskCompletionStatus... ', state.tasks.find(task => task.id == id).isComplete, state.tasks.find(task => task.id == id))
    //   // return state.tasks.find(task => task.id == id).isComplete
    //   return true
    // }
  }
})

const app = createApp(App)

app.use(store)

app.mount('#app')