import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter, Route
} from 'react-router-dom'
// component
import Navbar from './component/Navbar'
import Footer from './component/Footer'
// routes
const Home = lazy(() => import('./routes/Home'))
const About = lazy(() => import('./routes/About'))
const Faq = lazy(() => import('./routes/Faq'))
const Contact = lazy(() => import('./routes/Contact'))
// style
import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <main>
          <Suspense fallback={<p>Loading</p>}>
            <Route path="/" component={Home} exact/>
          </Suspense>
          <Suspense fallback={<p>Loading</p>}>
            <Route path="/about" component={About}/>
          </Suspense>
          <Suspense fallback={<p>Loading</p>}>
            <Route path="/faq" component={Faq}/>
          </Suspense>
          <Suspense fallback={<p>Loading</p>}>
            <Route path="/contact" component={Contact}/>
          </Suspense>
        </main>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
