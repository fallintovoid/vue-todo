<template>
    <div>
        <h1>Post list</h1>
        <button @click="onOpen">Add new post</button>
        <ul class="post-list">
            <PostItem
                v-for="item in postsList"
                :key="item.id"
                :item="item"
            />
        </ul>
        <ModalAddPost v-model:is-open="isOpen" />
    </div>
    <Footer />
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';
import { usePostsStore } from '@/stores';
import { Footer, ModalAddPost, PostItem } from '@/components';

const postsStore = usePostsStore();
const { fetchPosts } = postsStore;
const { postsList } = storeToRefs(postsStore);
let isOpen = $ref(false);

function onOpen(): void {
    isOpen = true;
}

watchEffect(() => {
    fetchPosts();
});
</script>

<style scoped lang="scss">
.post-list {
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 60%;
    padding: 0;
}
</style>
