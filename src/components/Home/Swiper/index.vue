<template>
    <van-swipe class="absolute rounded-xl mb-4" :autoplay="2000">
        <van-swipe-item v-for="(item, index) in image" :key="index">
            <img class="w-full xl:w-6/12 xl:m-auto rounded-xl" :src="item" />
        </van-swipe-item>
    </van-swipe>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import swipe1 from '@/assets/images/home/swipe/content1.jpg';
    import swipe2 from '@/assets/images/home/swipe/content2.png';
    import swipe3 from '@/assets/images/home/swipe/content3.png';

    const image = ref([swipe1, swipe2, swipe3]);
    
</script>

<style scoped>

</style>