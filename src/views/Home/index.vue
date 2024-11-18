<template>
    <DefaultLayout>
        <Swiper />
        <TopCoin />
        
        <van-notice-bar
            :text="'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, eaque eum odit cumque velit facere ipsum illo, ea inventore nulla a necessitatibus dolorem, consequatur nihil nam! Ullam tenetur nesciunt corrupti?'"
            left-icon="volume-o"
            class=" !bg-dark-bg !h-6 !text-dark-text !px-2 mb-4"
        />

        <HomeMenu />

        <div class="w-full mb-4">
            <ul class="flex items-center text-center bg-dark-tab-bg dark:bg-dark-bg-sec rounded-xl">
                <li v-for="(tab, index) in tabs" :key="index" class="w-1/2 h-full py-2" :class="[{ 'rounded-l-xl': index === 0,
                'rounded-r-xl': index === tabs.length - 1 }, active === index ? 'bg-dark-tab-active' : '' ]" @click="handleNavigation(index)">
                    {{ tab }}
                </li>
            </ul>
        </div>
        <div>
            <TableCoin />
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    import DefaultLayout from '@/layouts/DefaultLayout.vue';
    import Swiper from '@/components/Home/Swiper/index.vue';
    import TopCoin from '@/components/Common/TopCoin/index.vue';
    import HomeMenu from '@/components/Home/HomeMenu/index.vue';
    import TableCoin from '@/components/Common/CoinsTable/index.vue';
    
    const active = ref(0);
    const tabs = ref([
        'Price Change',
        'Market Cap'
    ]);

    const handleNavigation = (index: number) => {
        active.value = index;
    }   
</script>

<style scoped>

</style>