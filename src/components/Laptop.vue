<script setup lang="ts">
defineProps({
    link: String
});
</script>

<template>
    <iframe :src="link" class="hidden md:[857px] lg:block xl:block iframe-laptop absolute z-10 right-[-375px] bottom-[-205px]" frameborder="0" width="1280" height="802"></iframe>
    <img class="hidden md:[857px] lg:block xl:block absolute right-[-10px] bottom-[20px] z-2 filter drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)]" src="../assets/imgs/laptop.png" width="550"/>
</template>