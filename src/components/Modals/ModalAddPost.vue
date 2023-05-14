<template>
    <ModalWrapper
        :is-open="isOpen"
        @close="$emit('close')"
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
import { usePostsStore } from '@/stores';
import { ModalWrapper } from '@/components';

const { isOpen } = defineProps<{
    isOpen: boolean;
}>();
const emit = defineEmits<{
    (e: 'close'): void;
}>();

const { addPost } = usePostsStore();

const titleInputValue = $ref('');
const bodyInputValue = $ref('');

function onAddPost(): void {
    addPost(titleInputValue, bodyInputValue);
    emit('close');
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
