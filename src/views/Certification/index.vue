<template>
    <DefaultLayout>
        <component :is="currentComponent" />
    </DefaultLayout>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    import DefaultLayout from '@/layouts/DefaultLayout.vue';
    import Certification from '@/components/Forms/Certification/index.vue';
    import AdvanceCertification from '@/components/Forms/AdvanceCertification/index.vue';

    const route = useRoute();

    const currentComponent = computed(() => {
        return route.params.type !== '0' ? AdvanceCertification : Certification;
    });

</script>

<style scoped>

</style>