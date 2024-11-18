<template>
    <div class="bg-dark-bg text-dark-text md:w-10/12 mx-auto">
        <NavBar/>
        <div class="mx-auto max-w-screen-2xl min-h-svh text-dark-text px-2">
            <slot></slot>
        </div>
        <Menu/>
        <Drawer/>
        <Language />
        <Support />
    </div>
 </template>

<script setup lang="ts">
    import NavBar from '@/components/Common/NavBar/index.vue';
    import Menu from '@/components/Common/MobileNav/index.vue';
    import Drawer from '@/components/Common/Drawer/index.vue';
    import Language from '@/components/Common/Language/index.vue';
    import Support from '@/components/Common/Support/index.vue';
</script>