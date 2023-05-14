<template>
    <footer
        ref="target"
        class="footer"
    >
        <h1>Its footer</h1>
    </footer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { usePostsStore } from '@/stores';

const target = $ref(null);
const { incrementCurrentPage } = usePostsStore();

function callback(entries: any) {
    const [entry] = entries;
    console.log(entry.isIntersecting);
}

onMounted(() => {
    const observer = new IntersectionObserver(callback, {
        rootMargin: '0px',
        threshold: 1.0,
    });
    if (target) {
        console.log(target)
        observer.observe(target);
    }
});
</script>

<style scoped lang="scss">
.footer {
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
