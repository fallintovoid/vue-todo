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
import { useIntersectionObserver } from '@/modules';
import { usePostsStore } from '@/stores';

const target = $ref<HTMLDivElement | undefined>();
const { incrementCurrentPage } = usePostsStore();
const { observeTarget } = useIntersectionObserver();

onMounted(() => {
    if (target) {
        observeTarget(target, (entry) => {
            if (entry.isIntersecting) {
                incrementCurrentPage();
            }
        });
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
