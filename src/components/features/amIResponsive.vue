<template>
    <center>
        <!-- pc -->

        <v-card id="title" style="width: 100%; padding-bottom: 50px;" class="d-none d-md-block d-lg-block d-xl-block justify-center align-center" elevation="0">
            <v-spacer/>
            
            <v-card width="400" elevation="0" class="pt-16">
                <h1 class="title-infos">Am I Responsive?</h1>
                <p class="text-infos">is a tool to check the responsiveness of websites without using an actual gadgets. bu.. but not for prod!.</p>
                
                <v-text-field hide-details class="mt-10" v-model="searchedSource" placeholder="ex. https://pinia.vuejs.org"></v-text-field>
                <p class="text-infos mb-5 mt-2" style="font-size: 13px; color: gray;"><u>http://sample.com</u> or <u>http://127.0.0.1:8000</u> or <u>http://localhost:5173</u> or simply paste your development url for local development.</p>
                <v-btn @click="getAddress(), scrollToContent()" variant="block" block style="background-color: #01b4d2; color:#f5f5f5;" elevation="2">Go Flex!</v-btn>

            </v-card>

            <v-spacer/>

            <v-card id="visual" class="justify-center d-flex" style="position: relative;" width="900" height="850" elevation="0" >

                <iframe :src="defaultSource" class="iframe-pc" frameborder="0" width="1600" height="900" style="position: absolute; z-index: 2; right: -305px; bottom: 100px; "></iframe>
                <iframe :src="defaultSource" class="iframe-mobile" frameborder="0" width="330" height="610" style="position: absolute; z-index: 4; left: 115px; bottom: -160px;"></iframe>
                <iframe :src="defaultSource" class="iframe-laptop" frameborder="0" width="1280" height="802" style="position: absolute; z-index: 3; right: -375px; bottom: -205px;"></iframe>
                <iframe :src="defaultSource" class="iframe-tablet" frameborder="0" width="610" height="800" style="position: absolute; z-index: 4; left: -190px; bottom: -205px;"></iframe>
                    
                <v-img src="/amIResponsive/desktop.png" width="860" style="position: absolute; right: 70px; top: 30px; -webkit-filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));"></v-img>
                <v-img src="/amIResponsive/phone.png" width="300" height="280" style="position: absolute; left: 130px; bottom: 5px; z-index: 2; -webkit-filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));"></v-img>
                <v-img src="/amIResponsive/laptop.png" width="550" style="position: absolute; right: -10px; bottom: 20px; z-index: 2; -webkit-filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));"></v-img>
                <v-img src="/amIResponsive/tablet.png" width="350" style="position: absolute; left: -60px; bottom: 20px; z-index: 3; -webkit-filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));"></v-img>
                
            </v-card>

            <v-spacer/>    
                <v-divider/>

                <p id="footer" class="text-infos mt-16 mb-8" style="font-size: 13px; color: gray;">@ 2023 | Created with 
                    <!-- passion -->
                    <v-icon>mdi-heart</v-icon> 
                    and 
                    <!-- joy -->
                    <v-icon>mdi-coffee</v-icon> 
                    by <br><b class="ghublink" style="color: #01b4d2;">
                   <a style="text-decoration: none; color: #01b4d2;" href="https://github.com/shuashuaa">Jovi Joshua Tania</a></b>.
                </p>

                <v-btn disabled class="text-infos mb-8" href="https://github.com/Shuashuaa/amiresponsive" size="small" style="background-color: #ffffff; color: black; border: 1px solid #6e7175; text-transform: capitalized; letter-spacing: 1px;" variant="outlined">
                    <v-icon class="mr-1">mdi-open-in-new</v-icon>
                    Source Code
                </v-btn>
        </v-card>

        <!-- mobile -->

        <v-card style="margin-top: 200px; width: 50%;" class="d-block d-sm-block d-md-none d-lg-none d-xl-none justify-center" elevation="0">
            <v-img src="/logooo.png" width="100"></v-img>
            <h3 class="text-infos mb-5">Oops.. Something went wrrrr.. <br>gomenaa.. uhmm. but it is not advisable to check responsiveness of a website with a tablet or smaller devices.</h3>
            <v-btn stacked class="text-infos" href="https://shuashuaa.netlify.app" style="background-color: #ffffff; color: black; border: 1px solid #6e7175; text-transform: capitalized; letter-spacing: 1px;" variant="outlined">
                <v-icon class="mr-1">mdi-redo</v-icon>
                into the orasa instead
            </v-btn>

        </v-card>

    </center>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
    setup() {

        const scWidth = ref(innerWidth);
        const height = ref(innerHeight);
        
        const defaultSource = ref('https://shuashuaa.netlify.app')
        const searchedSource = ref('')

        const scrollToSample = () => {
            const sampleElement = document.getElementById("footer");
                if (sampleElement) {
                    sampleElement.scrollIntoView({ behavior: "smooth" });
                    setTimeout(() => {
                        let sampleElement1 = document.getElementById("title");
                        sampleElement1.scrollIntoView({ behavior: "smooth" });
                    }, 1000);
                }
        }

        const scrollToContent = () => {
            if(searchedSource.value == ''){
                return
            }
            const sampleElement = document.getElementById("visual");
            sampleElement.scrollIntoView({ behavior: "smooth" });
        }

        onMounted(() => {
            setTimeout(() => {
                scrollToSample();
            }, 500);
        });

        const getAddress = async() => {
            if(searchedSource.value != '' && searchedSource.value != 'https://amiresponsive.netlify.app' && searchedSource.value != 'https://amiresponsive.netlify.app/'){
                if(!searchedSource.value.includes('https://') && !searchedSource.value.includes('http://')){
                    defaultSource.value = 'https://' + searchedSource.value;
                }else if(searchedSource.value.includes('http://')){
                    defaultSource.value = searchedSource.value;
                }else{
                    defaultSource.value = searchedSource.value;
                }
            }else{
                alert("You can't flex an empty link :D")
            }
        }

        return { scrollToContent, scrollToSample, scWidth, height, getAddress, searchedSource, defaultSource } 
    }
}
</script>

<style> 
html {
    scroll-behavior: smooth;
}
.iframe-pc{
    transform: scale(0.4150);
    -webkit-transform: scale(0.4150);
    -o-transform: scale(0.4150);
    -ms-transform: scale(0.4150);
    -moz-transform: scale(0.4150);
}
.iframe-laptop{
    transform: scale(0.277);
    -webkit-transform: scale(0.320);
    -o-transform: scale(0.320);
    -ms-transform: scale(0.320);
    -moz-transform: scale(0.320);
}
.iframe-tablet, .iframe-mobile{
    transform: scale(0.4181);
    -webkit-transform: scale(0.3181);
    -o-transform: scale(0.3181);
    -ms-transform: scale(0.3181);
    -moz-transform: scale(0.3181);
}
.ghublink:hover{
    text-decoration: underline;
}
</style>