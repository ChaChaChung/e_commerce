import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8000/api';
const API_BASE_URL = 'http://192.168.1.201:14666/api';
// const API_BASE_URL = 'http://192.168.50.65:8000/api';

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

const getEventsData = async (teamId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get/team_past_events/${teamId}`);
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching test data:', error);
    throw error;
  }
};

const getLeagueEventsData = async (selectedDate) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get/league_next_events/${selectedDate}`);
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching test data:', error);
    throw error;
  }
};

// 確保這裡導出這些函數
export {
  getTestData,
  getEventsData,
  getLeagueEventsData,
};
