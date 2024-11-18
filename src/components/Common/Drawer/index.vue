<template>
    <van-popup v-model:show="isSidebarOpen" class="!bg-dark-bg px-2" position="left" :style="{ width: '100%', height: '100%' }">
        <div class="bg-dark-bg sticky top-0 px-2 md:w-10/12 mx-auto z-50">
            <div class="relative flex items-center h-14 mb-4">
                <van-icon name="arrow-left" size="1.5rem" @click="toggleSidebar()"/>
                <p class="mx-auto">User</p>
            </div>
        </div>
        <div class="md:w-10/12 mx-auto">
            <div class="flex items-center justify-between mb-4 cursor-pointer rounded-md p-2 hover:bg-dark-bg-sec" @click="goTo('user-info')">
                <div class="flex items-center gap-2">
                    <img :src="Logo" alt="userTempProfile" class="rounded-full w-16">
                    <div class="text-xs">
                        <p class="font-bold !text-lg">ID: 100052</p>
                        <p>Nickname: testUser</p>
                        <p>Reputation Points: 80</p>
                        <p>VIP: 0</p>
                    </div>
                </div>
                <van-icon name="arrow" size="1.5rem"/>
            </div>

            <div class=" bg-dark-bg-sec rounded-md p-2 mb-4">
                <div class="flex items-center justify-between">
                    <div v-for="(item, index) in Menu" :key="index" class="text-center" @click="goTo(item.route, index)">
                        <div class="flex items-center justify-center bg-dark-btn rounded-full w-8 h-8 mx-auto mb-1">
                            <font-awesome-icon :icon="item.icon" />
                        </div>
                        <p class="text-xs">{{ item.name }}</p>
                    </div>
                </div>
            </div>

            <div class=" bg-dark-bg-sec rounded-md p-2 mb-4">
                <ul>
                    <li v-for="(item, index) in CardList" :key="index" class="flex items-center justify-between p-2" @click="goTo(item.route, index)">
                        <div class="flex items-center gap-2 ">
                            <img :src="item.icon" alt="icon" class="w-4">
                            <p>{{ item.name }}</p>
                        </div>
                        <p class="text-dark-text-link "> {{ item.status }}</p>
                    </li>
                </ul>
            </div>

            <div class=" bg-dark-bg-sec rounded-md p-2 mb-4">
                <ul>
                    <li v-for="(item, index) in recordList" :key="index" class="flex items-center justify-between p-2" @click="goTo(item.route, index)">
                        <div class="flex items-center gap-2 ">
                            <img :src="item.icon" alt="icon" class="w-4">
                            <p>{{ item.name }}</p>
                        </div>
                    </li>
                </ul>
            </div>

            <button class="bg-dark-btn mb-4 w-full rounded-md py-2">
                Sign Out
            </button>
        </div>
    </van-popup>
</template>

<script setup lang="ts">
    import { useSidebarStore } from '@/store/drawer';
    import { storeToRefs } from 'pinia';
    import { useRouter } from 'vue-router';

    import Logo from '@/assets/images/logo.png';
    import Auth from '@/assets/images/drawer/auth.png';
    import BankCard from '@/assets/images/drawer/bankcard.png';
    import ListCheck from '@/assets/images/drawer/listCheck.png';
    import About from '@/assets/images/drawer/about.png';
    import Share from '@/assets/images/drawer/share.png';
    import Wallet from '@/assets/images/home/menu/search.png';
    import List from '@/assets/images/home/menu/list.png';

    const { isSidebarOpen } = storeToRefs(useSidebarStore());
    const { toggleSidebar } = useSidebarStore();
    const router = useRouter();

    const Menu = [
        { name: 'Fast Position', icon: 'rocket', route: 'contract-position' },
        { name: 'Contract Position',icon: 'handshake', route: 'contract-position' },
        { name: 'Spot Position',icon: 'briefcase', route: 'contract-position' },
        { name: 'Coin Holdings',icon: 'briefcase', route: 'contract-position' },
    ];

    const CardList =[
        { name: 'Junior Certification', icon: Auth, route: 'certification', status: 'Unverified' },
        { name: 'Advanced Certification', icon: Auth, route: 'certification', status: 'Unverified' },
        { name: 'Bank Cards', icon: BankCard, route: 'bank-card' },
        { name: 'Wallet Address', icon: Wallet, route: 'wallet-address' },
    ];

    const recordList = [
        { name: 'Fund Details', icon: ListCheck, route: 'asset-transaction' },
        { name: 'Deposit Record', icon: List, route: 'asset-transaction' },
        { name: 'Withdrawal Record', icon: List, route: 'asset-transaction' },
        { name: 'About Us', icon: About, route: 'about' },
        { name: 'Share', icon: Share, route: 'share' },
    ];
    
    const goTo = (routeName: any, index?: number ) => {
        if(routeName === 'asset-transaction' || routeName === 'certification' || routeName === 'contract-position') {
            router.push({ name: routeName, params: { type: index } })
        } else {
            router.push({ name: routeName })
        }
        toggleSidebar();
    };


</script>

<style scoped>

</style>