import React from 'react'
import s from "../style/ItemVideo.module.scss"

const ItemVideo = () => {
	return(
		<>
		<div className={s.itemvideo}>
			<div className="flex">
				<img className="rounded-full" src="https://picsum.photos/200/300" alt="profile"/>
				<p className={s.name}>Ferdiansyah</p>
			</div>
			<div className="flex">
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Magnam iusto, tempora adipisci modi reiciendis impedit porro! Ad cum,
						placeat, officia voluptatibus asperiores molestias dignissimos,
						tempora consequuntur, expedita fugit eveniet est.
					</p>
					<video controls={true} controlsList="nodownload">
						{/*<source src="/VID_53340831_082725_052.mp4" type="video/mp4"/>*/}
					</video>
				</div>
				<div className={s.listicon}>
					<div>
						<div className={s.icon}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
							</svg>
						</div>
						<p>20</p>
					</div>
					<div>
						<div className={s.icon}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
							</svg>
						</div>
						<p>50</p>
					</div>
					<div>
						<div className={s.icon}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
							</svg>
						</div>
						<p>1</p>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default ItemVideo