import axios from 'axios';

const API_BASE_URL = 'http://localhost:8088/demo';

const getTestData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/test`);
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching test data:', error);
    throw error;
  }
};

export default getTestData;
