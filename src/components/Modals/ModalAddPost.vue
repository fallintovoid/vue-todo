<template>
    <ModalWrapper
        :is-open="isOpen"
        @update:is-open="$emit(Emits.CLOSE, false)"
    >
        <div
            class="modal"
            @click="$event.stopPropagation()"
        >
            <h2>Title</h2>
            <input
                v-model="titleInputValue"
                type="text"
            />
            <h2>Body</h2>
            <textarea v-model="bodyInputValue" />
            <button @click="onAddPost">Add post</button>
        </div>
    </ModalWrapper>
</template>

<script setup lang="ts">
import { Emits } from '@/@enums';
import { usePostsStore } from '@/stores';
import { ModalWrapper } from '@/components';

const { isOpen } = defineProps<{
    isOpen: boolean;
}>();

const emit = defineEmits<{
    (e: Emits.CLOSE, value: boolean): void;
}>();

const { addPost } = usePostsStore();

let titleInputValue = $ref('');
let bodyInputValue = $ref('');

function onAddPost(): void {
    addPost(titleInputValue, bodyInputValue);
    titleInputValue = '';
    bodyInputValue = '';
    emit(Emits.CLOSE, false);
}
</script>

<style scoped lang="scss">
.modal {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: white;
}
</style>
