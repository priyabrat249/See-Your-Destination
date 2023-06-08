import axios from 'axios';

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export  const getPlaceDetails = async (type,sw,ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          
        },
        headers: {
          'X-RapidAPI-Key': '3a50d22109msh9138a48215b8416p17e7abjsn461926133def',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}


