<template>
    <div class="justify-center md:flex lg:flex xl:flex">
        <div class="hidden md:block lg:block xl:block" style="position: relative; width: 900px; height: 850px; ">
            <iframe :src="link" class="hidden md:block lg:block xl:block iframe-pc" frameborder="0" width="1600" height="900" style="position: absolute; z-index: 2; right: -330px; bottom: 100px; "></iframe>
            <iframe :src="link" class="hidden md:block lg:block xl:block iframe-mobile" frameborder="0" width="330" height="610" style="position: absolute; z-index: 4; left: 115px; bottom: -160px;"></iframe>
            <iframe :src="link" class="hidden md:block lg:block xl:block iframe-laptop" frameborder="0" width="1280" height="802" style="position: absolute; z-index: 3; right: -375px; bottom: -205px;"></iframe>
            <iframe :src="link" class="hidden md:block lg:block xl:block iframe-tablet" frameborder="0" width="610" height="800" style="position: absolute; z-index: 4; left: -190px; bottom: -205px;"></iframe>

            <img class="hidden md:block lg:block xl:block" src="../assets/imgs/desktop.png" width="860" style="position: absolute; right:45px; top: 30px; -webkit-filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));"/>
            <img class="hidden md:block lg:block xl:block" src="../assets/imgs/phone.png" width="300" height="280" style="position: absolute; left: 130px; bottom: 5px; z-index: 2; -webkit-filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));"/>
            <img class="hidden md:block lg:block xl:block" src="../assets/imgs/laptop.png" width="550" style="position: absolute; right: -10px; bottom: 20px; z-index: 2; -webkit-filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));"/>
            <img class="hidden md:block lg:block xl:block" src="../assets/imgs/tablet.png" width="350" style="position: absolute; left: -60px; bottom: 20px; z-index: 3; -webkit-filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));"/>
        </div>

        <div class="mt-10 bg-red-300 p-20 font-bold block md:hidden lg:hidden xl:hidden">
            <p class="pb-5">Sorry, but it is not advisable to check responsiveness of a website using smaller devices. Thank you.
            Try to access the app using tablet, laptop or pc to continue.</p>

            <button class="py-5 border p-2 rounded-md bg-red-500 w-full">I Understand</button>
        </div>
    </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';
import type { Link } from '@/types/link';

export default {
    props: {
        link: {
            required: true,
            type: String as PropType<Link>
        }
    },
    setup(props) {
        const getLink = computed(() => {
            return props.link;
        });

        return { getLink }
    }
}
</script>