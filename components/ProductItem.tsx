import { memo, useState } from 'react'
import { AddProductToWishlistProps } from './AddProductToWishlist'
import dynamic from 'next/dynamic'
import lodash from 'lodash'
//import { AddProductToWishlist } from './AddProductToWishlist'

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
  return import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist)
},{
  loading: () => <span> Carregando ... </span>
})

interface ProductItemProps {
  product: {
    id: number
    price: number
    priceFormatted: string
    title: string
  }
  onAddToWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)

  /*
  async function showFormattedDate(){
    const { format } = await import('date-fns')

    format()
  }
  */

  return (
    <div>
      {product.title} - <strong> {product.priceFormatted} </strong>

      <button onClick={() => setIsAddingToWishlist(true)} >
        Adicionar aos favoritos
      </button>

      { isAddingToWishlist && (

        <AddProductToWishlist 
        onAddToWishList={() => onAddToWishList(product.id)}
        onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  )
}

/*       
<button
        onClick={() => onAddToWishList(product.id)}
      >
        Adicionar aos favoritos
      </button>  
*/


export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  //return Object.is(prevProps.product, nextProps.product)
  return lodash.isEqual(prevProps.product, nextProps.product)
})

/*
export const ProductItem = memo(({product}: ProductItemProps) => {
  return (
    <div>
      {product.title} - <strong> {product.price} </strong> 
    </div>
  )
})
*/