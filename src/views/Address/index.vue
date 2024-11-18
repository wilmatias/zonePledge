<template>
    <DefaultLayout>

        <div class="relative w-full md:h-40">
            <van-button block type="primary" native-type="submit" class="!bg-dark-btn !border-none !w-28 !absolute top-1/3 left-4">
                New Wallet
            </van-button>
            <img :src="AddressLogo" alt="bank-card-logo" class="rounded-md object-cover h-full w-full">
        </div>

        <div class="text-center my-4">
            <font-awesome-icon icon="file" class="mb-2 text-6xl"/>
            <p>No Binded Wallet</p>
        </div>

        <div class="">
            <p class="font-semibold mb-2">Wallet List:</p>
            <div v-for="index in 3" :key="index" class="flex items-end gap-2 bg-dark-card-bg p-2 mb-4 rounded-md text-sm">
                <div>
                    <img :src="AddressLogo" alt="index" class="w-20 h-20">
                </div>
                <div class="text-start">
                    <p class="text-lg font-semibold">ERC20</p>
                    <p class="truncate w-48">0x23423adas2334234234234asdasdasdasdas2</p>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
    import AddressLogo from '@/assets/images/kefu.png';

    import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>

<style scoped>

</style>