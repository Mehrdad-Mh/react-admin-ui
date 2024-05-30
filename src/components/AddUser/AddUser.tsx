import { GridColDef } from "@mui/x-data-grid";
import "./AddUser.scss";


type Props = {
    slug:string;
    columns:GridColDef[];
    setOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

const AddUser = (props:Props ) => {

    const handleSubmit = (e) => {

        e.preventDefault();

        //add new item 
        // axios.post(`/api/${slug}s , {any data}`)

    }

  return (
    <div className="adduser">
        <div className="modal">

        <div className="closeBtn" onClick={() => props.setOpen(false)}>X</div>

        <h2>  افزودن {props.slug} جدید  </h2>

        <form onSubmit={handleSubmit}>
         {props.columns.filter( item => item.field !== "id" && item.field !== "img")
         .map((column) => (
            
             <div  className="item" >
                 <label>  {column.headerName}  </label>
                 <input type={column.type} placeholder={column.field} />

             </div>
         )
        )}
         <button>  ارسال  </button>
        </form>
        </div>
    </div>
  );
};

export default AddUser;
