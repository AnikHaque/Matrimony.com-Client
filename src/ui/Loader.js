import React from 'react'

import loader from '../assets/images/Loader/loader.gif'
const Loader = () => {
  return (
    <div>
        
        <section id="loader" class="mt-5 pt-5">
                <div class="d-flex justify-content-center">
                        <img class="img-fluid" src={loader} alt="" />
                </div>
        </section>
    </div>
  )
}

export default Loader