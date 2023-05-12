<template>
    <h1>To-do list</h1>
    <div class="search">
        <input
            v-model="searchInputValue"
            type="text"
        />
    </div>

    <ul class="list">
        <TodoItem
            v-for="(item, i) in searchTodoList.length ? searchTodoList : todoList"
            :id="item.id"
            :key="i"
            :title="item.title"
            :is-done="item.isDone"
        />
    </ul>
    <div>
        <input
            v-model="titleInputValue"
            type="text"
        />
        <button @click="addHandler">Add one!</button>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { onUpdated, ref } from 'vue';
import { ITodo } from '@/@interfaces';
import { useTodoStore } from '@/stores';
import { uid } from '@/utils';
import TodoItem from '@/components/TodoItem.vue';

const todoStore = useTodoStore();
const { todoList } = storeToRefs(todoStore);
const { addTodo } = todoStore;

const titleInputValue = ref('');
const searchInputValue = ref('');
const searchTodoList = ref<ITodo[]>([]);

const addHandler = () => {
    addTodo({ title: titleInputValue.value, id: uid(), isDone: false });
    titleInputValue.value = '';
};

onUpdated(() => {
    if (searchInputValue.value.length) {
        searchTodoList.value = todoList.value.filter((item) =>
            item.title.toLowerCase().includes(searchInputValue.value),
        );
    } else {
        searchTodoList.value = [];
    }
});
</script>
