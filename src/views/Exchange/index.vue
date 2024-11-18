<template>
    <DefaultLayout>
        <div class="mb-4">
            <p class="text-xs text-start mb-2">Currency:</p>
            <div class="flex items-center justify-between gap-2">
                <Select :options="option" @selectedOption="handleSelectedOption"  />
                <font-awesome-icon icon="exchange" />
                <Select :options="option2" @selectedOption="handleSelectedOption2"  />
            </div>
        </div>
        <div class="flex items justify-between mb-4">
            <div>
                <p>Balance</p>
                <p>0.00</p>
            </div>
            <div>
                <p>Conversion</p>
                <p>0.00</p>
            </div>
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
        </div>
        <div class="mb-4">
            <div class="flex items-center justify-between text-sm">
                <p>Fee</p>
                <p>1%</p>
            </div>
            <div class="flex items-center justify-between text-sm">
                <p>Exchange Ratio</p>
                <p>0.02555</p>
            </div>
        </div>
        <van-button block type="primary" native-type="submit" class="!bg-dark-btn !border-none" @click="handleSubmit">
            Exchange
        </van-button>
    </DefaultLayout>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { showFailToast } from 'vant';

    import DefaultLayout from '@/layouts/DefaultLayout.vue';

    const option = ref([
        { name: 'BTC'},
        { name: 'ETH'},
        { name: 'USDT'}
    ]);
    const option2 = ref([
        { name: 'ETH'},
        { name: 'BTC'},
        { name: 'USDT'}
    ]);
    const from = ref('USDT');
    const to = ref('ETH');
    const amount = ref();

    const handleSelectedOption = (optionName: string) => {
        if(optionName === to.value) {
            showFailToast({ 
                message: 'Transfer Destination is same Currency',
                className: 'custom-toast',
            });
            console.log(from.value);
            return;
        } else {
            from.value = optionName;
        }
    };
    
    const handleSelectedOption2 = (optionName: string) => {
        if(optionName === from.value) {
            showFailToast({ 
                message: 'Transfer Destination is same Currency',
                className: 'custom-toast',
            });
            return;
        }
        to.value = optionName;
    };

    const handleSubmit = () => {
        console.log(from.value, to.value, amount.value);
    }

</script>

<style scoped>

</style>