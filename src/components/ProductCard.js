import ProductImage from '../images/image-product-desktop.jpg'
import ProductImageMobile from '../images/image-product-mobile.jpg'
import Button from './Button'
import Price from './Price'

import IconCart from '../images/icon-cart.svg';

import './ProductCard.scss'

const ProductCard = () => {
  return (
    <div id="block-product">
      <img alt='image-desktop' className='image-desktop' src={ProductImage}></img>
      <img alt='image-mobile' className='image-mobile' src={ProductImageMobile}></img>
      <div id='block-product-details'>
        <h4>Perfume</h4>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <Price oldPrice={169.99} currentPrice={149.99} />
        <Button><img alt='icon-cart' src={IconCart} /> Add To Cart</Button>
      </div>
    </div>
  )
}

export default ProductCard