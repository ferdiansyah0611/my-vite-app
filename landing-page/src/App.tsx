import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter, Route
} from 'react-router-dom'
// component
import Navbar from './component/Navbar'
import Footer from './component/Footer'
// svg
import Loading from './svg/Loading.svg'
// routes
const Home = lazy(() => import('./routes/Home'))
const About = lazy(() => import('./routes/About'))
const Faq = lazy(() => import('./routes/Faq'))
const Contact = lazy(() => import('./routes/Contact'))
// style
import './App.css'

const Loaded = () => <div className="loading"><img src={Loading} alt="load"/></div>

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <main>
          <Suspense fallback={<Loaded/>}>
            <Route path="/" component={Home} exact/>
          </Suspense>
          <Suspense fallback={<Loaded/>}>
            <Route path="/about" component={About}/>
          </Suspense>
          <Suspense fallback={<Loaded/>}>
            <Route path="/faq" component={Faq}/>
          </Suspense>
          <Suspense fallback={<Loaded/>}>
            <Route path="/contact" component={Contact}/>
          </Suspense>
        </main>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
