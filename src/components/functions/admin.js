import axios from "axios";

export const addStudentsMark = async (
  token,
  name,
  enrollNum,
  course,
  chemistry,
  maths,
  physics,
  createdBy
) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/addNewMarkList`,
      {
        name,
        enrollNum,
        course,
        chemistry,
        maths,
        physics,
        createdBy,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

//get all students info
export const getMarkInfo = async (token) => {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_API_URL}/getStudentsInfo`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

//delete mark list
export const deleteMarkList = async (token, enrollNum) => {
  try {
    const data = await axios.delete(
      `${process.env.REACT_APP_API_URL}/deleteMarkList/${enrollNum}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};

//taking mark info for edit
export const getMarkInfoForEdit = async (token, enrollNum) => {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_API_URL}/getMarkInfoForEdit/${enrollNum}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};


// editing mark
export const editingMark = async (token, enrollNum) => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_API_URL}/editingMark/${enrollNum}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      console.log(error);
      return error.response.data.message;
    }
  };