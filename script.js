const targetUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Miami,FL/2025-06-01?unitGroup=us&include=days,hours&elements=datetime,tempmax,tempmin,temp,humidity,conditions";

async function getWeatherData()
{
    try {
        const response = await fetch(targetUrl);

        if(!response.ok)
        {
            throw new Error('HTTP Error! Status : ' + response.status);
        }

        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error('Failed to fetch data: ', error);
    }
}

getWeatherData();