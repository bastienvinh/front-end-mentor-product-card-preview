import './Price.scss'

const Price = ({ currentPrice, oldPrice }) => {
  return (
    <div className="price">
      <span className="current-price">${currentPrice}</span>
      <span className="old-price">${oldPrice}</span>
    </div>
  )
}

export default Price