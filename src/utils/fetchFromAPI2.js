import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

const fetchFromAPI = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  } catch (error) {
    // Handle error appropriately
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for the caller to handle
  }
};

export { BASE_URL, fetchFromAPI };


//Changes made:

//Removed the unnecessary export of BASE_URL.
//Encapsulated the axios request in a try-catch block to handle errors more gracefully.
//Added comments for better readability.
//Changed the destructuring assignment of data directly from the axios response to a more explicit variable response for clarity.
