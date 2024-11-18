<template>
    <DefaultLayout>
        <div class="w-full mb-4">
            <ul class="flex items-center text-center bg-dark-tab-bg dark:bg-dark-bg-sec rounded-xl">
                <li v-for="(tab, index) in tabs" :key="index" class="w-1/2 h-full py-2" :class="[{ 'rounded-l-xl': index === 0,
                'rounded-r-xl': index === tabs.length - 1 }, active === index ? 'bg-dark-tab-active' : '' ]" @click="handleNavigation(index)">
                    {{ tab }}
                </li>
            </ul>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import DefaultLayout from '@/layouts/DefaultLayout.vue';

    const active = ref(0);
    const tabs = ref([
        'Holding',
        'Closed'
    ]);

    const handleNavigation = (index: number) => {
        active.value = index;
    }   
</script>

<style scoped>

</style>