<template>
    <DefaultLayout>
        <div class="mx-auto p-4 md:w-1/2">
            <div class="mb-16">
                <img :src="logo" alt="logo" class="mx-auto w-20 rounded-xl">
            </div>
            <form action="">
                <div class="mb-4">
                    <van-field
                        v-model="user"
                        class="rounded-xl !bg-dark-tab-bg !text-dark-text"
                        placeholder="User Name"
                    >
                        <template #left-icon>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-dark-text">
                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                            </svg>
                        </template>
                        <template #right-icon>
                            <svg v-show="user !== ''" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-dark-text" @click="clear('user')">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </template>
                    </van-field>
                </div>
                <div class="mb-4">
                    <van-field
                        v-model="password"
                        class="rounded-xl !bg-dark-tab-bg !text-dark-text"
                        :type="type || 'password'"
                        placeholder="Password"
                    >
                        <template #left-icon>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-dark-text">
                                <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
                            </svg>

                        </template>
                        <template #right-icon>
                            <div class="flex gap-1 items-center">
                                <svg v-if="type === 'password'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-dark-text" @click="()=>{type = 'text'}">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-dark-text" @click="()=>{type = 'password'}">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>


                                <svg v-show="password !== ''" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-dark-text" @click="clear('password')">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                        </template>
                    </van-field>
                </div>
                <p class="text-xs text-dark-text-link text-end">
                    Forgot Password?
                </p>
                <div class="flex gap-2 items-center mt-2">
                    <van-checkbox-group v-model="checked" shape="square">
                        <van-checkbox name="Remember">Remember Password</van-checkbox>
                    </van-checkbox-group>
                </div>
                <van-button type="primary" class=" !bg-dark-btn w-full !border-none !mt-4 !text-slate-800" @click="handleLogin" :disabled="userStore.isLoading">
                    <div class="flex items-center gap-2">
                        Sign In
                        <svg v-if="userStore.isLoading" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 animate-spin">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </div>
                </van-button>
                <p class="text-dark-text-link text-center cursor-pointer underline">Create Account</p>
            </form>
        </div>
        <!-- <CustomerService /> -->
    </DefaultLayout>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import logo from '@/assets/images/logo.png';
    import { FieldType } from '@/types/general';
    import { useUserStore } from '@/store/user';
    import { showFailToast } from 'vant';
    import { useRouter } from 'vue-router';

    import DefaultLayout from '@/layouts/DefaultLayout.vue';
    // import CustomerService from '@/components/CustomerService/index.vue';

    const userStore = useUserStore();
    const router = useRouter();

    const user = ref('');
    const password = ref('');
    const checked = ref();
    const type = ref<FieldType | undefined>('password');

    const clear = (data: any) => {
        switch (data) {
            case 'user':
                user.value = '';
                break;
            case 'password':
                password.value = '';
                break;
            default:
                break;
        }
    }

    const handleLogin = async () => {
        const data = {
            email: user.value,
            password: password.value
        }
        if(user.value === '' || password.value === '') {
            showFailToast({
                message: 'Empty Required Fields',
                className: 'custom-toast',
            });
        } else {
            const response = await userStore.userLogin(data);

            if(response) {
                router.push({ name: 'home' });
            } else {
                showFailToast({
                    message: 'Credential not match',
                    className: 'custom-toast',
                });
            }
        }
    }
</script>

<style scoped>
</style>

