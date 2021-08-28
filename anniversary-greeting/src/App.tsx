import React, { useState, useEffect } from 'react'
import './App.css'
import Dialog from './component/Dialog'
import s from './sass/Home.module.sass'

import img1 from './img/IMG20200821151542.jpg'
import img2 from './img/IMG_20200208_154850.jpg'
import img3 from './img/IMG_20210425_152827.jpg'
import img4 from './img/IMG_20210425_152938.jpg'
import img5 from './img/IMG_20210617_152211.jpg'

function App() {
  const [greet, setgreet] = useState('')
  const [opengreet, setopengreet] = useState(false)
  const [activeindicator, setactiveindicator] = useState(1)
  const [dialogstatus, setdialogstatus] = useState(false)
  const [showimage, setshowimage] = useState('')
  useEffect(() => {
    let el: HTMLDivElement = document.querySelector('#wrap-img'), last: number = 10, direction: string = 'left'
    setInterval(() => {
      if(last >= ( el.scrollWidth) || direction === 'right'){
        el.scrollTo(last, 0)
        last -= 10
        direction = 'right'
        if(last <= 0){
          direction = 'left'
          return true
        }
      }else{
        el.scrollTo(last, 0)
        last += 10
        direction = 'left'
      }
    }, 100)
  }, [])
  let scrolled = (e: any) => {
    const {scroll} = e.target.dataset
    setactiveindicator(Number(scroll))
    if(Number(scroll) === 1){
      window.scrollTo(0, 0)
    }
    else if(Number(scroll) === 3){
      window.scrollTo(0, document.body.clientHeight)
    }else{
      window.scrollTo(0, (((50 / 100) * window.innerHeight * Number(scroll))) )
    }
  },
  show_greet = () => {
    let str: string = "Semoga hubungan kita makin langgeng ya sayang😘 Jangan pernah untuk ninggalin aku tetap setia sama aku jangan pernah berubah aku hanya ingin denganmu tuk selamanya💖",
    int: any, last: number = 1
    int = setInterval(() => {
      if(last === (str.length)){
        clearInterval(int)
      }
      setgreet(str.slice(0, last))
      last += 1
    }, 100)
    setopengreet(true)
  },
  disablecontext = (e: any) => {
    e.preventDefault()
  },
  open_img = (_img: any) => {
    if(_img){
      setshowimage(_img)
    }
    setdialogstatus(dialogstatus ? false: true)
  }
  return (
    <main onContextMenu={disablecontext}>
      <Dialog img={showimage} open={dialogstatus} onClose={open_img} />
      <header className={s.header}>
        <h3>Ferdiansyah & Safina Sahda</h3>
      </header>
      <div className={s.indicator}>
        <div>
          {[1,2,3].map((d: number, i: number) => ( <div key={i} onClick={scrolled} className={s.item} data-scroll={d}></div> ))}
        </div>
      </div>
      <div className={s.home}>
        <section className={s.wrapping}>
          <div className={s.card}>
            <h2>Happy Anniversary yang ke 2 Tahun 9 Bulan Sayang</h2>
            {!opengreet ? <button onClick={show_greet} className={s.primary}>Aku ingin kamu klik tombol ini</button>: false}
            {opengreet ? <p><span>{greet}</span></p>: false}
            {
              opengreet ?
              <>
                <textarea placeholder="Jawab disini ya sayang"></textarea>
                <button>Kirim</button>
              </>
              : false
            }
          </div>
        </section>
        <section style={{position: 'relative'}} className={s.wrapping}>
          <div className={s.card + ' ' + s.imgcard}>
            <div id="wrap-img" className={s.wrap_img}>
              <div><img onClick={() => open_img(img1)} src={img1} /></div>
              <div><img onClick={() => open_img(img2)} src={img2} /></div>
              <div><img onClick={() => open_img(img3)} src={img3} /></div>
              <div><img onClick={() => open_img(img4)} src={img4} /></div>
              <div><img onClick={() => open_img(img5)} src={img5} /></div>
            </div>
          </div>
        </section>
        <section className={s.wrapping}>
          <div className={s.card}>
            <h2>I Love You For Now and For Ever</h2>
            <p>Terimakasih sudah setia sama aku selalu menemaniku disemua waktumu selalu sabar sama sikap aku yang seperti ini</p>
            <i>Code by Ferdiansyah</i>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
