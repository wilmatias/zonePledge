<template>
    <div class="grid gap-6 grid-cols-3 md:grid-cols-6 mb-4">
        <div v-for="(item, index) in menu" :key="index" class="text-center" @click="handleNav(index)">
            <img :src="item.icon" alt="menu_icon" class="w-8 mx-auto">
            <p class="text-xs md:text-sm">{{ item.title }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useSidebarStore } from '@/store/drawer';
    import { useRouter } from 'vue-router';

    import lang from '@/assets/images/home/menu/lang.png';
    import dep from '@/assets/images/home/menu/dep.png';
    import list from '@/assets/images/home/menu/list.png';
    import lock from '@/assets/images/home/menu/lock.png';
    import search from '@/assets/images/home/menu/search.png';

    const { toggleLanguage, toggleCS } = useSidebarStore();
    const router = useRouter();

    const menu = [
        {
            icon: lang,
            title: 'Language',
        },
        {
            icon: dep,
            title: 'Deposit',
        },
        {
            icon: list,
            title: 'New Currency',
        },
        {
            icon: lock,
            title: 'Lock Mining',
        },
        {
            icon: search,
            title: 'Customer Service',
        },
        {
            icon: search,
            title: 'Support Center',
        },
    ]

    const handleNav = (index: any) => {
       switch (index) {
            case 0:
                toggleLanguage();
                break;
            case 1:
                router.push({ name: 'deposit' })
                break;
            case 2:
                console.log('New Currency');
                break;
            case 3:
                router.push({ name: 'lock-mining' })
                break;
            case 4:
                toggleCS();
                break;
            case 5:
                console.log('Support Center');
                break;
            default:
                break;
        }
    }   

</script>

<style scoped>

</style>