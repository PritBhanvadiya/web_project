const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_names = document.getElementsById("city_names");

const getinfo = async (event) => {
    event.preventDefault();

    let cityvel = cityName.Value;
    if (cityvel === " ") {
        city_names.innerText = `Plz Enter City`;
    } else {
        try{
            let url = `api.openweathermap.org/data/2.5/weather?q=${cityvel}&appid=b9886326d494982045c9048a70da83f1`
            const responce = await fetch(url);
        }catch{
        city_names.innerText = `Plz Enter City`;

        }
        
    }
}

submitBtn.addEventListener("click", getinfo)