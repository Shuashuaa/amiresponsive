<template>
    <div class="justify-center md:flex lg:flex xl:flex">
        <div class="hidden md:[857px] lg:block xl:block relative w-[900px] h-[850px]">
            <iframe :src="link" class="hidden md:[857px] lg:block xl:block iframe-pc absolute z-10 right-[-330px] bottom-[100px]" frameborder="0" width="1600" height="900"></iframe>
            <iframe :src="link" class="hidden md:[857px] lg:block xl:block iframe-mobile absolute z-10 left-[115px] bottom-[-160px]" frameborder="0" width="330" height="610"></iframe>
            <iframe :src="link" class="hidden md:[857px] lg:block xl:block iframe-laptop absolute z-10 right-[-375px] bottom-[-205px]" frameborder="0" width="1280" height="802"></iframe>
            <iframe :src="link" class="hidden md:[857px] lg:block xl:block iframe-tablet absolute z-10 left-[-190px] bottom-[-205px]" frameborder="0" width="610" height="800"></iframe>

            <img class="hidden md:[857px] lg:block xl:block absolute right-[45px] top-[30px] filter drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)]" src="../assets/imgs/desktop.png" width="860"/>
            <img class="hidden md:[857px] lg:block xl:block absolute left-[130px] bottom-[5px] z-2 filter drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)]" src="../assets/imgs/phone.png" width="300" height="280"/>
            <img class="hidden md:[857px] lg:block xl:block absolute right-[-10px] bottom-[20px] z-2 filter drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)]" src="../assets/imgs/laptop.png" width="550"/>
            <img class="hidden md:[857px] lg:block xl:block absolute left-[-60px] bottom-[20px] z-3 filter drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)]" src="../assets/imgs/tablet.png" width="350"/>
        </div>

        <div class="block md:[857px] lg:hidden xl:hidden pt-10">
            <div class="mt-5 bg-red-100 p-24 font-bold">
                <p class="pb-5 text-lg">Sorry, but it is not advisable to check a website's responsiveness using smaller devices. Thank you.</p>
                <p class="pb-5 text-lg">Please try to access the app using large devices like large tablet, laptop, or PC to continue.</p>
                
                <a href="https://shuashuaa.netlify.app/"><button class="py-5 border p-2 rounded-md bg-red-400 w-full">I Understand</button></a>
            </div>
            
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
