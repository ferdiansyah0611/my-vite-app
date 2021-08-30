import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './routes/Home.vue'
import "./assets/app.css"

const routes = [
	{
		path: '/', component: Home
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
