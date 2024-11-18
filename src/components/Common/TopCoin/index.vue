<template>
    <div class="flex gap-4 items-center overflow-auto mb-4">
        <div v-for="item in 10" class=" bg-dark-bg-sec rounded-xl p-2 w-6/12">
            <h1 class="font-semibold">BTC{{ item }}</h1>
            <div class="text-green-400">
                <p class="font-semibold">012554.0245</p>
                <p class="text-xs">1.024585%</p>
            </div>
            <p class="flex items-center gap-2 text-xs">
                Transaction
                <i class="fa fa-caret-right" aria-hidden="true"></i>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>