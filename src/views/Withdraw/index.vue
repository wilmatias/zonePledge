<template>
    <DefaultLayout>
        <div class="mb-4">
            <p class="text-xs text-start mb-2">Currency:</p>
            <Select :options="option" @selectedOption="handleSelectedOption"  />
        </div>
        <div class="mb-4">
            <p class="text-xs text-start mb-2">Amount</p>
            <van-field
                v-model="amount"
                placeholder="Enter Amount"
                class="border rounded-xl !bg-dark-tab-bg !text-dark-text"
            >
                <template #right-icon>
                    <p>All</p>
                </template>
            </van-field>
            <div class="flex items-center justify-between text-xs">
                <p>Available Balance</p>
                <p>1254.00</p>
            </div>
        </div>
        <div class="mb-4">
            <p class="text-xs text-start mb-2">Withdrawal Password</p>
            <van-field
                v-model="password"
                placeholder="Enter Password"
                :type="(type === 0 ? 'password' : 'text')"
                class="border rounded-xl !bg-dark-tab-bg !text-dark-text"
            >
                <template #right-icon>
                    <svg v-if="type === 0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-dark-text" @click="()=>{type = 1}">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-dark-text" @click="()=>{type = 0}">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                </template>
            </van-field>
        </div>
        <div class="mb-4">
            <p class="text-xs text-start mb-2">Fee</p>
            <div class="flex items-center justify-between text-xs">
                <p>1</p>
                <p>%</p>
            </div>
        </div>
        <van-button block type="primary" native-type="submit" class="!bg-dark-btn !border-none" @click="handleSubmit">
            Withdrawal
        </van-button>
        <div class="text-dark-text-sec">
            <ul class="list-disc list-inside ml-2">
                <li v-for="(item, index) in steps" :key="index" class="text-xs">{{ item }}</li>
            </ul>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import DefaultLayout from '@/layouts/DefaultLayout.vue';

    const option = ref([
        { name: 'BTC'},
        { name: 'ETH'},
        { name: 'USDT (ERC-20)'},
        { name: 'USDT (TRC-20)'}
    ]);
    const currency = ref('BTC');
    const amount = ref();
    const password = ref();
    const type = ref(0);

    const steps = ref([
        'If you currently have a position order, you cannot withdraw money.',
        'To withdraw cash, please first pass the real-name authentication and bind the digital wallet on the official website.',
        'The funds will be credited within 2 hours during the withdrawal period, and the funds will be credited before 24:00 the next day at the latest.',
        'If money laundering is discovered, the account will be frozen and legal responsibility will be pursued.'
    ]);

    const handleSelectedOption = (optionName: string) => {
        currency.value = optionName;
    };

    const handleSubmit = () => {
        console.log('submit');
    }
</script>

<style scoped>

</style>