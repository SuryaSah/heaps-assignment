import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors())
const port = 3000;

async function fetchData(){
    const response = await axios.get('https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=jQuery110201501142482738942_1450853406889&tags=mount+rainier&tagmode=any&format=json&_=1450853406890');
    const newData = response.data.replace('jQuery110201501142482738942_1450853406889(', '').slice(0, -1);
    return newData;
}
app.get('/getPhotos', async (req, res)=>{
    try {
        const response = await fetchData();
        // console.log('data is',response);
        res.status(200).send(JSON.parse(response));
      } catch (error) {
        // console.error(error);
        res.status(400).send(error);
    }
});

app.get('/getPhotos/:id', async(req,res)=>{
    try {
        const response = await fetchData();
        const parseResponse = JSON.parse(response);
        const filterData = parseResponse.items.filter((item)=> item.author_id === req.params.id);
        res.status(200).send(filterData);
    } catch(error) {
        // console.error(error);
        res.status(400).send(error);
    }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});