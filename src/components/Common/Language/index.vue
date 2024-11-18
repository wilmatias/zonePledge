<template>
    <van-popup
        v-model:show="sidebarStore.isLanguage"
        position="bottom"
        :style="{ height: '100%' }"
        class="p-2 !bg-dark-bg"
        closeable
    >
        <ul>
            <li v-for="(item, index) of language" :key="index" class=" flex items-center gap-4 border-b px-4 py-2" @click="languageSelected(item)">
                <img :src="item.flag" class="w-4" alt="flag">
                <p>{{ item.name }}</p>
            </li>
        </ul>
    </van-popup>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useSidebarStore } from '@/store/drawer';
    import { useUserStore } from '@/store/user';
    import { useI18n } from 'vue-i18n';
    import en from '@/assets/images/flag/en.png';
    import zhTW from '@/assets/images/flag/zhTW.png';
    import ja from '@/assets/images/flag/ja.png';
    import vi from '@/assets/images/flag/vi.png';
    import ko from '@/assets/images/flag/ko.png';
    import zhCN from '@/assets/images/flag/zhCN.png';
    import th from '@/assets/images/flag/th.png';
    import de from '@/assets/images/flag/de.png';
    import fr from '@/assets/images/flag/fr.png';
    import es from '@/assets/images/flag/es.png';
    import ru from '@/assets/images/flag/ru.png';
    import pt from '@/assets/images/flag/pt.png';
    import be from '@/assets/images/flag/be.png';


    const userStore = useUserStore();
    const sidebarStore = useSidebarStore();
    const { locale } = useI18n();
    const selectedLanguage = ref({
        name: 'English',
        value: 'en'
    })
    
    const language = ref([
        {
            name: 'English',
            value: 'en',
            flag: en
        },
        {
            name: '中文繁體',
            value: 'zhTW',
            flag: zhTW
        },
        {
            name: '日本語',
            value: 'ja',
            flag: ja
        },
        {
            name: 'Việt Nam',
            value: 'vi',
            flag: vi
        },
        {
            name: '한국어',
            value: 'ko',
            flag: ko
        },
        {
            name: '中文简体',
            value: 'zhCN',
            flag: zhCN
        },
        {
            name: 'ไทย',
            value: 'th',
            flag: th
        },
        {
            name: 'Deutsche',
            value: 'de',
            flag: de
        },
        {
            name: 'français',
            value: 'fr',
            flag: fr
        },
        {
            name: 'Español',
            value: 'es',
            flag: es
        },
        {
            name: 'Pусский',
            value: 'ru',
            flag: ru
        },
        {
            name: 'Português',
            value: 'pt',
            flag: pt
        },
        {
            name: 'Беларуская',
            value: 'be',
            flag: be
        }
    ]);
    
    const languageSelected = (value: any) => {
        selectedLanguage.value = value;
        userStore.updataLocale(value.value)
        locale.value = userStore.viewLocale;
        sidebarStore.toggleLanguage();
    }
</script>

<style scoped>

</style>