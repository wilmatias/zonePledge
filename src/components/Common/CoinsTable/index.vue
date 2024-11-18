<template>
    <div class="text-center">
        <table class="w-full">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Newest</th>
                    <th>Up/Down</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in 20">
                    <td class="py-2">
                        <div class="flex gap-1 items-center">
                            <img src="/src/assets/images/logo.png" alt="currencies" class="rounded-full w-8">
                            <div class="text-start">
                                <p class="font-semibold">BTC{{ item }}</p>
                                <p class="text-xs">X:BTCUSD</p>
                            </div>
                        </div>
                    </td>
                    <td class="py-2">157.2589</td>
                    <td class="py-2">
                        <p class="bg-green-400 rounded">
                            +10%
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>