import { Link } from "react-router-dom"
import "./Menu.scss";
import  {menu}  from "../../MenuData";


export default function Menu() {
  return (
    <div className="menu">
    
    
      {menu.map((mItem) => (
        <div className="item" key={mItem.id}>
        <span className="title"> {mItem.title} </span>
       {mItem.listItems.map((infoItem) => (
        <Link to={infoItem.url} className="menuIcon">
          <img src={infoItem.icon} alt="menu home icon" />
          <span className="listItemTitle">   {infoItem.title}  </span>
          </Link>
       ))}   
        </div>
      ))} 
      
     

    </div>
  )
}
