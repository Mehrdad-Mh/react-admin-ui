import { singleUser } from "../../MenuData"
import SinglePages from "../../components/SinglePages/SinglePages"
import "./User.scss"

const User = () => {

      //fetch data and send to single components


  return (
    <div className="user">
    <SinglePages {...singleUser} />
    </div>
  )
}

export default User
