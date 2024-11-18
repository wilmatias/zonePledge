<template>
    <DefaultLayout>
        <div class="bg-dark-card-bg p-2 rounded-md mb-4">
            <div class="flex items-center justify-between">
                <p class="font-semibold">Funds in Custody</p>
                <div class="bg-dark-btn px-2 text-sm">
                    Orders
                </div>
            </div>
            <div class="flex items-end justify-between text-xs">
                <div>
                    <div class="mb-2">
                        <p class="text-lg">0.00</p>
                        <p>Total Order: 2</p>
                    </div>
                    <div>
                        <p>Estimate Earnings Today</p>
                        <p class="text-lg">0.00</p>
                    </div>
                </div>
                <div>
                    <p>Cumulative Income</p>
                    <p class="text-lg">0.00</p>
                </div>
            </div>
        </div>
        <div v-for="index in 5" :key="index" class="bg-dark-card-bg p-2 rounded-md mb-4">
            <div class="flex items-center justify-between mb-4">
                <img :src="Logo" alt="logo" class="w-8">
                <p>Mining Title</p>
                <div class="bg-dark-btn px-2 text-sm rounded-md">
                    Purchase
                </div>
            </div>
            <div class="grid grid-cols-3 text-xs text-center mb-4">
                <div>
                    <p>Single Limit</p>
                    <p class="font-semibold text-sm">100 - 150</p>
                </div>
                <div>
                    <p>Daily Rate Return</p>
                    <p class="font-semibold text-sm">100 - 150</p>
                </div>
                <div>
                    <p>Abort</p>
                    <p class="font-semibold text-sm">100 - 150</p>
                </div>
            </div>
            <div>
                progress bar here
            </div>
            <div class="flex items-center justify-between border-l-2 border-dark-btn">
                <p>Financial Cycle</p>
                <p>5 Days</p>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
    import DefaultLayout from '@/layouts/DefaultLayout.vue';
    import Logo from '@/assets/images/logo.png';
</script>

<style scoped>

</style>