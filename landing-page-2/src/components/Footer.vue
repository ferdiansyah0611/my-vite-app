<script setup>
import { ref, onMounted } from 'vue'

const country = ref([])
const company = ref([
	'About', 'Advertise', 'Careers', 'Blog', 'Contacts', 'Partners', 'Support', 'Legal', 'Sitemap'
])
const educate = ref([
	'Bitcoin', 'Get Started', 'Buy Bitcoin', 'Trade Locally', 'Bitcoin Map'
])
const product = ref([
	'Get Started', 'Wallet', 'Developers', 'Exchange'
])
const follow = ref([
	'News', 'Telegram', 'Youtube', 'Instagram', 'Facebook', 'Twitter'
])
onMounted(() => {
	fetch("https://restcountries.eu/rest/v2/all").then(res => res.json()).then(res => country.value = res)
})
</script>
<template>
	<section class="body-footer">
		<div>
			<h4>MF <span class="text-primary">Crypto</span></h4>
			<select name="" id="">
				<option value="">English</option>
				<option v-for="(d,i) in country" :value="d.name" :selected="d.name === 'United States of America'">{{d.name}}</option>
			</select>
			<p>&copy; {{new Date().getFullYear()}} Fairy Technology</p>
			<p>All rights reserved</p>
		</div>
		<div>
			<div>
				<h5>Company</h5>
				<div class="list-footer">
					<a v-for="(d,i) in company" href="/">{{d}}</a>
				</div>
			</div>
			<div>
				<h5>Educate</h5>
				<div class="list-footer">
					<a v-for="(d,i) in educate" href="/">{{d}}</a>
				</div>
			</div>
			<div>
				<h5>Product & Services</h5>
				<div class="list-footer">
					<a v-for="(d,i) in product" href="/">{{d}}</a>
				</div>
			</div>
			<div>
				<h5>Follow</h5>
				<div class="list-footer">
					<a v-for="(d,i) in follow" href="/">{{d}}</a>
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="sass">
@use "../App.sass" as theme

.text-primary
	color: theme.$primary

.body-footer
	display: grid
	grid-template-areas: "left right right"
	@media (max-width: theme.$query_md)
		grid-template-areas: "right right" "left left"
	color: white
	background-color: theme.$secondary
	h4
		font-size: 40px
	> div
		padding: 2em
	> div:nth-child(1)
		grid-area: left
		select
			padding: 1em
			width: 100%
			border: 0
			&:focus
				outline: none
	> div:nth-child(2)
		grid-area: right
		display: flex
		@media (max-width: theme.$query_md)
			flex-wrap: wrap
		> div
			// flex: 1
		.list-footer
			display: flex
			flex-wrap: wrap
			a
				width: 100%
				color: theme.$txtgrey
				padding: 4px 0
				&:hover
					text-decoration: underline
</style>