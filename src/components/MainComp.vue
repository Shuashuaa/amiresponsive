<template>
    <div class="justify-center md:flex lg:flex xl:flex">
        <div class="hidden md:[857px] lg:block xl:block relative w-[900px] h-[850px]">
            <Desktop :link="link"/>
            <Laptop :link="link"/>
            <Tablet :link="link"/>
            <Mobile :link="link"/>
        </div>

        <div class="block md:[857px] lg:hidden xl:hidden pt-10">
            <div class="mt-5 bg-red-100 p-24 font-bold">
                <p class="pb-5 text-lg">Sorry, but it is not advisable to check a website's responsiveness using smaller devices.</p>
                <p class="pb-5 text-lg">Please try to access the app using larger devices like a tablet, laptop, or PC to continue.</p>
                <p class="pb-5 text-lg">Thank you.</p>
                
                <!-- <a href="https://shuashuaa.netlify.app/"><button class="py-5 border p-2 rounded-md bg-red-400 w-full">I Understand</button></a> -->
            </div>
            
        </div>
    </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';
import type { Link } from '@/types/link';
import Desktop from './Desktop.vue';
import Laptop from './Laptop.vue';
import Tablet from './Tablet.vue';
import Mobile from './Mobile.vue';

export default {
    components: {
        Desktop,
        Laptop,
        Tablet,
        Mobile
    },
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
