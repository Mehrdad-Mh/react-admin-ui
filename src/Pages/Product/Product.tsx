import { singleProduct } from "../../MenuData"
import SinglePages from "../../components/SinglePages/SinglePages"
import "./Product.scss"
const Product = () => {

    //fetch data and send to single components
  return (
    <div className="product">
    <SinglePages {...singleProduct} />
    </div>
  )
}

export default Product
