import axios from "axios";

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = KEY;
// axios.defaults.params = {
//     image_type: 'photo',
//     orientation: 'horizontal',
//     per_page: 12,
// }

const BASE_URL = 'https://pixabay.com/api/'
const KEY = '35726125-331cc533ccb21935830df22b4';
const params = 'image_type=photo&orientation=horizontal&per_page=12'

export const fetchedImages = async (query, page) => {

    const response = await axios.get(
        `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&${params}`
    )

    return response.data;
}

//=======================================================================================
// export class ApiFetch {

//     constructor() {
//         this.searchQuery = '';
//         this.page = 1;
//     }

//     async fetchImages() {
//         // console.log(this)
//         const response = await axios.get(
//             `${BASE_URL}?q=${this.searchQuery}&page=${this.page}&key=${KEY}&${params}`,
//             // { signal: abortCtrl.signal, }
//         );
//         // console.log(response)

//         this.page += 1;

//         if (response.data.hits === [] || response.data.hits.length === 0) {
//             throw new Error();
//         }

//         return response.data.hits;
//     }

//     resetPage() {
//         this.page = 1;
//     }

//     get query() {
//         return this.searchQuery;
//     }

//     set query(newQuery) {
//         this.searchQuery = newQuery;
//   }
// }


//===================================================================================
// export function getBackendRequest(requestValue, page) {
//     console.log(page)
//     const BASE_URL = 'https://pixabay.com/api/'
//     const ACCESS_KEY = '35726125-331cc533ccb21935830df22b4';
//     // let page = 1;
    
//     // // console.log(request)
//     // if (request) {
//     //     // console.log('we have request')
//     //     page += 1;
//     //     // console.log(page)
//     // }

//     return fetch(`${BASE_URL}?q=${requestValue}&page=${page}&key=${ACCESS_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
//         .then(response => response.json())
//         // .then(response => {page+=1});;
    


// }