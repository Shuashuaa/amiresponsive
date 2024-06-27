<template>
	
	<div class="App" id="gradient">
		<div class="header"> 
			<div class="flex flex-col w-4/12 gap-3">
				<h1 class="text-4xl font-bold">Am I Responsive?</h1>
				<p>is a tool to check the responsiveness of websites without using an actual gadgets. bu.. but not for prod!.</p>
				<input type="text">
				<p>http://sample.com or http://127.0.0.1:8000 or http://localhost:5173 or simply paste your development url for local development.</p>
				<button class="w-full h-10 text-center font-mono font-semibold gap-2 items-center border text-white bg-[#01b4d2] border-slate-300 rounded-lg px-4 py-1 hover:bg-blue-100 hover:shadow-lg transition delay-75 duration-300 ease-in-out">
					Go flex
				</button>
			</div>
		</div>
		
		<div class="components">
			<RouterView/>
		</div>

		<div class="footer">
			<div class="relative flex py-5 items-center">
				<div class="flex-grow border-t border-gray-300"></div>
					<span class="px-10">
						<button class="flex font-mono gap-2 items-center border border-slate-300 rounded-lg px-4 py-1 hover:bg-blue-100 hover:shadow-lg transition delay-75 duration-300 ease-in-out">
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
								<path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
							</svg>
							Source Code
						</button>
					</span>
				<div class="flex-grow border-t border-gray-300"></div>
			</div>

			logo |
			made with something and something with something and something :D
		</div>

	</div>	
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';

export default defineComponent({
	name: 'App',

	setup() {
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
		background: rgba(255, 255, 255, 0.09);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(8.1px);
		-webkit-backdrop-filter: blur(8.1px);
		border: 1px solid rgba(255, 255, 255, 0.3);
	}
	
	.header {
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		padding: 100px 20px 0px 0px;
	}

	.footer{
		text-align: center;
		padding: 50px;
	}
	
	.components {
		flex: 1; 
		/* background-color: #dfddc8; */
		/* padding: 20px; */
	}
</style>