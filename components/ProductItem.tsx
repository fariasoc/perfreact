import { memo } from 'react'

interface ProductItemProps {
  product: {
    id: number
    price: number
    title: string
  }
}

 function ProductItemComponent({product}: ProductItemProps){
  return (
    <div>
      {product.title} - <strong> {product.price} </strong> 
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent)

/*
export const ProductItem = memo(({product}: ProductItemProps) => {
  return (
    <div>
      {product.title} - <strong> {product.price} </strong> 
    </div>
  )
})
*/