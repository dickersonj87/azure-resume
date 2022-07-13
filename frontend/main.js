window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://joshuaresumecounter.azurewebsites.net/api/GetResumeCounter?code=nE2EaA79V8_zQyyVqXPzZ2ofExh-qW0pvQwGTu9wVvhfAzFuUJbTuQ==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl) . then(response => {
        return response.json()
        // return response
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
        console.log(response);
    });
    return count;
}