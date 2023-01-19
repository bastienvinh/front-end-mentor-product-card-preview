import './Button.scss';

const Button = ({ children }) => {
  return(
    <button className='btn btn-green'>{children}</button>
  )
}

export default Button
