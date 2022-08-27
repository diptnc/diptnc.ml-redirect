import React,{useEffect} from 'react'
import Head from 'next/head'
const index = () => {
    //seo redirect
    useEffect(() => {
        if(window.location.pathname === '/'){
            window.location.href = 'https://diptanuchakraborty.in'
        }
    } , [])



  return (
    <>

    <Head>
        <title>Web developer in Agartala | Tripura |Freelance Web developer</title>
        <meta name="description" content="web development, website designing and many more affordable services for an affordable price " />
        <meta name="keywords" content="webdeveloper, webdeveloper in agartala, web developer in tripura, Website designer in agartala, website designer in tripura, website developer near me" />
        <meta name="author" content="Diptanu chakraborty" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="language" content="english" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="expires" content="never" />
        <meta name="copyright" content="diptanuchakraborty.in" />
        <meta name="classification" content="webdeveloper" />
        <meta name="googlebot" content="index, follow" />
        <meta name="msnbot" content="index, follow" />
        <meta name="slurp" content="index, follow" />
        <meta name="version" content="1.0.0" />
        <meta name="reply-to" content="diptanuchakraborty.in" />
        <meta name="webmaster" content="diptanuchakraborty.in" />
        <meta name="url" content="diptanuchakraborty.in" />
        <meta name="identifier-URL" content="diptnc.ml" />

        </Head>
    
    
    </>
  )
}

export default index