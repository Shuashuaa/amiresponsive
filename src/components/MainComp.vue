<template>
    
    <div style="display: flex; justify-content: center;">
        <div style="display: flex; justify-content: center; position: relative; width: 900px; height: 850px; ">

            <iframe :src="defaultSource" class="iframe-pc" frameborder="0" width="1600" height="900" style="position: absolute; z-index: 2; right: -305px; bottom: 100px; "></iframe>
            <iframe :src="defaultSource" class="iframe-mobile" frameborder="0" width="330" height="610" style="position: absolute; z-index: 4; left: 115px; bottom: -160px;"></iframe>
            <iframe :src="defaultSource" class="iframe-laptop" frameborder="0" width="1280" height="802" style="position: absolute; z-index: 3; right: -375px; bottom: -205px;"></iframe>
            <iframe :src="defaultSource" class="iframe-tablet" frameborder="0" width="610" height="800" style="position: absolute; z-index: 4; left: -190px; bottom: -205px;"></iframe>

            <img src="../assets/imgs/desktop.png" width="860" style="position: absolute; right: 70px; top: 30px; -webkit-filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));"/>
            <img src="../assets/imgs/phone.png" width="300" height="280" style="position: absolute; left: 130px; bottom: 5px; z-index: 2; -webkit-filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));"/>
            <img src="../assets/imgs/laptop.png" width="550" style="position: absolute; right: -10px; bottom: 20px; z-index: 2; -webkit-filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));"/>
            <img src="../assets/imgs/tablet.png" width="350" style="position: absolute; left: -60px; bottom: 20px; z-index: 3; -webkit-filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));"/>

        </div>
    </div>
    
</template>

<script lang="ts">

export default{
    setup() {
        // let defaultSource = 'https://nuxt.com/?uwu'
        let defaultSource = ''

        return { defaultSource }
    },
}
</script>