import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { getMarkInfoForEdit } from "./functions/admin";
export default function EditModel({ setModel, editMarkList,ids }) {

const [physics,setPhysics] = useState("")
const [chemistry,setChemistry] = useState("")
const [maths,SetMaths] = useState("")
const { admin } = useSelector((state) => ({ ...state }));


  const handelModel = () => {
    setModel(false);
  };


const handlePhysics =(e) =>{
 setPhysics(e.target.value)
}

const handleChemistry =(e) =>{
    setChemistry(e.target.value)
}

const handleMaths =(e) =>{
    setPhysics(e.target.value)
}

const handleSubmit= async (e)=>{
    e.preventDefault()
    try {
 
        
    } catch (error) {
        console.log(error);
    }
  


}






  return (
    <div className="flex items-center ">
      <Modal.Body className="py-15 px-60 ">
        <form onSubmit={handleSubmit}>
        <div class="w-full max-w-xs">
          <form class="bg-white shadow-md rounded px-8  pb-8 ">
            <div class="mb-1">
              <p className="text-center text-lg ">{editMarkList.name}</p>
            </div>

            <div class="">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Maths
              </label>
              <input
                class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 "
                id="maths"
                type="number"
                max="100"
                min="0"
                onChange={handleMaths}
                placeholder={editMarkList.maths}
              />
            </div>
            <div class="">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="">
                Physics
              </label>
              <input
                class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 "
               
                type="number"
                max="100"
                min="0"
                onChange={handlePhysics}
                // value={physics}
                placeholder={editMarkList.physics}
              />
            </div>
            <div class="mb-2">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="">
                Chemistry
              </label>
              <input
                class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3"
                id="chemistry"
                type="number"
                max="100"
                min="0"
                onChange={handleChemistry}
                placeholder={editMarkList.chemistry}
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Save Changes
              </button>
              <button className=" btn btn-warning" onClick={handelModel}>
                cancel
              </button>
            </div>
          </form>
        </div>
        </form>
      </Modal.Body>
    </div>
  );
}
