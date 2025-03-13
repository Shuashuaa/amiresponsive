<script setup lang="ts">
defineProps({
    link: String
});
</script>

<template>
    <iframe :src="link" class="hidden md:[857px] lg:block xl:block iframe-pc absolute z-10 right-[-330px] bottom-[100px]" frameborder="0" width="1600" height="900"></iframe>
    <img class="hidden md:[857px] lg:block xl:block absolute right-[45px] top-[30px] filter drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)]" src="../assets/imgs/desktop.png" width="860"/>
</template>