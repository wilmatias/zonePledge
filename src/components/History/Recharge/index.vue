<template>
    <p>Recharge</p>
    <DataTable :columns="columns" :data="sortedHistory"/>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import DataTable from '@/components/Common/DataTable/index.vue';
    const columns = ref([
        { label: 'Date', field: 'time_buy', type: 'date' },
        { label: 'Currencies', field: 'symbol' },
        { label: 'Price', field: 'price_buy', type: 'currency' },
        { label: 'Status', field: 'status', type: 'status' },
    ]);

    const sortedHistory = [
        {
            time_buy: '2024-08-01T12:34:56Z',
            symbol: 'BTC/USD',
            price_buy: 30000.45,
            status: 1, // Complete
        },
        {
            time_buy: '2024-08-02T14:20:30Z',
            symbol: 'ETH/USD',
            price_buy: 1800.75,
            status: 0, // In Progress
        },
        {
            time_buy: '2024-08-03T09:15:45Z',
            symbol: 'XRP/USD',
            price_buy: 0.65,
            status: 1, // Complete
        },
        {
            time_buy: '2024-08-04T16:45:12Z',
            symbol: 'LTC/USD',
            price_buy: 120.10,
            status: 0, // In Progress
        },
        {
            time_buy: '2024-08-05T11:50:00Z',
            symbol: 'ADA/USD',
            price_buy: 1.25,
            status: 1, // Complete
        },
    ];
</script>

<style scoped>

</style>