import { defineStore } from 'pinia';
import { ref } from 'vue';
import { StoreIds } from '@/@enums';
import { Todo } from '@/@interfaces';

type ChangeIsDonePayload = {
    id: string;
    value: boolean;
};

export const useTodoStore = defineStore(StoreIds.TODO, () => {
    const todoList = ref<Todo[]>([
        {
            title: 'TODO',
            isDone: false,
            id: 'new',
        },
    ]);

    function addTodo(payload: Todo): void {
        todoList.value.push(payload);
    }

    function changeIsDone(payload: ChangeIsDonePayload): void {
        const newTodoList = todoList.value.map((item) => {
            if (item.id === payload.id) {
                const newItem: Todo = {
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
        todoList.value = todoList.value.filter(({ id }) => id !== payload);
    }

    return {
        todoList,
        addTodo,
        changeIsDone,
        deleteOne,
    };
});
