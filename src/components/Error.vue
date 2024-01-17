<template>
    <div>
        <v-app>
            <center>
                <v-container  
                fluid
                class="loginComponent"
                style="padding-top: 300px; position: relative;"
                >
                    <h1 class="gomenMobile d-block d-sm-none bold-pop">`Gomen'nasai'</h1>

                    <h1 class="gomenPC d-none d-sm-block bold-pop">`Gomen'nasai'</h1>

                    <h3 style="color: #58636d;"> 404 | Page Not Found </h3>
                    <p class="text-infos mb-6">The page you are looking for might have been removed, had it's name changed or is temporarily unavailable.</p> 
                    
                    <v-btn large class="text-infos med-pop" href="/amiresponsive" rounded outlined style="color: white; background-color: #343a40; text-transform: Capitalize">
                        <v-icon class="mr-1">mdi-arrow-left</v-icon>
                        Go to main page instead
                    </v-btn>
                </v-container>
            </center>
        </v-app>
    </div> 
</template>

<style scoped>

html { overflow: hidden !important; }

.gomenMobile{
    /* font-size: 45px; background-color: #453011;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: rgba(255,255,255,0.5) 0px 3px 3px; */
    font-size: 45px;
    background-color: #343a40;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: rgba(210, 210, 210, 0.5) 0px 3px 3px;
}
.gomenPC{
    /* font-size: 90px; background-color: #453011;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: rgba(255,255,255,0.5) 0px 3px 3px; */
    font-size: 90px;
    background-color: #343a40;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: rgba(210, 210, 210, 0.5) 0px 3px 3px;
}
#app{
   transition: 200s !important;
}
h1,h2,h3,h4,h5,h6,b{
    font-family: 'Montserrat', sans-serif !important;
}

</style>