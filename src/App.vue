<template>
    <div class="area">
        <ul class="circles">
            <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
        </ul>
    </div>
    <div class="App" id="gradient">
        
        <div id="visual" class="flex justify-between items-center p-5">
            <img width="45" draggable="false" src="./assets/imgs/am i responsive.png" alt="">
            <div class="flex gap-4">
                <button class="cursor-default text-center p-2 pb-3">
                    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                </button>
                <!-- <button class="text-center p-2 pb-3">
                    <svg class="size-6 hover:fill-gray-800 hover:drop-shadow-lg transition delay-75 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                </button> -->

                <div class="h-[40px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>
                
                <a href="https://github.com/Shuashuaa/Amiresponsive" class="pt-1">
                    <button class="flex items-center justify-center font-mono text-gray-500 text-sm transition delay-75 duration-300 ease-in-out hover:border hover:rounded hover:border-gray-300 hover:shadow-md py-1 px-5 mr-5 gap-2">
                        <svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>

                        <p class="text-gray-500 text-md">{{ stargazersCount }}</p>
                        <!-- <svg class="w-5 h-5 strsoke-slate-500 fill-none hover:fill-gray-800 hover:shadow-lg transition delay-75 duration-300 ease-in-out" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg> -->
                    </button>
                </a>
                
            </div>
        </div>
        <div class="header"> 
            <div class="flex flex-col w-3/4 md:w-3/4 lg:w-4/12 xl:w-4/12 gap-3">
                <h1 class="justify-content center text-4xl font-black text-[#343a40]">Am I Responsive?</h1>
                <p>is a tool to check the responsiveness of websites without using an actual gadgets. bu.. but not for prod!.</p>
                <input v-model="searchedSource" type="text" class="hidden md:block lg:block xl:block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6" placeholder="ex. https://nuxt.com/?uwu">
                <p class="hidden md:block lg:block xl:block text-sm"><span class="underline cursor-pointer" @click="searchedSource = 'https://nuxt.com/?uwu', getAddress('https://nuxt.com/?uwu'), scrollToContent()">https://nuxt.com/?uwu</span> or just <span class="underline cursor-pointer" @click="searchedSource = 'nuxt.com/?uwu', getAddress('nuxt.com/?uwu'), scrollToContent()">nuxt.com/?uwu</span> and for local development, please refer to this link <a style="text-decoration: underline;" href="https://github.com/Shuashuaa/Amiresponsive/blob/main/README.md#Run-it!">README.MD</a>.</p>
                <button @click="scrollToContent(), getAddress(searchedSource)" class="hidden md:block lg:block xl:block w-full h-10 text-center font-mono font-semibold gap-2 items-center border text-white bg-[#01b4d2] border-slate-300 rounded-lg px-4 py-1 hover:bg-blue-100 hover:shadow-lg transition delay-75 duration-300 ease-in-out">
                    Go flex
                </button>
            </div>
        </div>
        
        <div id="content" class="components">
            <RouterView :link="defaultSource" />
        </div>

        <div class="footer hidden md:block lg:block xl:block">
            <div class="relative flex py-5 items-center">
                <!-- <div class="flex-grow border-t border-gray-300"></div> -->
                <div class="w-1/2 h-px"
                    style="background-image: linear-gradient(240deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.8) 40.83%, rgba(149, 131, 198, 0.8) 65.57%, rgba(149, 131, 198, 0) 107.92%);">
                </div>
                    <div class="flex w-[200px]"> 
                        <a href="https://github.com/Shuashuaa/Amiresponsive">
                           <button class="w-full flex font-mono text-gray-700 gap-2 items-center border border-slate-300 rounded-lg px-4 py-1 hover:bg-blue-100 hover:shadow-lg transition delay-75 duration-300 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
                                </svg>Source Code
                            </button> 
                        </a>
                        
                    </div>
                <!-- <div class="flex-grow border-t border-gray-300"></div> -->
                <div class="w-1/2 h-px"
                    style="background-image: linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.8) 40.83%, rgba(149, 131, 198, 0.8) 65.57%, rgba(149, 131, 198, 0) 107.92%);">
                </div>
            </div>
            <div id="footer" class="flex justify-between items-center">
                <img width="90" draggable="false" src="./assets/imgs/am i responsive.png" alt="">
                <div class="text-right">
                    <button class="font-mono text-gray-800 font-bold text-md transition delay-75 duration-300 ease-in-out hover:border hover:rounded hover:border-gray-300 hover:shadow-md p-2 ml-5">version 1.2.1.0</button>
                    <div class="flex items-center gap-2">
                        <p class="flex font-mono text-gray-700 text-sm gap-1.5">
                            <span class="font-mono">Made with</span>
                            <svg class="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            <span class="font-mono">and</span>
                            <svg class="size-5" xmlns="http://www.w3.org/2000/svg" stroke-width="0.1" stroke="gray" viewBox="0 0 24 24"><title>coffee-outline</title>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
                            </svg> 
                            <span class="font-mono">using Vuejs, TypeScript & TailwindCSS by</span>
                            <a class="font-mono text-[#01b4d2] hover:underline" href="https://shuashuaa.netlify.app/">
                               <b>Joshua Tania</b> 
                            </a> 
                        </p>
                    </div>
                    
                </div>
                
            </div>
            
        </div>

    </div>    
</template>

<script lang="ts">
import { onMounted, defineComponent, ref } from 'vue';
import type { Link } from './types/link';
import { stars } from './stargazers';

export default defineComponent({
    name: 'amiresponsive',
    setup() {
        const defaultSource = ref<Link>('https://shuashuaa.netlify.app/');
        const searchedSource = ref<Link>('');

        const stargazersCount = ref(0);

        onMounted(async () => {
            try {
                stargazersCount.value = await stars();
            } catch (error) {
                console.error('Error fetching stargazers count:', error);
            }

            setTimeout(() => {
                scrollToContentOnView();
            }, 500);
        });

        const scrollToContentOnView = () => {
            const sampleElement = document.getElementById("footer") as HTMLElement | null;
            const sampleElement1 = document.getElementById("visual") as HTMLElement | null;
                if (sampleElement && sampleElement1) {
                    sampleElement.scrollIntoView({ behavior: "smooth" });
                    setTimeout(() => {
                        sampleElement1.scrollIntoView({ behavior: "smooth" });
                    }, 1000);
                }
        }

		const scrollToContent = () => {
            if(searchedSource.value == ''){
                return
            }
            const sampleElement = document.getElementById("content") as HTMLElement;
            sampleElement.scrollIntoView({ behavior: "smooth" });
        }

        const getAddress = (searchedSource: Link) => {
            if (searchedSource && searchedSource !== 'https://amiresponsive.netlify.app' && searchedSource !== 'https://amiresponsive.netlify.app/') {
                if (!searchedSource.includes('https://') && !searchedSource.includes('http://')) {
                    defaultSource.value = 'https://' + searchedSource;
                } else {
                    defaultSource.value = searchedSource;
                }
            } else {
                alert("You can't flex an empty link :D")
            }
        }

        return { searchedSource, defaultSource, scrollToContent, scrollToContentOnView, getAddress, stargazersCount }
    }
});
</script>

<style>
    .App {
        display: flex; 
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        overflow: auto;
        background: rgba(216, 216, 216, 0.25);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
    }
    
    .header {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 20px 20px 0px 0px;
    }

    .footer{
        text-align: center;
        padding: 50px;
    }
    
    .components {
        flex: 1; 
    }
</style>