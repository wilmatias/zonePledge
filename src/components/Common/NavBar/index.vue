<template>
    <div v-if="userStore.isLogin" class="">
        <div class="flex items-center justify-between h-14 px-2">
            <img :src="User" alt="UserIcon" class="w-8 cursor-pointer" @click="toggleSidebar()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { useSidebarStore } from '@/store/drawer';
    import { useUserStore } from '@/store/user';
    // import { useRouter } from 'vue-router';
    // import { useI18n } from 'vue-i18n';

    import User from '@/assets/images/nav/user.png';

    // const { t } = useI18n();
    const { toggleSidebar } = useSidebarStore()
    const userStore = useUserStore();
    // const router = useRouter();
    // const navTitle = ref();

    onMounted(() => {
        // if(router.currentRoute.value.meta.title){
        //     navTitle.value = router.currentRoute.value.meta.title;
        //     navTitle.value = t(navTitle.value);
        // } else {
        //     navTitle.value = '';
        // }
    });

</script>

<style scoped>

</style>