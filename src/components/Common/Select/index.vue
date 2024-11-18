<template>
    <div class="relative inline-block w-full">
        <div @click="toggleDropdown" class="w-full p-2 rounded-xl border bg-dark-tab-bg dark:bg-dark-bg-sec cursor-pointer flex justify-between items-center">
            <div class="flex items-center">
                <img v-if="selectedOptionImage" :src="selectedOptionImage" alt="" class="w-6 h-6 mr-2">
                <span>{{ selectedOptionName ? selectedOptionName : 'Select an option' }}</span>
            </div>
            <van-icon name="arrow-down" :class="(isOpen ? 'open' : 'down')"/>
        </div>
        <div v-if="isOpen" class="absolute w-full mt-1 bg-dark-tab-bg dark:bg-dark-bg-sec border rounded-xl shadow-lg z-10">
            <div v-for="(option, index) in options" :key="index" @click="selectOption(option)" class="p-2 flex items-center cursor-pointer hover:bg-dark-tab-active" :class="{ 'rounded-t-xl': index === 0, 'rounded-b-xl': index === options.length - 1 }">
                <img v-if="option.image" :src="option.image" alt="" class="w-6 h-6 mr-2">
                <span>{{ option.name }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, defineProps, defineEmits, onMounted } from 'vue';

    const props = defineProps(['options']);

    const emit = defineEmits(['selectedOption']);

    const selectedOptionName = ref('');
    const selectedOptionImage = ref('');
    const isOpen = ref(false);

    const toggleDropdown = () => {
        isOpen.value = !isOpen.value;
    };

    const selectOption = (option: any) => {
        selectedOptionName.value = option.name;
        selectedOptionImage.value = option.image;
        isOpen.value = false;
        emit('selectedOption', selectedOptionName.value);
    };

    onMounted(() => {
        if (props.options.length > 0) {
            selectOption(props.options[0]);
        }
    });
</script>

<style scoped>
    .down {
        transform: rotate(0deg);
        transition: transform 100ms linear !important;
    }

    .open {
        transform: rotate(180deg);
        transition: transform 100ms linear !important;
    }
</style>
