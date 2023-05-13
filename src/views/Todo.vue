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
            v-for="item in searchTodoList.length ? searchTodoList : todoList"
            :key="item.id"
            :item="item"
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
import { computed, ref, watchEffect } from 'vue';
import { Todo } from '@/@interfaces';
import { useTodoStore } from '@/stores';
import { uid } from '@/utils';
import { TodoItem } from '@/components';

const todoStore = useTodoStore();
const { todoList } = storeToRefs(todoStore);
const { addTodo } = todoStore;

const titleInputValue = ref('');
const searchInputValue = ref('');

const addHandler = () => {
    addTodo({ title: titleInputValue.value, id: uid(), isDone: false });
    titleInputValue.value = '';
};

const searchTodoList = computed(() => {
    if (searchInputValue.value.length) {
        return todoList.value.filter((item) => item.title.toLowerCase().includes(searchInputValue.value));
    } else {
        return [];
    }
});
</script>
