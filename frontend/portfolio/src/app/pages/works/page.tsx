import { BentoGridDemo } from '@/app/components/BentoGridDemo'
import Footer from '@/app/components/Footer'
import { HeroScrollDemo } from '@/app/components/HeroScrollDemo'
import { InfiniteMovingCardsDemo } from '@/app/components/InfiniteMovingCardsDemo'
import React from 'react'

const work = () => {
  return (
    <>
      <HeroScrollDemo/>
      <BentoGridDemo/>
      <InfiniteMovingCardsDemo/>
      <Footer/>
    </>
  )
}

export default work