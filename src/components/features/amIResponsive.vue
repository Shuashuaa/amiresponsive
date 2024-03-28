<template>
    <center>
        <!-- pc -->

        <v-card style="width: 100%; padding-bottom: 50px;" class="d-none d-md-block d-lg-block d-xl-block justify-center align-center" elevation="0">
            <v-spacer/>
            
            <v-card width="400" elevation="0" class="pt-16">
                <h1 class="title-infos">Am I Responsive?</h1>
                <p class="text-infos">is a tool for developers to check the responsiveness of their websites without using an actual gadgets. bu.. but not for prod!.</p>
                
                <v-text-field hide-details class="mt-10" v-model="searchedSource" placeholder="ex. https://shuashuaa.github.io"></v-text-field>
                <p class="text-infos mb-5 mt-2" style="font-size: 13px; color: gray;"><u>http://sample.com</u> or <u>http://127.0.0.1:8000</u> or <u>http://localhost:5173</u> or simply paste your development url for local development.</p>
                <v-btn @click="getAddress()" variant="block" block style="background-color: #01b4d2; color:#f5f5f5;" elevation="2">Go Flex!</v-btn>

            </v-card>

            <v-spacer/>

            <v-card class="justify-center d-flex" style="position: relative;" width="900" height="850" elevation="0" >

                <iframe :src="defaultSource" class="iframe-pc" frameborder="0" width="1600" height="900" style="position: absolute; z-index: 2; right: -305px; bottom: 98px; "></iframe>
                <iframe :src="defaultSource" class="iframe-mobile" frameborder="0" width="350" height="600" style="position: absolute; z-index: 4; left: 105px; bottom: -155px;"></iframe>
                <iframe :src="defaultSource" class="iframe-laptop" frameborder="0" width="1280" height="802" style="position: absolute; z-index: 3; right: -415px; bottom: -205px;"></iframe>
                <iframe :src="defaultSource" class="iframe-tablet" frameborder="0" width="610" height="800" style="position: absolute; z-index: 4; left: -190px; bottom: -205px;"></iframe>
                    
                <v-img src="/amIResponsive/desktop.png" lazy-src="/amIResponsive/desktop.png" width="860" style="position: absolute; right: 70px; top: 30px; -webkit-filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));"></v-img>
                <v-img src="/amIResponsive/phone.png" lazy-src="/amIResponsive/phone.png" width="300" height="280" style="position: absolute; left: 130px; bottom: 5px; z-index: 2; -webkit-filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));"></v-img>
                <v-img src="/amIResponsive/laptop.png" lazy-src="/amIResponsive/laptop.png" width="550" style="position: absolute; right: -50px; bottom: 20px; z-index: 2; -webkit-filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));"></v-img>
                <v-img src="/amIResponsive/tablet.png" lazy-src="/amIResponsive/tablet.png" width="350" style="position: absolute; left: -60px; bottom: 20px; z-index: 3; -webkit-filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));"></v-img>
                
            </v-card>

            <v-spacer/>    
                <v-divider/>

                <p class="text-infos mt-16 mb-8" style="font-size: 13px; color: gray;">@ 2023 | Created with 
                    <!-- passion -->
                    <v-icon>mdi-heart</v-icon> 
                    and 
                    <!-- joy -->
                    <v-icon>mdi-coffee</v-icon> 
                    by <br><b class="ghublink" style="color: #01b4d2;">
                   <a style="text-decoration: none; color: #01b4d2;" href="https://github.com/shuashuaa">Jovi Joshua Tania</a></b>.
                </p>

                <v-btn class="text-infos mb-8" href="https://github.com/Shuashuaa/Am-I-Responsive" size="small" style="background-color: #ffffff; color: black; border: 1px solid #6e7175; text-transform: capitalized; letter-spacing: 1px;" variant="outlined">
                    <v-icon class="mr-1">mdi-open-in-new</v-icon>
                    Source Code
                </v-btn>
        </v-card>

        <!-- mobile -->

        <v-card style="margin-top: 200px; width: 50%;" class="d-block d-sm-block d-md-none d-lg-none d-xl-none justify-center" elevation="0">
            <v-img src="/logooo.png" width="100"></v-img>
            <h3 class="text-infos mb-5">Oops.. Something went wrrrr.. <br>gomenaa.. uhmm. but it is not advisable to check responsiveness of a website with a tablet or smaller devices.</h3>
            <v-btn stacked class="text-infos" href="#" style="background-color: #ffffff; color: black; border: 1px solid #6e7175; text-transform: capitalized; letter-spacing: 1px;" variant="outlined">
                <v-icon class="mr-1">mdi-redo</v-icon>
                into the orasa instead
            </v-btn>

        </v-card>

    </center>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {

        const scWidth = ref(innerWidth);
        const height = ref(innerHeight);
        
        const defaultSource = ref('https://pinia.vuejs.org')
        const searchedSource = ref('')

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

        return { scWidth, height, getAddress, searchedSource, defaultSource } 
    }
}
</script>

<style> 
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