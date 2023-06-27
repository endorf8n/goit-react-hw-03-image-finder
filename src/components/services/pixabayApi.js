import axios from 'axios';

const API_KEY = '36999899-ea6ffd3591d47a48690e5d95e';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: API_KEY,
    orientation: 'horizontal',
    image_type: 'photo',
    per_page: 12,
  },
});

export const getImages = async (q, page) => {
  const { data } = await instance.get(`?q=${q}&page=${page}`);

  return data;
};
