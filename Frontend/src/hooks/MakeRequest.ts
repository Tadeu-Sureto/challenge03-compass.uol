import { BodyRequest } from "../models/interfaces";

const MakeRequest = async (URL: string, method: string, body: BodyRequest | undefined = undefined) => {
    return fetch(URL, {
       method,
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(body)
   })
   .then(response => response.json())
   .then(data => {
       return data;
   })
}

 export default MakeRequest