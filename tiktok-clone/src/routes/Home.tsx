import React from 'react'
import s from '../style/Home.module.scss'
import {
  Link, useHistory
} from 'react-router-dom'

import RecommendAccount from '../component/RecommendAccount'
import ItemVideo from '../component/ItemVideo'
import Navbar from '../component/Navbar'

const Home = () => {
  const nav = useHistory()
  let toLogin = (e: any) => {
    nav.push('/login')
  }
  return (
    <div>
      <Navbar/>
      <div className={s.body}>
        {/** @aside */}
        <div>
          <aside>
            <div>
              <a className={s.active} href="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>For You</span>
              </a>
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Following</span>
              </a>
            </div>
            <div>
              <p>Login for following creator, like video, and view a comment.</p>
              <button type="button" onClick={toLogin} className={s.outlinePrimary}>Login</button>
            </div>
            <div>
              <p className="title_head">Recommend Account</p>
              <div className={s.listaccount}>
                <RecommendAccount data={[1,2,3,4,5]} />
              </div>
            </div>
            <div>
              <p className="title_head">Finding</p>
              <div className="tag">
                {['fyp', 'artist', 'popular'].map((d,i) => (<a key={i} href="/">#{d}</a>))}
              </div>
            </div>
          </aside>
        </div>
      {/** @body */}
      <div>
        <div className="listvideo">
          {[1,2,3,4,5].map((d,i) => (
            <ItemVideo key={i} />
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
