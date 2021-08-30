<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

</script>

<template>
	<Navbar/>
	<div id="router">
		<router-view></router-view>
	</div>
	<Footer/>
</template>

<style lang="sass">
#router
	margin-top: 8em
</style>
