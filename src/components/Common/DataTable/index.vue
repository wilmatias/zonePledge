<template>
    <div class="bg-dark-card-bg text-dark-text  p-2 rounded-xl min-h-40">
        <div v-if="data.length > 0" class="overflow-auto mb-4">
            <table class="w-full text-center">
                <thead>
                    <tr class="bg-dark-tab-bg">
                        <th v-for="(column, index) in props.columns" :key="index" class="px-4 py-2 text-xs">
                            {{ column.label }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in props.data" :key="index">
                        <td v-for="(column, colIndex) in columns" :key="colIndex" class="px-4 py-2 text-xs text-nowrap">
                            {{ formatData(item[column.field], column.type) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {defineProps } from 'vue';

    const props = defineProps(['data', 'columns']);

    // const emits = defineEmits(['checkDetails']);

    // const checkDetails = (item:) => {
    //     emits('checkDetails', item);
    // };

    const formatData = (value: any, type: any) => {
        switch (type) {
            case 'date':
                return new Date(value).toLocaleDateString();
                break;
            case 'currency':
                return value.toFixed(2);
                break;
            case 'status':
                return value === 1 ? 'Complete' : 'In Progress';
                break;
            default:
                return value;
                break;
        }
    };
</script>

<style scoped>

</style>
