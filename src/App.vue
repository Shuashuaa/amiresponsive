<template>
	<v-app id="inspire">
        <v-main>
            <router-view/>
        </v-main>

	</v-app>
    
</template>

<style>
	#app{
        background-color: #f8f8f8;
    }
    .title{
        color: #343a40;
        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
        font-size: 20px;
    }
    .text{
        color: #343a40;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 15px;
    }
    .nav-items:hover{
        text-decoration: underline;
    }

    .v-application .ma-2{
        margin: 0 !important;
    }
    .v-navigation-drawer{
        /* top: 48px !important; */
        height: 100% !important;
    }
    .v-toolbar{
        top: 0 !important;
    }
    /* padding && margin errors are here */
    .v-main{ 
        padding: 0px !important;
    }

    .mobile-drawer{
        width: 100% !important;
    }
    .mobile-items{
        padding-top: 20px; 
        padding-bottom: 20px;
        margin: 0 !important;
        color: black;
    }
    .mobile-items:hover{
        background-color: #afe2ff;
    }
    .contact{
        background-color: black;
        color: white;
    }

    /* @media screen 
    and (min-device-width: 1200px) 
    and (max-device-width: 1600px) {  */
        /*  */
        
    /* } */

    /* @media (-webkit-device-pixel-ratio: 1.25) {
        
    } */
</style>