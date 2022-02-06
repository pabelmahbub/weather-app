const API_KEY=`05885174fcd8270ea2df08e682adda68`;

const searchTemparature=()=>{
    const city = document.getElementById('city-name').value;

     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
   console.log(url);

   fetch(url)
   .then(res => res.json())
   .then(data=> displayTemparature(data))
   console.log(url);
}   

const setInnerText=(id,text)=>{
    document.getElementById(id).innerText = text;
}

const displayTemparature = temparature =>{
    setInnerText('city',temparature.name);
    setInnerText('tempa',temparature.main.temp);
    setInnerText('tempa-1',temparature.main.feels_like);
    setInnerText('country-name',temparature.sys.country);
    setInnerText('wind',temparature.wind.speed);
    setInnerText('weather',temparature.weather[0].main);
    setInnerText('weather-des',temparature.weather[0].description);
    // console.log(temparature.weather.main);

    const url=`http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;

    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src',url)

}