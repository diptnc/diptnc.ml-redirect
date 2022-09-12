import React,{useEffect,useState} from 'react'
import axios from 'axios'




const functions = ({posts}) => {

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
return <li key={index}>{item.name.first}</li>
})}
</ul>

</div>
    
    
    </>
  )
}

export default functions

export async function getStaticProps() {
  const res = await axios.get('https://randomuser.me/api/?results=10')
  const posts = res.data.results

 

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
