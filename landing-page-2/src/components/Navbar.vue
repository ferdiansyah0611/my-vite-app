<script setup>
import { ref } from 'vue'
let menu = ref([
	{text: 'Get Started', link: '/'},
	{text: 'Wallet', link: '/'},
	{text: 'News', link: '/'},
	{text: 'Exchange', link: '/'},
	{text: 'Company', link: '/'},
	{text: 'Buy / Sell', link: '/', btn: true},
])
let status = ref(false)
let handleStatus = (e) => {
	e.preventDefault()
	status.value = status.value ? false: true
}
</script>
<template>
	<div v-if="status" class="opacity" @click="handleStatus"></div>
	<div :class="status ? 'menu-mobile open': 'menu-mobile'">
		<div>
			<div class="list">
				<router-link v-for="(d,i) in menu" :key="i" :to="d.link">{{d.text}}</router-link>
			</div>
		</div>
	</div>
	<div class="container">
		<div>
			<router-link class="title" to="/">MF <span class="text-primary">Crypto</span></router-link>
		</div>
		<div class="mobile">
			<a @click="handleStatus" href="/">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
				</svg>
			</a>
		</div>
		<div class="desktop">
			<router-link v-for="(d,i) in menu" :key="i" :class="d.btn === true ? 'btn': ''" :to="d.link">{{d.text}}</router-link>
		</div>
	</div>
</template>
<style scoped lang="sass">
@use "../App.sass" as theme

.opacity
	position: fixed
	left: 0
	top: 0
	background-color: black
	width: 100%
	height: 100vh
	opacity: 0.7
	z-index: 20
.open
	margin-right: 0 !important
.menu-mobile
	position: fixed
	right: 0
	top: 0
	height: 100vh
	z-index: 20
	background-color: black
	width: 200px
	display: flex
	margin-top: 5.5em
	margin-right: -200px
	transition: 0.4s all ease-in-out

	.list
		display: flex
		flex-wrap: wrap
		> *
			color: white
			width: 100%
			padding: 1em

.title
	font-weight: bold
.text-primary
	color: theme.$primary
.btn
	background-color: theme.$primary
.container
	display: flex
	background-color: theme.$secondary
	position: fixed
	left: 0
	top: 0
	width: -webkit-fill-available
	z-index: 20
	svg
		color: white
		width: 17px
	> div
		display: flex
		&:nth-child(1), &:nth-child(2)
			flex: 1
		&.desktop
			@media (max-width: theme.$query_md)
				display: none !important
		&.mobile
			justify-content: flex-end
			@media (min-width: theme.$query_md)
				display: none !important
	a
		color: white
		padding: 1.5em
		@media (max-width: theme.$query_md)
			padding: 2em
</style>