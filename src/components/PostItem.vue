<template>
    <li class="post-item">
        <div class="post-info">
            <h2>{{ item.title }}</h2>
            <p>{{ item.body }}</p>
        </div>
        <button @click="onOpen">Change</button>
        <ModalChangePost
            :is-open="isOpen"
            :post-id="item.id"
            :title="item.title"
            :body="item.body"
            @close="onClose"
        />
    </li>
</template>

<script setup lang="ts">
import { Post } from '@/@interfaces/posts';
import { ModalChangePost } from '@/components';

const { item } = defineProps<{
    item: Post;
}>();

let isOpen = $ref(false);

function onClose(): void {
    isOpen = false;
}

function onOpen(): void {
    isOpen = true;
}
</script>

<style scoped lang="scss">
.post-item {
    padding: 15px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
}

.post-info {
    display: flex;
    flex-direction: column;
}
</style>
