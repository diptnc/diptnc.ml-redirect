import React,{useEffect,useState} from 'react'
import axios from 'axios'




const Data = ({posts}) => {

const [data,setData] = useState(posts)
//random names
useEffect(() => {

setData(posts)


},[])

  return (
    <>
    <h1>functions</h1>

<div>
<ul style={{color:'red'}}>

{data.map((item,index) => {
return <li key={index}>{item.a}</li>
})}
</ul>

</div>
    
    
    </>
  )
}

export default Data

export async function getStaticProps() {
 
//fetch random quotes from api
const res = await axios.get('https://zenquotes.io/api/quotes')

const posts = await res.data


  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}
