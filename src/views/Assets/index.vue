<template>
    <DefaultLayout>
        <div class="relative bg-dark-card-bg rounded-md p-2 mb-4">
            <div class="text-xs">
                <div>
                    <p>Account Assets</p>
                    <p class="text-lg font-bold">9851022.0022 <span>USDT</span></p>
                </div>
                <div>
                    <p>Estimated Earnings Today</p>
                    <p>0.00</p>
                </div>
                <div>
                    <p>Total Revenue</p>
                    <p>0.00</p>
                </div>
            </div>
            <div class="absolute top-2 right-2">
                <img :src="cardLogo" alt="card-logo" class="w-32">
            </div>
        </div>
        <div class="flex items-center justify-between gap-2 mb-4">
            <div v-for="(menu, index) in menus" :key="index" class="bg-dark-card-bg rounded-md p-2 text-center w-full" @click="goTo(menu.route)">
                <img :src="menu.icon" alt="icon" class="w-6 mx-auto mb-2">
                <p class="text-sm">{{ menu.name }}</p>
            </div>
        </div>

        <div class="mb-4">
            <div class="flex items-center justify-between text-xs">
                <div>
                    <p class="font-semibold text-sm">USDT</p>
                    <p>Freeze Margin</p>
                    <p>Equivalent</p>
                </div>
                <div>
                    <p class="font-semibold text-sm">9800.00</p>
                    <p>0.00</p>
                    <p>0.00</p>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    import Deposit from '@/assets/images/home/menu/dep.png';
    import Withdraw from '@/assets/images/assets/withdraw.png';
    import Exchange from '@/assets/images/assets/exchange.png';

    import DefaultLayout from '@/layouts/DefaultLayout.vue';
    import cardLogo from '@/assets/images/assets/wallet-top.ad3b33ae.png';

    const router = useRouter();
    const menus = ref([
        { name: 'Deposit', icon: Deposit, route: 'deposit' },
        { name: 'Withdraw', icon: Withdraw, route: 'withdraw' },
        { name: 'Exchange', icon: Exchange, route: 'exchange' },
    ]);

    const goTo = (routeName: any ) => {
        router.push({ name: routeName })
    };
</script>

<style scoped>

</style>