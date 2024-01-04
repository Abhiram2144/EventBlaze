import React from 'react'
import "../eve.css"
import "./offline.css"
import Link from 'next/link'
const page = () => {
  return (
    <div className='flex mx-auto text-center md:ml-[580px] md:mt-8'>
        <div class="container">
    <div class="heading">Enter Area Details</div>
    <form action="" class="form">
      <input required="" class="input" type="text" name="email" id="email" placeholder="State"/>
      <input required="" class="input" type="text" name="password" id="password" placeholder="City"/>
      <input required="" class="input" type="text" name="password" id="password" placeholder="Pincode"/>

      <Link href="/events/offline/offlineEvents">
      <input class="login-button" type="submit" value="Get Events"/>
      </Link>
      
    </form>
    </div>
    </div>
  )
}

export default page
