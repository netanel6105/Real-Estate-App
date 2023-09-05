import React from 'react'
import './price.css'
import PriceCard from './PriceCard'
import Heading from "../../common/Heading"

const Price = () => {

  return (
    <>
    <section className='price padding'>
      <div className='container'>
        <Heading title='Select Your Package' subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores' />
        <PriceCard />
      </div>
    </section>
  </>
  )
}

export default Price