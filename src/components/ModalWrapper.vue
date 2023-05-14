<template>
    <div
        v-if="isOpen"
        class="modal-background"
        @click.stop="$emit('close')"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
const { isOpen } = defineProps<{
    isOpen: boolean;
}>();
defineEmits<{
    (e: 'close'): void;
}>();
</script>

<style scoped lang="scss">
.modal-background {
    width: 100vw;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: 0.5);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    color: black;
}
</style>
