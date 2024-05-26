import { topDealUsers } from "../../MenuData"
import "./TopBox.scss"




const TopBox = () => {
  return (
    <div className="topbox">
   <h2>
    بیشترین معاملات
   </h2>
   <div className="list">

   { topDealUsers.map((user) => (

      <div className="listItem" key={user.id}>
        <img src={user.img} alt="" />

        <div className="userinfo">
            <span className="username"> {user.username} </span>
            <span className="useremail"> {user.email} </span>
        </div>

        <span className="useramount"> $ {user.amount} </span>
      </div> 
       
)) }


   </div>
    </div>
  )
}

export default TopBox
