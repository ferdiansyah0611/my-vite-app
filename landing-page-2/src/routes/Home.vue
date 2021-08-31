<script setup>
import { ref } from 'vue'
let activetab = ref('exchange')
let currency = ref([
	{name: 'Bitcoin', price: Math.floor(Math.random() * 999000000), short: 'BTC'},
	{name: 'Etherium', price: Math.floor(Math.random() * 999000000), short: 'ETH'},
	{name: 'Cardano', price: Math.floor(Math.random() * 999000000), short: 'ADA'},
	{name: 'Binance Coin', price: Math.floor(Math.random() * 999000000), short: 'BNB'},
	{name: 'Tether', price: Math.floor(Math.random() * 999000000), short: 'USDT'},
	{name: 'XRP', price: Math.floor(Math.random() * 999000000), short: 'XRP'},
	{name: 'Dogecoin', price: Math.floor(Math.random() * 999000000), short: 'DOGE'},
	{name: 'Solana', price: Math.floor(Math.random() * 999000000), short: 'SOL'},
	{name: 'USD Coin', price: Math.floor(Math.random() * 999000000), short: 'USDC'},
])
let choose = ref('')
let to = ref('')
let input_from = ref('')
let input_to = ref('')
let changeTab = (e) => {
	e.preventDefault()
	activetab.value = e.target.dataset.name
}, changeFrom = (e) => {
	choose.value = e.target.value
}, ChangeTo = (e) => {
	to.value = e.target.value
}, inputChangeFrom = (e) => {
	input_from.value = e.target.value
	input_to.value = ( (currency.value.find(d => d.short === choose.value).price || 0) / (currency.value.find(d => d.short === to.value).price || 0))
}
</script>
<template>
	<section class="body">
		<div>
			<div class="left">
				<h1>Here's <span class="text-primary">The Best</span> Crypto Exchange</h1>
				<p>Use your credit card, payment app, or bank account to buy Bitcoin, Bictoin Cash, Etherium, and other select cryptocurrency</p>
				<div class="download">
					<button class="appstore">Download on the App Store</button>
					<button class="playstore">GET IT ON Google Play</button>
				</div>
				<div>
					<h5><span class="text-primary">Excellent Rating</span></h5>
					<div>
						<span v-for="(d,i) in [1,2,3,4,5]">
							<svg :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red">
							  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						</span>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="tab-head">
					<a @click="changeTab" data-name="exchange" href="/" :class="activetab === 'exchange' ? 'active': ''">Exchange Crypto</a>
					<a @click="changeTab" data-name="buy" href="/" :class="activetab === 'buy' ? 'active': ''">Buy and Sell</a>
				</div>
				<div v-if="activetab === 'exchange'" class="tab-body">
					<div>
						<div class="flex">
							<input @keyup="inputChangeFrom" type="number" value="0">
							<select @change="changeFrom">
								<option v-for="(d,i) in currency" :key="i" :selected="i === 0" :value="d.short">{{d.name}}</option>
							</select>
						</div>
					</div>
					<div>
						<div class="flex">
							<div class="flex">
								<span class="locked">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
									</svg>
								</span>
								<p v-if="choose">1 {{choose}} ~ <span>${{currency.find(d => d.short === choose).price || 0}}</span></p>
							</div>
							<div class="refresh">
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
									</svg>
								</span>
							</div>
						</div>
					</div>
					<div>
						<div class="flex">
							<input :readonly="true" type="number" :value="input_to">
							<select @change="ChangeTo">
								<option v-for="(d,i) in currency" :key="i" :selected="i === 1" :value="d.short">{{d.name}}</option>
							</select>
						</div>
					</div>
					<div>
						<button class="bg-primary exchange">Exchange Now</button>
					</div>
				</div>
				<div v-if="activetab === 'buy'" class="tab-body">
					<div>
						<div class="flex">
							<input type="number" value="0">
							<select>
								<option v-for="(d,i) in currency" :key="i" :selected="i === 0" :value="d.short">{{d.name}}</option>
							</select>
						</div>
					</div>
					<div>
						<div class="flex">
							<div class="flex">
								<span class="locked">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
									</svg>
								</span>
								<p>1 BTC ~ $10000</p>
							</div>
							<div class="refresh">
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
									</svg>
								</span>
							</div>
						</div>
					</div>
					<div>
						<div class="flex">
							<input type="number" value="0">
							<select>
								<option v-for="(d,i) in currency" :key="i" :selected="i === 1" :value="d.short">{{d.name}}</option>
							</select>
						</div>
					</div>
					<div class="list-button">
						<button class="bg-primary">Buy</button>
						<button>Sell</button>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="body">
		<div>
			<div>
				<h5>HOW IT WORKS</h5>
				<h1>Why buy crypto at MF Crypto</h1>
				<p class="description">There's no faster, safer place to buy cryptocurrency</p>
				<div class="list-item">
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						  <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" />
						</svg>
						<h4>Pick a Crypto</h4>
						<p>We support more than 10.000 currency pairs and the list is constantly growing. Pick the one you like.</p>
					</div>
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" class="rotation" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
						</svg>
						<h4>Exchange</h4>
						<p>We handle everything complicated so that you can spend your time on what masters.</p>
					</div>
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
						</svg>
						<h4>Receive your Funds</h4>
						<p>We match the estimate and the outcome better than anyone else, thanks to our RealRates system.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="body">
		<div>
			<div>
				<h5>FEATURED</h5>
				<h1>The Service You Deserve</h1>
				<p class="description">There's no faster, safer place to buy cryptocurrency</p>
				<div class="list-item">
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
						  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
						</svg>
						<h4>Limitless Exchanges</h4>
						<p>You have all the freedom in the world start with less than $2 in your favorite coin. You don't have to worry about any upper limits swap as much crypto in one go as you want.</p>
					</div>
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
						</svg>
						<h4>Instant Crypto Exchange</h4>
						<p>Our service is built for simplicity and superspeed - we exchange crypto in 2 minutes on average. We also support Visa and MasterCard for fast and easy fiat-to-crypto purchases.</p>
					</div>
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
						</svg>
						<h4>Absolute Safety</h4>
						<p>Your safety is our top priority - as a non custodial service, ChangeNOW does not control your crypto assets. We do not store your funds or require registration.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<style scoped lang="sass">
