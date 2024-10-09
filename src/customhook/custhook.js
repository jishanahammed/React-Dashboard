import axios from 'axios';

const token = window.localStorage.getItem('serviceToken');

const postData = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };

  const post = async (url, data) => {
    try {
        const response = await axios.post(url, data,
          
          {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        },
      );
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}; 

const put = async (url, data) => {
  try {
      const response = await axios.put(url, data, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });
      return response.data;
  } catch (error) {
      return error.response.data;
  }
}; 
const getByIdWithToken = async (url, id) => {
  try {
    const response = await axios.get(`${url}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}` // Assuming Bearer token authentication
      }
    });
    return response.data;
  } catch (error) {
    // Handle error here if needed
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

const getlist = async (url,) => {
  try {
    const response = await axios.get(`${url}`, {
      headers: {
        Authorization: `Bearer ${token}` // Assuming Bearer token authentication
      }
    });
    return response.data;
  } catch (error) {
    // Handle error here if needed
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

const getlistwithouttoken = async (url,) => {
  try {
    const response = await axios.get(`${url}`, {
    });
    return response.data;
  } catch (error) {
    // Handle error here if needed
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

const deleteitem = async (url, id) => {
  try {
    const response = await axios.delete(`${url}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};

  export {postData,post,getByIdWithToken,getlist,getlistwithouttoken,put,deleteitem,download};