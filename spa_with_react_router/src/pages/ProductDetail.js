import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const pramas = useParams()
  return (
    <h1>{pramas.productId}</h1>
  )
}

export default ProductDetail