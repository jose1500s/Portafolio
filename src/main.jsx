import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Hero from './components/Hero'
import Experience from './components/Experience'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div class="absolute z-[-2] h-full w-full bg-[#202020]">
      <div class="absolute opacity-20 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#F5F5F5_1px,transparent_1px),linear-gradient(to_bottom,#F5F5F5_1px,transparent_1px)] bg-[size:80px_65px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#F5F5F5_70%,transparent_110%)]">
      </div>
    </div>

    <Hero />
    <Experience />

  </React.StrictMode>,
)
