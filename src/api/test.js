import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8000/api';
const API_BASE_URL = 'http://192.168.50.65:8000/api';

const getTestData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get/all_teams`);
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching test data:', error);
    throw error;
  }
};

export default getTestData;
