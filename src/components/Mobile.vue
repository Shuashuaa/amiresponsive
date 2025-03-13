<script setup lang="ts">
defineProps({
    link: String
});
</script>

<template>
    <iframe :src="link" class="hidden md:[857px] lg:block xl:block iframe-mobile absolute z-10 left-[115px] bottom-[-160px]" frameborder="0" width="330" height="610"></iframe>
    <img class="hidden md:[857px] lg:block xl:block absolute left-[130px] bottom-[5px] z-2 filter drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)]" src="../assets/imgs/phone.png" width="300" height="280"/>
</template>