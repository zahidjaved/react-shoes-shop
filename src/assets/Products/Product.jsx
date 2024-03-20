import React from 'react'
import "./Product.css";
import Card from '../../component/Card';

const Product = ({result}) => {
  return (
    <>
        <section className="card-container">
        {result}
        </section>
    </>
  )
}

export default Product