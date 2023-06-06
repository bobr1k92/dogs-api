import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_IyKwMeuxrKM06lE6boidtlFYoSn0qupl';

export const fetchBreeds = async () => {
    const response = await axios.get('/breeds');

    return response.data;
};


export const fetchDogByBreed = async breedId => {
    const response = await axios.get('/images/search', {
        params: {
            breed_id: breedId,
        },
    });
    return response.data[0];
}
