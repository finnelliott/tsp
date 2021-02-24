import Head from 'next/head'
import React, { useEffect, useState } from 'react'

export default function Home() {

  const [loaded, setLoaded] = useState(false)
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!loaded && count < 1)
      setTimeout(() => {
        setLoaded(true)
        , 0    
      })
      setCount(count + 1)
  })
  

  function changePage(page) {
    setLoaded(!loaded)
    setTimeout(() => {
      window.location.pathname = page
    }, 0);
  }

  return (
    <div>
      <Head>
        <title>The Spaces Protocol</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main class={`transition-opacity duration-500 w-screen min-h-screen bg-black flex flex-col ${loaded ? "opacity-100" : "opacity-0"}`}>
        <div class="flex-1"></div>
        <div class="flex-1 w-full flex flex-wrap content-center py-8">
          <div class="text-white w-full text-center tracking-widest font-regular text-3xl" style={{textShadow: "0px 0px 32px rgba(255, 255, 255, 0.5)"}}>THE</div>
          <div class="text-white w-full text-center tracking-widest font-bold text-7xl lg:text-9xl" style={{textShadow: "0px 0px 32px rgba(255, 255, 255, 0.5)"}}>SPACES</div>
          <div class="text-white w-full text-center tracking-widest font-regular text-3xl" style={{textShadow: "0px 0px 32px rgba(255, 255, 255, 0.5)"}}>PROTOCOL</div>
        </div>
        <nav class="flex-1 flex inline-flex items-center">
          <div class="flex-1"></div>
          <div class="flex-none w-min text-center flex flex-col"><button onClick={() => changePage("vision")} class="focus:outline-none w-full text-white tracking-wider mb-8 no-underline hover:underline">Vision</button><button onClick={() => changePage("process")} class="focus:outline-none w-full text-white tracking-wider mb-8 no-underline hover:underline">Process</button></div>
          <div class="flex-1"></div>
        </nav>
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
