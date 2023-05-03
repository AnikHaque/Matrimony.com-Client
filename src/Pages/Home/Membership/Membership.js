import React from 'react'

import './Membership.css'
const Membership = () => {
  return (
    <div>
      <div class="wrapper">
    <div class="table basic">
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">$</span>
            <span class="price">29</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <li>
          <span class="list-name">One Selected Template</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">100% Responsive Design</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Credit Remove Permission</span>
          <span class="icon cross"><i class="fas fa-times"></i></span>
        </li>
        <li>
          <span class="list-name">Lifetime Template Updates</span>
          <span class="icon cross"><i class="fas fa-times"></i></span>
        </li>
      </ul>
      <div class="btn"><button>Purchase</button></div>
    </div>
    <div class="table premium">
      <div class="ribbon"><span>Recommend</span></div>
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">$</span>
            <span class="price">59</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <li>
          <span class="list-name">Five Existing Templates</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">100% Responsive Design</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Credit Remove Permission</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Lifetime Template Updates</span>
          <span class="icon cross"><i class="fas fa-times"></i></span>
        </li>
      </ul>
      <div class="btn"><button>Purchase</button></div>
    </div>
    <div class="table ultimate">
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">$</span>
            <span class="price">99</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <li>
          <span class="list-name">All Existing Templates</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">100% Responsive Design</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Credit Remove Permission</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Lifetime Template Updates</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
      </ul>
      <div class="btn"><button>Purchase</button></div>
    </div>
  </div>
    </div>
  )
}

export default Membership