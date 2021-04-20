import axios from 'axios';

const key = '20295097-829d2b115353c9c8ba250dd1e';

const fetchImages = ({ searchQuery = '', currentPage = 1 }) => {
  return axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits)
}

export default {fetchImages};