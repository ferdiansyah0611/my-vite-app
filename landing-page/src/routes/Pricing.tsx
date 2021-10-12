import React, {
	useState, useEffect
} from 'react'
// style
import s from '../sass/Home.module.sass'
// icon
import Checklist from '../icon/Checklist'

type _price = {
	sourcecode: {
		name: string,
		feature: string[],
		price: string
	}[],
	hosting: {
		name: string,
		feature: string[],
		price: string
	}[]
}
interface sourcecode{
	name: string,
	feature: string[],
	price: string
}

export default function Pricing(){
	const [price, setprice] = useState<_price>({
		sourcecode: [
			{
				name: 'Frontend S1',
				feature: ['Satu Halaman', 'Custom Desain', 'Single Page Application', 'Mendukung Progressive Web Apps', 'Melihat Projek di Github', 'Termasuk Source Code'],
				price: "Rp. 300.000"
			},
			{
				name: 'Frontend S2',
				feature: ['Tiga Halaman', 'Custom Desain', 'Single Page Application', 'Mendukung Progressive Web Apps', 'Melihat Projek di Github', 'Termasuk Source Code'],
				price: "Rp. 500.000"
			},
			{
				name: 'Frontend S3',
				feature: ['Sembilan Halaman', 'Custom Desain', 'Single Page Application', 'Mendukung Progressive Web Apps', 'Melihat Projek di Github', 'Termasuk Source Code + Preview Web'],
				price: "Rp. 1.200.000"
			},
			{
				name: 'Backend S1',
				feature: ['Lima Tabel CRUD', 'Restfull API (Mysql)', 'Autentikasi', 'Mendukung Migrasi Database', 'Melihat Projek di Github', 'Termasuk Source Code'],
				price: "Rp. 250.000"
			},
			{
				name: 'Backend S2',
				feature: ['Delapan Tabel CRUD', 'Restfull API (Mysql)', 'Autentikasi', 'Mendukung Migrasi Database', 'Melihat Projek di Github', 'Termasuk Source Code'],
				price: "Rp. 600.000"
			},
			{
				name: 'Backend S3',
				feature: ['Dua Belas Tabel CRUD', 'Restfull API (Mysql)', 'Autentikasi', 'Mendukung Migrasi Database', 'Melihat Projek di Github', 'Termasuk Source Code'],
				price: "Rp. 1.400.000"
			},
		],
		hosting : [
			{
				name: 'Basic',
				feature: ['Sesuai Permintaan Client', 'Gratis Hosting', 'Email Hosting', 'SSL', '3 Halaman', 'Cocok untuk Portofolio dan Landing Page'],
				price: 'Rp. 700.000 / Tahun'
			},
			{
				name: 'Middle',
				feature: ['Sesuai Permintaan Client', 'Gratis Hosting', 'Email Hosting', 'SSL', '5 Halaman', 'Cocok untuk Blogger'],
				price: 'Rp. 1.400.000 / Tahun'
			},
			{
				name: 'Golden',
				feature: ['Sesuai Permintaan Client', 'Gratis Hosting', 'Email Hosting', 'SSL', 'Tanpa Batas Halaman', 'Cocok untuk Bisnis dan Jualan Online'],
				price: 'Rp. 3.500.000 / Tahun',
			},
		]
	})

	useEffect(() => {
    window.scrollTo(0,0)
  }, [])

	let buy = (data: sourcecode) => {
		window.open('https://wa.me/62895607486361?text=' + window.encodeURIComponent('Name = ' + data.name + "\nYour Name = \nYour Email = \nRequest = Your request \nPrice = " + data.price))
	}
	return(
		<>
		<section className={s['top-prefix']}>
			<div className={s.bgBlack}>
        <section>
          <div className={s.home_4}>
            <div>
              <h3>Harga & Fitur Pembuatan Web App (Source Code)</h3>
              <div className={s.pricing}>
              	{
              		price.sourcecode.map((d: sourcecode, i: number) => {
              			return(
			                <div key={i}>
			                  <h4>{d.name}</h4>
			                  <ul>
			                  	{
			                  		d.feature.map((f: string, fKey: number) => (
					                    <li key={fKey}>
					                      <Checklist color="green"/>
					                      <span>{f}</span>
					                    </li>
			                  		))
			                  	}
			                  </ul>
			                  <button onClick={() => buy(d)} className={s.secondary}>{d.price}</button>
			                </div>
              			)
              		})
              	}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={s.home_4}>
            <div>
              <h3>Harga & Fitur Pembuatan Web App (Source Code dan Hosting)</h3>
              <div className={s.pricing}>
              	{
              		price.hosting.map((d: sourcecode, i: number) => {
              			return(
			                <div key={i}>
			                  <h4>{d.name}</h4>
			                  <ul>
			                  	{
			                  		d.feature.map((f: string, fKey: number) => (
					                    <li key={fKey}>
					                      <Checklist color="green"/>
					                      <span>{f}</span>
					                    </li>
			                  		))
			                  	}
			                  </ul>
			                  <button onClick={() => buy(d)} className={s.secondary}>{d.price}</button>
			                </div>
              			)
              		})
              	}
              </div>
            </div>
          </div>
        </section>
      </div>
		</section>
		</>
	)
}