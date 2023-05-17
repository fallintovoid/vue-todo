<template>
    <div
        v-if="isOpen"
        class="modal-background"
        @click="$emit(Emits.CLOSE, false)"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { Emits } from '@/@enums';

const { isOpen } = defineProps<{
    isOpen: boolean;
}>();
defineEmits<{
    (e: Emits.CLOSE, value: boolean): void;
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
