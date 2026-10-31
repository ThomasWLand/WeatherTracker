const targetUrl = "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civil&output=xml";

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