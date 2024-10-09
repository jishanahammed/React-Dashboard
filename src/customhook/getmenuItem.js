import axios from 'axios';
const user = window.localStorage.getItem('user');
const token = window.localStorage.getItem('serviceToken');
const getlist = async () => {
  const userinfo = JSON.parse(user);
  const userId = userinfo.id;
  try {
    const response = await axios.get(`UserModuleMenu/MenuPermissionByUserId`,userId, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    return response.data;
  } catch (error) {
    // Handle error here if needed
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

  export {getlist};