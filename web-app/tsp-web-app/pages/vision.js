import Head from 'next/head'
import React, { useEffect, useState } from 'react'

export default function Vision() {
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

      <main class={`transition-opacity duration-500 w-screen min-h-screen bg-white flex flex-col ${loaded ? "opacity-100" : "opacity-0"}`}>
        <div class="inline-flex">
            <div class="flex-1"><button onClick={() => changePage("")} class="focus:outline-none w-min tracking-widest font-bold p-4 flex-1">SPACES</button></div>
            <div class="flex-1 p-4 text-center">Vision</div>
            <div class="flex-1"></div>
        </div>
        <div class="w-full max-w-3xl mx-auto">
            <div class="text-xl text-gray-600 text-center py-12 px-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</div>
            <div class="text-sm px-4 pb-8 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Neque gravida in fermentum et sollicitudin ac. Sed odio morbi quis commodo odio. Accumsan tortor posuere ac ut consequat semper viverra nam. Ac turpis egestas maecenas pharetra convallis posuere morbi. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Bibendum at varius vel pharetra vel turpis nunc. Iaculis eu non diam phasellus vestibulum lorem sed risus. At auctor urna nunc id cursus. Aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue eu consequat ac felis donec et. Id interdum velit laoreet id donec. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Mauris ultrices eros in cursus turpis massa tincidunt dui. Amet mattis vulputate enim nulla aliquet. Lectus proin nibh nisl condimentum id. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. In egestas erat imperdiet sed euismod nisi porta. Purus in massa tempor nec feugiat nisl.</div>
            <div class="text-lg px-4 pb-2">Mission</div>
            <div class="text-sm px-4 pb-8 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Neque gravida in fermentum et sollicitudin ac. Sed odio morbi quis commodo odio. Accumsan tortor posuere ac ut consequat semper viverra nam. Ac turpis egestas maecenas pharetra convallis posuere morbi. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Bibendum at varius vel pharetra vel turpis nunc. Iaculis eu non diam phasellus vestibulum lorem sed risus. At auctor urna nunc id cursus. Aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue eu consequat ac felis donec et. Id interdum velit laoreet id donec. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Mauris ultrices eros in cursus turpis massa tincidunt dui. Amet mattis vulputate enim nulla aliquet. Lectus proin nibh nisl condimentum id. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. In egestas erat imperdiet sed euismod nisi porta. Purus in massa tempor nec feugiat nisl.</div>
            <div class="text-lg px-4 pb-2">Mission</div>
            <div class="text-sm px-4 pb-8 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Neque gravida in fermentum et sollicitudin ac. Sed odio morbi quis commodo odio. Accumsan tortor posuere ac ut consequat semper viverra nam. Ac turpis egestas maecenas pharetra convallis posuere morbi. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Bibendum at varius vel pharetra vel turpis nunc. Iaculis eu non diam phasellus vestibulum lorem sed risus. At auctor urna nunc id cursus. Aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue eu consequat ac felis donec et. Id interdum velit laoreet id donec. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Mauris ultrices eros in cursus turpis massa tincidunt dui. Amet mattis vulputate enim nulla aliquet. Lectus proin nibh nisl condimentum id. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. In egestas erat imperdiet sed euismod nisi porta. Purus in massa tempor nec feugiat nisl.</div>
            <div class="text-lg px-4 pb-2">Mission</div>
            <div class="text-sm px-4 pb-8 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Neque gravida in fermentum et sollicitudin ac. Sed odio morbi quis commodo odio. Accumsan tortor posuere ac ut consequat semper viverra nam. Ac turpis egestas maecenas pharetra convallis posuere morbi. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Bibendum at varius vel pharetra vel turpis nunc. Iaculis eu non diam phasellus vestibulum lorem sed risus. At auctor urna nunc id cursus. Aliquet nec ullamcorper sit amet risus nullam eget. Vitae congue eu consequat ac felis donec et. Id interdum velit laoreet id donec. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Mauris ultrices eros in cursus turpis massa tincidunt dui. Amet mattis vulputate enim nulla aliquet. Lectus proin nibh nisl condimentum id. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. In egestas erat imperdiet sed euismod nisi porta. Purus in massa tempor nec feugiat nisl.</div>
        </div>
        
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
