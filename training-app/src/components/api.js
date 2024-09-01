import axios from 'axios';
let getData =  async () => {
    let response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization: "Client-ID #ACCESS_KEY"
        },
        params:{
            query:"car"
        }
    });
    return response;
}