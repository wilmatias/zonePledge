<template>
    <p>Funds</p>
    <div v-for="item in 4" :key="item" class="bg-dark-card-bg rounded-md p-2 flex items-center justify-between mb-4 text-sm">
        <div>
            <!-- change transaction type later -->
            <p>Type of Transaction</p> 
            <p>Total Funds Before Change</p>
            <p>Total Funds After Change</p>
            <p>Currency</p>
        </div>
        <div>
            <!-- add class that text red if amount is negative -->
            <p class="text-green-400 font-semibold text-xl">1000</p> 
            <p>0.0000</p>
            <p>1000</p>
            <p>USDT</p>

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>