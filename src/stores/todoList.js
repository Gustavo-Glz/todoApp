import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoListStore = defineStore('todoList', () => {
  //state
  const todoList = ref([])
  const id = ref(0)

  //actions
  const addTodo = (item) => {
    todoList.value.push({ item, id: id.value++, completed: false })
  }

  //getters




})