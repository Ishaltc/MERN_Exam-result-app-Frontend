import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { getMarkListData } from "./functions/user";
export default function Tables({ search, setSearch }) {
  const [users, setUsers] = useState([]);
  //   const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await getMarkListData(user.token);
      setUsers(res);
      setFilter(res);
    } catch (error) {
      console.log(error);
    }
  };

  if (search == "") {
    getData();
  }

  const columns = [
    {
      name: "En-No",
      selector: (row) => row.enrollNum,
      sortable: true,
    },

    {
      name: "Students Name",
      selector: (row) => row.name,
    },
    {
      name: "Course",
      selector: (row) => row.course,
    },
    {
      name: "Maths",
      selector: (row) => row.maths,
    },
    {
      name: "Physics",
      selector: (row) => row.physics,
    },
    {
      name: "Chemistry",
      selector: (row) => row.chemistry,
    },
    {
      name: "Total",
      selector: (row) => row.total,
    },
    {
      name: "Status",
      selector: (row) => row.statusInfo,
    },
    {
      name: "Added by",
      selector: (row) => row.createdBy,
    },
  ];

  useEffect(() => {
    const result = users.filter((item) => {
      return item.enrollNum == search;
    });
    setFilter(result);
  }, [search]);

  return (
    <>
      <div className="data-card" style={{ padding: "40px 200px" }}>
      
        <DataTable
          columns={columns}
          data={filter}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="900px"
          //   selectableRows
          //   selectableRowsHighlight
          highlightOnHover
          persistTableHead
          subHeader
          style={{ border: "1px solid" }}
          subHeaderComponent={
            <input
              type="text"
              placeholder="Search by Enroll-No"
              className="w-25 form-control"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
        />
      </div>
    </>
  );
}
