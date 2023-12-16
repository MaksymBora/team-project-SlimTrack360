import axios from 'axios';

const BASE_URL = 'https://healthyhub-emsa.onrender.com/api/auth/';

export const addWater = async (value) => {
  try {
    const response = await axios.post(`${BASE_URL}/addWater`, {
      date: new Date().toISOString(),
      water: value,
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error adding water:', error);
  }
};
