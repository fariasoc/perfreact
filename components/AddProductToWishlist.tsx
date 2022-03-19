export interface AddProductToWishlistProps{
  onAddToWishList: () => void
  onRequestClose: () => void
}

export function AddProductToWishlist({
  onAddToWishList,
  onRequestClose
}: AddProductToWishlistProps){
  return (
    <span>
      Deseja Adicionar aos favoritos? 
      <button onClick={onAddToWishList}> Sim </button>
      <button onClick={onRequestClose}> Não </button>
    </span>
  )
}