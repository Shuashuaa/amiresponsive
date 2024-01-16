<template>
    <AmIResponsive />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import AmIResponsive from '../components/features/amIResponsive.vue';

export default defineComponent({
    components: {
        AmIResponsive,
    },
});
</script>

<style>
    html {
        scroll-behavior: smooth;
    }
</style>