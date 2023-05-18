import React from 'react'

import loader from '../assets/images/Loader/loader.gif'
const Loader = () => {
  return (
    <div>
        
        <section id="loader" class=" pt-5">
                <div class="d-flex justify-content-center">
                        <img class="img-fluid w-52 mb-72 mt-72" src={loader} alt=""  />
                </div>
        </section>
    </div>
  )
}

export default Loader