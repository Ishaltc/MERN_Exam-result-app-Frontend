import axios from "axios";

export const getMarkListData = async (token) => {
   
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/getMarkListData`,
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
