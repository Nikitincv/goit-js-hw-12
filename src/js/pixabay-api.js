import axios from "axios";

export async function getPhotos (userQuery, page) {
   const searchParams = new URLSearchParams({
    key:"45431575-a54d9a4f673da9f6ecaf0fabb", 
    page ,
    per_page: 15,
    q: userQuery, image_type:"photo", 
    orientation:"horizontal", 
    safesearch: true})

    const {data} = await axios(`https://pixabay.com/api/?${searchParams}`)
   
    return data;
}


