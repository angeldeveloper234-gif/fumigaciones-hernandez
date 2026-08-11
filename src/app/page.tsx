import { About } from '@/components/sections/About'
import { Blog } from '@/components/sections/Blog'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { Locations } from '@/components/sections/Locations'
import { Methods } from '@/components/sections/Methods'
import { PestGrid } from '@/components/sections/PestGrid'
import { Promotion } from '@/components/sections/Promotion'
import { Trust } from '@/components/sections/Trust'

export default function Home() {
  return (
    <>
      <Hero />
      <PestGrid />
      <Methods />
      <About />
      <Promotion />
      <Trust />
      <Locations />
      <Blog />
      <Contact />
    </>
  )
}
