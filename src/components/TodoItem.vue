<script setup lang="ts">
import { onUpdated, ref } from 'vue';
import { useTodoStore } from '@/stores';

type Props = {
    title: string;
    isDone: boolean;
    id: string;
};

const { changeIsDone, deleteOne } = useTodoStore();
const { title, isDone, id } = defineProps<Props>();

const inputValue = ref(isDone);
onUpdated(() => {
    console.log(inputValue.value);
    changeIsDone({ id, value: inputValue.value });
});

const onClickHandler = () => {
    deleteOne(id);
};

`list-item ${inputValue.value ? 'done' : ''}`;
</script>

<template>
    <li
        class="list-item"
        :class="inputValue ? 'done' : ''"
    >
        <p>{{ title }}</p>
        <div class="controls">
            <input
                v-model="inputValue"
                type="checkbox"
                :value="inputValue"
            />
            <button @click="onClickHandler">Delete</button>
        </div>
    </li>
</template>

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
