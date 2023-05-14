<template>
    <ModalWrapper
        :is-open="isOpen"
        @close="onClose"
    >
        <div
            class="modal-inner"
            @click="$event.stopPropagation()"
        >
            <input
                v-model="titleInputValue"
                type="text"
            />
            <textarea
                v-model="bodyInputValue"
                type="text"
            />
            <button @click="onChangePostData">Change data</button>
        </div>
    </ModalWrapper>
</template>

<script setup lang="ts">
import { usePostsStore } from '@/stores';
import { ModalWrapper } from '@/components';

const { isOpen, postId, title, body } = defineProps<{
    isOpen: boolean;
    postId: number | string;
    title: string;
    body: string;
}>();
const emit = defineEmits<{
    (e: 'close'): void;
}>();
const { changePostData } = usePostsStore();

let titleInputValue = $ref(title);
let bodyInputValue = $ref(body);

function onChangePostData() {
    const data = {
        title: titleInputValue,
        body: bodyInputValue,
    };
    changePostData(postId, data);
    emit('close');
}

function onClose(): void {
    titleInputValue = title;
    bodyInputValue = body;
    emit('close');
}
</script>

<style scoped lang="scss">
.modal-inner {
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
}
</style>
