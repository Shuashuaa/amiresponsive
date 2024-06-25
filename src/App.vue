<template>
	<div class="App">
		<div class="header">  
			<h1 style="font-size: 24px;">Am I Responsive?</h1>
			<p>is a tool to check the responsiveness of websites without using an actual gadgets. bu.. but not for prod!.</p>
			<input type="text">
			<p>http://sample.com or http://127.0.0.1:8000 or http://localhost:5173 or simply paste your development url for local development.</p>
		</div>
		
		<div class="components">
			<RouterView/>
		</div>

		<div class="footer">
			<hr style="background-color: red;">
			tailwind divider (HR)
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';

export default defineComponent({
	name: 'App',
	
});
</script>

<style>
	.App {
		display: flex; 
		flex-direction: column;
		height: 100vh;
		width: 100vw;
		overflow: auto;
	}
	
	.header {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		text-align: center;
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