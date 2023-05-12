import { defineStore } from 'pinia';
import { ref } from 'vue';
import { StoreIds } from '@/@enums';
import { ITodo } from '@/@interfaces';

type ChangeIsDonePayload = {
    id: string;
    value: boolean;
};

export const useTodoStore = defineStore(StoreIds.TODO, () => {
    const todoList = ref<ITodo[]>([
        {
            title: 'TODO',
            isDone: false,
            id: 'new',
        },
    ]);

    function addTodo(payload: ITodo): void {
        todoList.value.push(payload);
    }

    function changeIsDone(payload: ChangeIsDonePayload): void {
        const newTodoList = todoList.value.map((item) => {
            if (item.id === payload.id) {
                const newItem: ITodo = {
                    ...item,
                    isDone: payload.value,
                };

                return newItem;
            }

            return item;
        });
        todoList.value = newTodoList;
    }

    function deleteOne(payload: string) {
        todoList.value = todoList.value.filter((item) => item.id !== payload);
    }

    return {
        todoList,
        addTodo,
        changeIsDone,
        deleteOne,
    };
});
