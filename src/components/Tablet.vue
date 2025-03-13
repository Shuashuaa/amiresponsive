<script setup lang="ts">
defineProps({
    link: String
});
</script>

<template>
    <iframe :src="link" class="hidden md:[857px] lg:block xl:block iframe-tablet absolute z-10 left-[-190px] bottom-[-205px]" frameborder="0" width="610" height="800"></iframe>
    <img class="hidden md:[857px] lg:block xl:block absolute left-[-60px] bottom-[20px] z-3 filter drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)]" src="../assets/imgs/tablet.png" width="350"/>
</template>