import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const API_URL = 'https://pixabay.com/api/';
const KEY = '27888557-96adad5e55b58177e65876141';

export async function getImages(query, page) {
  const BASE_SEARH_PARAMS = {
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page,
    q: query,
  };
  
  try {
    const response = await axios.get(API_URL, {
      params: BASE_SEARH_PARAMS,
    })
      return response.data; 
  } catch (error) {
    Notify.failure('Oops... Something went wrong');
  }
  
  

  // const response = await axios.get(API_URL, {
  //   params: BASE_SEARH_PARAMS,
  // });

//   return response.data;
}