const submit=document.getElementById('sub-btn').addEventListener('click',function(){
    const city=document.getElementById('city').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=0c39301b8da3f78a68cfb269698ae4c1')
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        const cityName=data.name;
        const tem=data.main.temp;
        const temp=tem-273.15;
        const description=data.weather[0].description;

        document.getElementById('cityName').innerText=cityName;
        document.getElementById('temp').innerText=temp.toFixed(1);
        document.getElementById('des').innerText=description;
        
        document.getElementById('city').value="";
    })
    .catch(res=>alert("Please type right name..! "));
    
})