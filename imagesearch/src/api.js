import axios from '../node_modules/axios/';
const SearchImages =  async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization : "Client-ID 8xmOGgnXKLU0fcKQ1-Ktr4nwmBH0X3yJVju7bJk5UFs",
        },
        params:{
            query:term
        }
    });
    return response.data.results;
}
export default SearchImages;