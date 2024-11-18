<template>
    <div class="mb-4">
        <p class="text-xs text-start mb-2">Address</p>
        <van-field
            v-model="address"
            placeholder="Please put address"
            class="border rounded-xl !bg-dark-tab-bg !text-dark-text"
        />
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const address = ref();
</script>

<style scoped>

</style>