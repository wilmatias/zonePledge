<template>
    <DefaultLayout>
        <div class="relative w-full md:h-40">
            <img :src="SharedLogo" alt="bank-card-logo" class="rounded-md object-contain h-full w-full">
        </div>

        <div class="bg-dark-card-bg rounded-md p-2">
            <div class="mb-4">
                <QrcodeVue class="m-auto rounded-md" :value="link" :options="qrOptions" :type="'image/png'" :color="{ dark: '#000000ff', light: '#ffffffff' }"/>
            </div>
            <div class="mb-4">
                <p class="text-xs text-start mb-2">Invitation Code</p>
                <van-field
                    v-model="code"
                    class="border rounded-xl !bg-dark-tab-bg !text-dark-text"
                    disabled
                >
                    <template #right-icon>
                        <!-- <img src="/src/assets/images/copy.png" alt="copy" class="w-4" @click="copy()"> -->
                        <font-awesome-icon icon="copy" class="text-dark-text cursor-pointer" @click="copy(code)" />
                    </template>
                </van-field>
            </div>
            <div class="mb-4">
                <p class="text-xs text-start mb-2">My Invitation Link</p>
                <van-field
                    v-model="link"
                    class="border rounded-xl !bg-dark-tab-bg !text-dark-text"
                    disabled
                >
                    <template #right-icon>
                        <!-- <img src="/src/assets/images/copy.png" alt="copy" class="w-4" @click="copy()"> -->
                        <font-awesome-icon icon="copy" class="text-dark-text cursor-pointer" @click="copy(link)" />
                    </template>
                </van-field>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { copyToClipboard } from '@/helper/general';
    import { showSuccessToast } from 'vant';

    import SharedLogo from '@/assets/images/share-bg.png';
    import DefaultLayout from '@/layouts/DefaultLayout.vue';

    const code = ref('123456');
    const link = ref('https://www.google.com');
    const qrOptions = ref({
        size: 400,
        margin: 0,
    });

    const copy = (data: any) => {
        const status = copyToClipboard(data);
        if(status) {
            showSuccessToast({
                message: 'Copy Success',
            });
        }
    }
</script>

<style scoped>
    
    .custom-toast {
        background-color: #282828 !important;
        padding: 20px;
        color: white;
        text-align: center;
        border-radius: 10px;
    }

</style>