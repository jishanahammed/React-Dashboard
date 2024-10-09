import axios from 'axios';
const login = async (url, data) => {
    console.log("check",url, data);
    try {
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      return error.response.data;
    }
  };


  export{login}