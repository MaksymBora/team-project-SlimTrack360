import axios from 'axios';

const BASE_URL = 'url';

export const addWater = async (value) => {
  try {
    const response = await axios.post(`${BASE_URL}/water`, {
      date: new Date().toISOString(),
      water: value,
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error adding water:', error);
  }
};
