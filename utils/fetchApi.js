import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '2dc16a99ccmshfab78b67b936d94p1ef7eejsnb19ab9532d58'
          },
         })
         console.log("data")
         console.log(data)
return data;
}

