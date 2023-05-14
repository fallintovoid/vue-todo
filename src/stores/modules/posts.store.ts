import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { StoreIds } from '@/@enums';
import { Post, PostData } from '@/@interfaces';
import { uid } from '@/utils';

export const usePostsStore = defineStore(StoreIds.POSTS, () => {
    const postsList = ref<Post[]>([]);
    const currentPage = ref(1);

    async function fetchPosts(): Promise<void> {
        const data = await axios
            .get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage.value}&_limit=${10}`)
            .then((res) => res.data);
        postsList.value.concat(data);
    }

    async function inititalLoad() {
        const data = await axios
            .get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`)
            .then((res) => res.data);
        postsList.value = data;
    }

    function incrementCurrentPage(): void {
        currentPage.value++;
    }

    function changePostData(id: number | string, data: PostData): void {
        const item = postsList.value.find((item) => item.id === id);
        if (!item) return;
        item.body = data.body;
        item.title = data.title;
    }

    function addPost(title: string, body: string): void {
        const newPost: Post = {
            id: uid(),
            title,
            body,
            userId: uid(),
        };
        postsList.value = [newPost, ...postsList.value];
    }

    return {
        fetchPosts,
        postsList,
        incrementCurrentPage,
        changePostData,
        addPost,
        currentPage,
        inititalLoad,
    };
});
