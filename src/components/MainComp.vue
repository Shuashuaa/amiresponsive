<template>
    <div style="display: flex; justify-content: center; background-color: blue;">
        <div style="display: flex; justify-content: center; position: relative; width: 900px; height: 850px; background-color: red;">

            <iframe :src="defaultSource" class="iframe-pc" frameborder="0" width="1600" height="900" style="position: absolute; z-index: 2; right: -305px; bottom: 100px; "></iframe>
            <iframe :src="defaultSource" class="iframe-mobile" frameborder="0" width="330" height="610" style="position: absolute; z-index: 4; left: 115px; bottom: -160px;"></iframe>
            <iframe :src="defaultSource" class="iframe-laptop" frameborder="0" width="1280" height="802" style="position: absolute; z-index: 3; right: -375px; bottom: -205px;"></iframe>
            <iframe :src="defaultSource" class="iframe-tablet" frameborder="0" width="610" height="800" style="position: absolute; z-index: 4; left: -190px; bottom: -205px;"></iframe>

        </div>
    </div>
    
</template>

<script lang="ts">

export default{
    setup() {
        let defaultSource = 'https://pinia.vuejs.org/?uwu'

        return { defaultSource }
    },
}
</script>