import { itMatchesOne } from "daisyui/src/lib/postcss-prefixer/utils";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  deleteMarkList,
  getMarkInfo,
  getMarkInfoForEdit,
} from "./functions/admin";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditModel from "./EditModel";
import { Link } from "react-router-dom";

export default function TableDemo() {
  const [students, setStudents] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [model, setModel] = useState(false);
  const [editMarkList, setEditMarkList] = useState("");
  const [ids, setIds] = useState("");
  const { admin } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    allMarkList();
    removeHandler();
  }, [refresh]);

  const allMarkList = async () => {
    try {
      const res = await getMarkInfo(admin.token);

      setStudents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeHandler = async (enrollNum) => {
    setRefresh(enrollNum);
    const data = await deleteMarkList(admin.token, enrollNum);
  };
  const handleShow = (enrollNum) => {
    setIds(enrollNum);
    setModel(true);
  };

  useEffect(() => {
    getData();
  }, [ids]);

  //taking a markInfo for deleting
  const getData = async () => {
    const { data } = await getMarkInfoForEdit(admin.token, ids);
    setEditMarkList(data);
  };

 

  const handleClose = () => {
    setModel(false);
  };

  return (
    <>
      <div className="pt-10">
       
          <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th>En-No</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Maths</th>
                  <th>Physics</th>
                  <th>Chemistry</th>
                  <td>Total</td>
                  <td>Status</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {students &&
                  students.map((item, i) => (
                    <tr key={i}>
                      <th>{item?.enrollNum}</th>
                      <td>{item?.name}</td>
                      <td>{item?.course}</td>
                      <td>{item?.maths}</td>
                      <td>{item?.physics}</td>
                      <td>{item?.chemistry}</td>
                      <td>{item?.total}</td>
                      {item?.total >= 200 ? (
                        <Link to="/">
                          <td htmlFor="my-modal" className="text-green-700">
                            pass
                          </td>
                        </Link>
                      ) : (
                        <td className="text-red-700">Fail</td>
                      )}
                      <td>
                        {/* <EditIcon
                          onClick={() => handleShow(item?.enrollNum)}
                          className="cursor-pointer"
                          style={{ color: "green" }}
                        /> */}

                    
                        <DeleteIcon
                          className="cursor-pointer"
                          style={{ color: "red" }}
                          onClick={() => removeHandler(item.enrollNum)}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
      
      </div>
    </>
  );
}
