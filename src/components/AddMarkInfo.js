import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addStudentsMark } from "./functions/admin";
import Navbar from "./Navbar";

export default function AddMarkInfo() {
  const [name, setName] = useState("");
  const [enrollNum, setEnrolNum] = useState("");
  const [course, setCourse] = useState("");
  const [maths, setMaths] = useState("");
  const [createdBy,setCreatedBy] = useState("")
  const [physics, setPhysics] = useState("");
  const [chemistry, setChemistry] = useState("");
  const [status,setStatus] = useState("")
 
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const { admin } = useSelector((state) => ({ ...state }));

  const empty = () => {
    setName("");
    setEnrolNum("");
    setChemistry("");
    setMaths("");
    setPhysics("");
    setCourse("");
    createdBy("")
  };

  setTimeout(() => {
    setMessage("");
  }, 10000);

  setTimeout(() => {
    setError("");
  }, 5000);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleCourse = (e) => {
    setCourse(e.target.value);
  };
  const handleEnrollNumbers = (e) => {
    setEnrolNum(e.target.value);
  };
  const handlePhysics = (e) => {
    setPhysics(e.target.value);
  };
  const handleChemistry = (e) => {
    setChemistry(e.target.value);
  };
  const handleMaths = (e) => {
    setMaths(e.target.value);
  };
  const handleCreatedBy =(e) =>{
    setCreatedBy(e.target.value)
  }
  

  useEffect(() => {
    
  
   handleSubmit()
  }, [])
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await addStudentsMark(
        admin.token,
        name,
        enrollNum,
        course,
        chemistry,
        maths,
        physics,
        createdBy,
      );
      
      setMessage(data.message);
      empty();
    } catch (error) {
        setError(error.response.data.message);
        console.log(error);
      empty();
    //   setError(error?.response.data.message || "Something went wrong");
    }
  };
  console.log(error);

  return (
    <>
      <Navbar />

      {message && (
        <div class="alert alert-success shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{message}</span>
          </div>
        </div>
      )}
      {error && (
        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        </div>
      )}

      <p className="flex align-middle justify-center mt-3 text-3xl italic">
        Add students Marks
      </p>
      <div class="py-12 px-56 align-middle justify-center ">
        <form class="w-full max-w-lg " onSubmit={handleSubmit}>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name="name"
                value={name}
                placeholder="Student name"
                onChange={handleName}
              />
            </div>
            <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Course
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name="course"
                value={course}
                placeholder="Course name"
                onChange={handleCourse}
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Enrolled Number
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                name="enrolledNum"
                value={enrollNum}
                placeholder="Enrolled number"
                onChange={handleEnrollNumbers}
              />
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Maths Mark
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                name="maths"
                max="100"
                value={maths}
                onChange={handleMaths}
              />
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Chemistry Mark
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                max="100"
                value={chemistry}
                name="chemistry"
                onChange={handleChemistry}
              />
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Physics Mark
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                max="100"
                name="physics"
                value={physics}
                onChange={handlePhysics}
              />
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Added By
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="Text"
                name="createdBy"
                value={createdBy}
                onChange={handleCreatedBy}
              />

              <button class=" w-60   mt-5  btn btn-success " type="submit">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
