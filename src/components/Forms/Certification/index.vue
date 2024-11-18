<template>
    <div class="mb-4">
        <p class="text-xs text-start mb-2">ID Type</p>
        <Select :options="option" @selectedOption="handleSelectedOption"  />
    </div>
    <div class="mb-4">
        <p class="text-xs text-start mb-2">ID Full Name</p>
        <van-field
            v-model="name"
            placeholder="Please put your name in your ID"
            class="border rounded-xl !bg-dark-tab-bg !text-dark-text"
        />
    </div>
    <div class="mb-4">
        <p class="text-xs text-start mb-2">ID Number</p>
        <van-field
            v-model="number"
            placeholder="ID Number"
            class="border rounded-xl !bg-dark-tab-bg !text-dark-text"
        />
    </div>
    <div class="mb-4">
        <p class="font-semibold">Certification Rule</p>
        <ul class="list-disc list-inside ml-2">
            <li v-for="(item, index) in rule" :key="index" class="text-xs">{{ item }}</li>
        </ul>
    </div>
    <van-button block type="primary" native-type="submit" class="!bg-dark-btn !border-none" @click="handleSubmit">
        Submit
    </van-button>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import Select from '@/components/Common/Select/index.vue';

    const option = ref([
        { name: 'ID Card'},
        { name: 'Driver`s License'},
        { name: 'Passport'}
    ]);

    const rule = ref([
        'New users must pass the real-name authentication review after registration.',
        'Once the name and ID number are authenticated, they will not be modified. Please contact customer service for modification.',
        'The real name must be consistent with the account name of the withdrawal bank card.'
    ]);

    const name = ref();
    const number = ref();
    const type = ref('ID Card');

    const handleSelectedOption = (optionName: string) => {
        type.value = optionName;
    };

    const handleSubmit = () => {
        console.log(type.value, name.value, number.value);
    };
</script>

<style scoped>

</style>