@use "../App.sass" as theme

@keyframes rotation
	from
		transform: rotate(360deg)
	to
		transform: rotate(0deg)

.rotation
	animation: 4s rotation infinite

h1
	font-size: 48px
	font-weight: bold

.locked
	flex: 0 !important

.list-button
	display: flex
	button
		flex: 1
		margin: 10px
		text-transform: uppercase
		font-weight: bold
		color: white
		&:nth-child(2)
			background-color: red

.refresh
	display: flex
	justify-content: flex-end
	> *
		margin: 10px
		cursor: pointer
.flex
	display: flex

.bg-primary
	background-color: theme.$primary

svg
	width: 20px

.exchange
	width: 100%
	margin: 10px
	border-radius: 10px
	text-transform: uppercase
	color: white
.download
	display: flex
	button
		font-weight: bold !important
		background-color: black
		color: white
	.appstore
		margin: 10px 0
	.playstore
		margin: 10px

.left, .right
	flex: 1
	text-align: left !important
.left
	@media (min-width: theme.$query_md)
		padding: 1em
.right
	border-radius: theme.$radius
	padding: 0 !important
	@media (max-width: theme.$query_md)
		margin-top: 2em
	.tab-head
		display: flex
		text-align: center
		a
			&.active
				border-top-left-radius: theme.$radius
				border-top-right-radius: theme.$radius
				background-color: black
			color: white
			flex: 1
			padding: 1.5em
	.tab-body
		background-color: black
		padding: 0.5em
		border-bottom-left-radius: theme.$radius
		border-bottom-right-radius: theme.$radius
		.flex
			flex: 1
			@media (max-width: theme.$query_md)
				flex-wrap: wrap
			> *
				flex: 1
				margin: 10px
		button
			border-radius: theme.$radius
		p
			font-size: 13px
		input, select
			padding: 1.5em !important
			background-color: #292929
			color: white
			border: 0
			border-radius: theme.$radius
			&:focus
				outline: none
				box-shadow: 0 0 0 2px theme.$primary
		> div
			display: flex

.body
	padding: 2em 4em
	display: grid
	grid-template-columns: repeat(1, 1fr)
	color: white
	@media (max-width: theme.$query_md)
		padding: 1em 1em !important

	&:nth-child(1) > div
		display: flex
		flex-wrap: wrap

	&:nth-child(2), &:nth-child(3)
		display: flex !important
		margin-top: 8em

	> div
		display: flex
		justify-content: center
		text-align: center

		p.description
			color: theme.$txtgrey
		h5
			color: theme.$primary

		.list-item
			display: grid
			grid-template-columns: repeat(3, 1fr)
			grid-gap: 10px
			margin-top: 1em
			@media (max-width: theme.$query_md)
				grid-template-columns: repeat(1, 1fr)

			> div
				border: 5px solid theme.$gray
				border-radius: theme.$radius
				background-color: theme.$secondary
				padding: 1em
				svg
					width: 60px
</style>