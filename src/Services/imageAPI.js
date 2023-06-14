import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '35726125-331cc533ccb21935830df22b4';
const params = 'image_type=photo&orientation=horizontal&per_page=12';

export const fetchedImages = async (query, page) => {

    const response = await axios.get(
        `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&${params}`
    )
    return response.data;
}