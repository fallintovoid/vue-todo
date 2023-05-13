<template>
    <li
        class="list-item"
        :class="{ done: isTodoDone }"
    >
        <p>{{ title }}</p>
        <div class="controls">
            <input
                v-model="inputValue"
                type="checkbox"
            />
            <button @click="deleteOne(id)">Delete</button>
        </div>
    </li>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Todo } from '@/@interfaces';
import { useTodoStore } from '@/stores';

const { changeIsDone, deleteOne } = useTodoStore();
const { item } = defineProps<{ item: Todo }>();
const { title, isDone, id } = item;

const inputValue = ref(isDone);
const isTodoDone = computed(() => {
    changeIsDone({ id, value: inputValue.value });
    return inputValue.value;
});
</script>

<style scoped lang="scss">
.list-item {
    padding: 10px;
    background-color: rgb(28, 35, 91);
    color: white;
    display: flex;
    justify-content: space-between;

    &.done {
        background-color: purple;
    }
}

.controls {
    display: flex;
    gap: 10px;
}
</style>
