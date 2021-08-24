import React from 'react'

interface props{
  data: any[]
}

const RecommendAccount = (prop: props) => {
  const { data } = prop
	return(
		<>
      {data.map((d,i) => {
        return(
          <div key={i}>
            <img src={"https://picsum.photos/200/30" + i} alt="profile"/>
            <p>Ferdiansyah {d}</p>
          </div>
        )
      })}
    </>
	)
}

export default RecommendAccount