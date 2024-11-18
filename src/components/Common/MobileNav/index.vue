<template>
    <div class="sticky bottom-0 grid grid-cols-4 bg-dark-bg-sec shadow-md z-50">
        <div v-for="(item, index) in nav" :key="index" class="flex justify-center items-center py-2" @click="handleNav(item.routeName)">
            <div class="flex flex-col justify-center items-center">
                <img v-if="isRoute(item.routeName)" :src="item.imga" class="w-6" alt="nav-icon">
                <img v-else :src="item.img" class="w-6" alt="nav-icon">
                <p class="text-sm truncate w-20 text-center">{{ item.name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useRoute, useRouter } from 'vue-router';

    import Nav1 from '@/assets/images/menu/home.png';
    import Nav2 from '@/assets/images/menu/market.png';
    import Nav3 from '@/assets/images/menu/trade.png';
    import Nav4 from '@/assets/images/menu/wallet.png';
    import Nav1a from '@/assets/images/menu/home-a.png';
    import Nav2a from '@/assets/images/menu/market-a.png';
    import Nav3a from '@/assets/images/menu/trade-a.png';
    import Nav4a from '@/assets/images/menu/wallet-a.png';

    const router = useRouter();
    const route = useRoute();
    
    const nav = [
        {name: 'Home', img: Nav1, imga: Nav1a, routeName: 'home'},
        {name: 'Market', img: Nav2, imga: Nav2a, routeName: 'market'},
        {name: 'Trade', img: Nav3, imga: Nav3a, routeName: 'trade'},
        {name: 'Assets', img: Nav4, imga: Nav4a, routeName: 'asset'}
    ]

    const handleNav = (route:any) => {
        router.push({ name: route })
    };

    const isRoute = (routeName: string) => {
        return route.name === routeName || route.path === routeName;
    };

</script>

<style scoped>

</style>