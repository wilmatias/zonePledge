<template>
    <van-popup
        v-model:show="sidebarStore.isCS"
        position="bottom"
        :style="{ height: '100%' }"
    >
        <div class="relative w-full h-full">
            <!-- <button class="absolute top-0 px-4 py-2 bg-blue-500 shadow-md rounded-md" @click="handleShow">test</button> -->
            <div class="!absolute top-2 left-1 bg-[#007bff] w-20">
                <van-icon name="arrow-left" class=" text-white" size="30" @click="handleShow"/>
            </div>
            <iframe src="https://www.lycinelive.com/Chat/Chat?lang=en&userID=0x4067c60de364600051a971868fe82920e480fde3&userName=1381" frameborder="0" class="w-full h-full"></iframe>
        </div>
    </van-popup>
</template>

<script setup lang="ts">
    import { useSidebarStore } from '@/store/drawer';
    // import { ref, computed } from 'vue';
    // import { useUserStore } from '@/store/user';
    // import { useCommonStore } from '@/store/common';

    // const userStore = useUserStore();
    // const commonStore = useCommonStore();
    const sidebarStore = useSidebarStore();
    // const userAddress = ref(userStore.viewAddress);
    // const userID = ref(userStore.viewUserId);
    // const locale = ref(userStore.locale);

    const handleShow = () => {
        sidebarStore.toggleCS();
    }

    // const serviceUrl = computed(() => {
    //     const getUrl = commonStore.systemParam[3].Value;
    //     const baseUrl = getUrl.split('?')[0];
    //     return `${baseUrl}?lang=${locale.value}&userID=${userAddress.value}&userName=${userID.value}`
    // });
</script>