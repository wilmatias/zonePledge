<template>
    <DefaultLayout>
        <div class="mb-4">
            <p class="text-xs text-start mb-2">Currency:</p>
            <Select :options="option" @selectedOption="handleSelectedOption"  />
        </div>
        <QrcodeVue class="m-auto rounded-md" :value="address" :options="qrOptions" :type="'image/png'" :color="{ dark: '#000000ff', light: '#ffffffff' }"/>
        <div class="mb-4">
            <p class="text-xs text-start mb-2">Wallet Address</p>
            <van-field
                v-model="address"
                class="border rounded-xl !bg-dark-tab-bg !text-dark-text"
                disabled
            >
                <template #right-icon>
                    <!-- <img src="/src/assets/images/copy.png" alt="copy" class="w-4" @click="copy()"> -->
                    <font-awesome-icon icon="copy" class="text-dark-text cursor-pointer" @click="copy(address)" />
                </template>
            </van-field>
        </div>
        <div class="mb-4">
            <p class="text-xs text-start mb-2">Amount</p>
            <van-field
                v-model="amount"
                placeholder="Enter Amount"
                class="border rounded-xl !bg-dark-tab-bg !text-dark-text"
            />
        </div>
        <div class="mb-4">
            <p class="text-xs text-start mb-2">Reference</p>
            <van-uploader v-model="reference" :max-count="1" class="w-full" />
        </div>
        
        <van-button block type="primary" native-type="submit" class="!bg-dark-btn !border-none" @click="handleSubmit">
            Confirm
        </van-button>
    </DefaultLayout>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { copyToClipboard } from '@/helper/general';
    import { showSuccessToast } from 'vant';

    import DefaultLayout from '@/layouts/DefaultLayout.vue';
    import Select from '@/components/Common/Select/index.vue';

    const currency = ref('BTC');
    const address = ref('0xasdas234234234234');
    const amount = ref();
    const reference = ref();
    const option = ref([
        { name: 'BTC'},
        { name: 'ETH'},
        { name: 'USDT (ERC-20)'},
        { name: 'USDT (TRC-20)'}
    ]);
    const qrOptions = ref({
        size: 400,
        margin: 0,
    });

    const handleSelectedOption = (optionName: string) => {
        currency.value = optionName;
    };

    const copy = (data: any) => {
        const status = copyToClipboard(data);
        if(status) {
            showSuccessToast({
                message: 'Copy Success',
            });
        }
    }

    const handleSubmit = () => {
        console.log(currency.value, address.value, amount.value, reference.value);
    }
</script>

<style scoped>

</style>