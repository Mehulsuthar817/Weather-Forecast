import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import NodeGeocoder from "node-geocoder";

let data;

const geocoder = NodeGeocoder({
  provider: "openstreetmap",
  requestOptions: {
    headers: {
      'User-Agent': 'WeatherAppDev/1.0 kasrubhai528@gmail.com)' 
    }
  } 
});

const location = "india"; // or "India", "Tokyo", etc.
const res = await geocoder.geocode(location);

const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
  res.render("index.ejs");
})

app.post("/submit", async (req, res) => {
  const location = req.body["area"]; // or "India", "Tokyo", etc.
  const ress = await geocoder.geocode(location);
  console.log(ress[0].latitude, ress[0].longitude);
  try{
    const response = await axios.get(API_URL, {
      params: {
        lat: ress[0].latitude,
        lon: ress[0].longitude,
        appid: "24ace5b292e4172298f40f8b3d1aacac",
        units: "metric"
      }
    });
  const result = response.data;
  res.render("index.ejs",{
    data:result, 
    name:req.body["area"]  
  });
    } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});
console.log(res[0].latitude, res[0].longitude);
app.listen(port, () => {
  console.log(`your server is running on port ${port}`);
});
