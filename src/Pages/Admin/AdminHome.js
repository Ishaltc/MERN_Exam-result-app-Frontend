import { Link } from "react-router-dom";
import AddMarkInfo from "../../components/AddMarkInfo";
import Navbar from "../../components/Navbar";
import TableDemo from "../../components/TableDemo";


export default function AdminHome() {
  return (
    <div  className="">
    <Navbar/>
     <div className="px-5 py-10">
        
     <h1
                style={{
                    display: 'flex', justifyContent: 'center', padding: '10px',
                    border: '8px solid #b4f0b4', color: 'rgb(11, 167, 11)'
                }}>
               Mark info Table
            </h1>
            <Link to ="/admin/addMarkInfo">
            <button className="btn btn-accent mt-4 ">Add Data
            </button>
            </Link>
            <TableDemo/>
     </div>
    </div>
  )
}
