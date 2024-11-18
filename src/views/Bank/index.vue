<template>
    <DefaultLayout>
        <img :src="BankLogo" alt="bank-card-logo" class="rounded-md">

        <div class="text-center my-4">
            <font-awesome-icon icon="file" class="mb-2 text-6xl"/>
            <p>No Binded Bank Card</p>
        </div>

        <van-button block type="primary" native-type="submit" class="!bg-dark-btn !border-none">
            Add Bank Card
        </van-button>
    </DefaultLayout>
</template>

<script setup lang="ts">
    import BankLogo from '@/assets/images/bankaccount-bg.png';

    import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>

<style scoped>

</style>