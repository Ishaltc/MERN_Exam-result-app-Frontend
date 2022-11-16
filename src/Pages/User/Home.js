import { useState } from "react";
import UserNavbar from "../../userComponents/Navbar";
import Tables from "../../userComponents/Table";


export default function Home() {
 const [search,setSearch] = useState("")
   
  return (
    <div >
        <UserNavbar search={search} setSearch={setSearch} />
        <div className="px-5 py-5">
        <h1 
                style={{
                    display: 'flex', justifyContent: 'center', padding: '10px' ,
                    border: '8px solid #b4f0b4', color: 'rgb(11, 167, 11)'
                }}>
               Mark lists
            </h1>
            </div>
      <Tables search={search} setSearch={setSearch}   />
    </div>
  )
}
