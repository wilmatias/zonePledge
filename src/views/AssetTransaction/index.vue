<template>
    <DefaultLayout>
        <component :is="currentComponent" />
    </DefaultLayout>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    import DefaultLayout from '@/layouts/DefaultLayout.vue';
    import FundsDetails from '@/components/History/FundsDetails/index.vue';
    import Recharge from '@/components/History/Recharge/index.vue';
    import Withdraw from '@/components/History/Withdraw/index.vue';

    const route = useRoute();

    const currentComponent = computed(() => {
        return route.params.type === '0' ? FundsDetails : route.params.type === '1' ? Recharge : Withdraw;
    });

</script>

<style scoped>

</style>