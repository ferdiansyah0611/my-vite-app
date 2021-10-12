import React, { useState, useEffect } from 'react'
import {
  useHistory
} from 'react-router-dom'
// media
import example from '../1629952884637.png'
// style
import s from '../sass/Home.module.sass'

interface _visi {
  no: string,
  title: string,
  text: string
}
interface _listing {
  title: string,
  text: string
}
interface _applist {
  img: string,
  url: string,
  title: string,
  text: string
}
type __visi =  {
  no: string,
  title: string,
  text: string
}[]
type __listing =  {
  title: string,
  text: string
}[]
type __applist =  {
  img: string,
  url: string,
  title: string,
  text: string
}[]

function Home() {

  const histroy = useHistory()
  const [listing, setlisting] = useState<__listing>([])
  const [visi, setvisi] = useState<__visi>([])
  const [applist, setapplist] = useState<__applist>([])
  const [writetext, setwritetext] = useState<string>('')

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  useEffect(() => {
    setlisting([
      {
        title: 'Perizinan',
        text: 'Kami sudah berlisensi dan legal untuk membangun startup'
      },
      {
        title: 'Pekerja',
        text: 'Sudah 1+ karyawan di Fairy Technology'
      },
      {
        title: 'Bisnis',
        text: 'Bekerja sama dengan beberapa perusahaan terbesar didunia seperti Google, Microsoft, dan Facebook'
      },
    ])
    setvisi([
      {
        no: '01',
        title: 'Teknologi Terbaru',
        text: 'Selalu mengikuti perkembangan teknologi saat ini untuk mampu bersaing dan mendominasi dari negara lain'
      },
      {
        no: '02',
        title: 'Up to Date',
        text: 'Selalu membuat software terbaru untuk mendapatkan income yang menguntungkan'
      },
      {
        no: '03',
        title: 'Programmer Handal',
        text: 'Menguasai semua bahasa pemograman pada bidangnya masing-masing'
      }
    ])
    setapplist([
      {
        img: 'https://portfolio-one-alpha-72.vercel.app/tech-img.png',
        url: 'https://tech-messenger.vercel.app',
        title: 'Tech Messenger',
        text: 'Sebuah aplikasi/website chatting perorangan/grup dengan enkripsi yang aman. Mendukung telepon, videocall, hingga chatting grup tertutup'
      },
      {
        img: 'https://portfolio-one-alpha-72.vercel.app/shop-0611-img.png',
        url: 'https://shop-0611.web.app',
        title: 'Shop 0611',
        text: 'Sebuah aplikasi/website toko online di semua sektor teknologi sudah teruji aman proses pembayarannya dan reseller yang sudah terverifikasi'
      },
      {
        img: 'https://portfolio-one-alpha-72.vercel.app/blog-0611-img.png',
        url: 'https://blog-0611.herokuapp.com',
        title: 'Blog 0611',
        text: 'Sebuah aplikasi/website blogging gratis 100% untuk semua pengguna dan tidak ada iklan satupun'
      }
    ])
    let ontext: string = "perangkat lunak, Iot dan blockchain.", int: any, slice: number = 1
    int = setInterval(() => {
      if(slice === (ontext.length - 1)){
        setTimeout(() => {
          slice = 0
        }, 2000)
      }
      setwritetext(ontext.slice(0,slice))
      slice += 1
    }, 100)
    return() => clearInterval(int)
  }, [])
  
  let openWindow = (url: string) => {
    window.open(url)
  },
  toWork = () => {
    histroy.push('/work')
  }
  return (
    <section>
      <div className={s.primary}>
        <section className={s.body}>
          <div className={s.home_1}>
            <div>
              <img src={example} alt="example"/>
            </div>
            <div className={s.description}>
              <h2>
                Startup Yang Bergerak Pada Bidang Teknologi di Indonesia
              </h2>
              <p>
                Fairy Technology adalah sebuah startup memfokuskan teknologi <span style={{color: 'red', borderRight: '1px solid white'}}>{writetext}</span>
              </p>
              <div className={s.btn}>
                <button className={s.secondary}>Info Lainnya</button>
                <button onClick={toWork} className={s.primary}>Lihat Pekerjaan Kami</button>
              </div>
              <div className={s.flex}>
                <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
                <img alt="Vuejs" src="https://img.shields.io/badge/Vue.js-35495E?style=flat-square&logo=vue.js&logoColor=4FC08D" />
                <img alt="Svelte" src="https://img.shields.io/badge/Svelte-4A4A55?style=flat-square&logo=svelte&logoColor=FF3E00" />
                <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" />
                <img alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white" />
                <img alt="redux" src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white" />
                <img alt="Sass" src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white" />
                <img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />
                <img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" />
                <img alt="html5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
                <img alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" />
                <img alt="Tailwindcss" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" />
                <img alt="Mysql" src="https://img.shields.io/badge/MySQL-00000F?style=flat-square&logo=mysql&logoColor=white" />
                <img alt="Materialui" src="https://img.shields.io/badge/Material--UI-0081CB?style=flat-square&logo=material-ui&logoColor=white" />
                <img alt="Laravel" src="https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={s.bgWhite}>
        <section>
          <div className={s.home_2}>
            <div>
              <h3>Kelebihan Kami Dibandingkan Dengan Startup Lainnya</h3>
              <div className={s.listing}>
                {listing.map((d: _listing, i: number) => {
                  return(
                    <div key={i}>
                      <h4>{d.title}</h4>
                      <p>{d.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div>
              <h3>Visi dan Misi Kami</h3>
              <div className={s.listVisi}>
                {visi.map((d: _visi, i: number) => {
                  return(
                    <div key={i}>
                      <span>{d.no}</span>
                      <div>
                        <h4>{d.title}</h4>
                        <p>{d.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={s.bgWhite}>
        <section>
          <div className={s.home_3}>
            <div>
              <h3>Software Apa Saja Yang Telah Kita Buat</h3>
              <div className={s.applist}>
                {applist.map((d: _applist, i: number) => {
                  return(
                    <div key={i}>
                      <img src={d.img} alt="tech"/>
                      <h4>{d.title}</h4>
                      <p>{d.text}</p>
                      <button onClick={() => openWindow(d.url)} className={s.secondary}>Lihat Website</button>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Home
