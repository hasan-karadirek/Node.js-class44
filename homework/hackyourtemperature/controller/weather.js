import CustomError from '../helpers/CustomError.js';
import keys from '../sources/keys.js'
const getWeather = async(req, res, next) => {
  
  const { cityName } = req.body;

  if (!cityName) {
    return next(
      new CustomError(
        'There is no cityName property in your request.body. Request.body JSON Model: {"cityName":"Amsterdam"}',
        400
      )
    );
  }
try {
  const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${keys}`);
  const data=await response.json()
  if(!data){
    return res.status(200).json({
      success: false,
      weatherText: "City is not found!",
    })
  }
  
  
  const temperature = data.main.temp;

  return res.status(200).json({
    success: true,
    weatherText: `The temperature in ${cityName} is:${temperature}!.`,
  });
  
} catch (err) {
  return res.status(400).json({
    success:false,
  message:err.message
})
  
}
  
};

export default getWeather;
