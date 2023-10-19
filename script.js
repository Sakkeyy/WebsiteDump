function showMessage(){
    //Error message on radiobutton submit press
    alert("There is no serveri to lähettää the data to :(");
}

function updateTable() {
var firstName = document.getElementById('fname').value;
var lastName = document.getElementById('lname').value;

var table = document.getElementById('nameTable');
var newRow = table.insertRow(-1); //Insert a new row at the end of the table.

var cell1 = newRow.insertCell(0);
cell1.innerHTML = firstName;

var cell2 = newRow.insertCell(1);
cell2.innerHTML = lastName;

document.getElementById('fname').value = '';
document.getElementById('lname').value = '';
}

const images = ["https://st2.depositphotos.com/3528377/6481/i/450/depositphotos_64810021-stock-photo-policeman-with-folded-hands.jpg", "https://as1.ftcdn.net/v2/jpg/01/67/49/54/1000_F_167495470_5QZQq7rQDlLE35mX1Un8H3ObJVHfH8yC.jpg", "https://previews.123rf.com/images/elnur/elnur1210/elnur121001527/15766941-woman-police-isolated-on-white.jpg"];
    let currentIndex = 0;
    //Cycle
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        document.getElementById("slider-image").src = images[currentIndex];
    }
    //Cycle
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById("slider-image").src = images[currentIndex];
    }

    //Get the dimensions of the first image
    const firstImage = document.getElementById('slider-image');
    const firstImageWidth = firstImage.width;
    const firstImageHeight = firstImage.height;

    //Apply the same dimensions to the slider images
    const sliderImages = document.querySelectorAll('#slider-image');
    sliderImages.forEach((image) => {
        image.width = firstImageWidth;
        image.height = firstImageHeight;
    });

    function startCountdown() {
        let countdown = 60; //Initial countdown
        const countdownElement = document.getElementById('countdown');
    
        const countdownInterval = setInterval(function () {
            countdownElement.innerText = `Time left: ${countdown}`;
    
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                countdownElement.innerText = 'Countdown: Done!';
                //Restart the timer after 2 seconds.
                setTimeout(function (){
                    countdownElement.innerText = 'AGAIN!';
                    startCountdown();
                }, 2000);
            } else {
                countdown--;
            }
        }, 1000); //Update every second
    }
    
    //Start timer
    startCountdown();

    const apiKey = 'MH0QLY17SXF8TB6D'; //Own API key from AlphaVantage
const stockSymbol = 'AAPL'; //Stock symbol for APPLE
const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=1min&apikey=${apiKey}`;


//HTML element for the display result.
const stockPriceElement = document.getElementById('stock-price');

//Fetch stock price data from the API.
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    //Processing the API response
    const timeSeries = data['Time Series (1min)'];
    const lastRefreshed = data['Meta Data']['3. Last Refreshed'];

    //Last refreshed timestamp for price
    const stockPrice = timeSeries[lastRefreshed]['1. open'];

    //Newest stock price to HTML
    stockPriceElement.innerHTML = `Stock Price for APPLE [${stockSymbol}]: $${stockPrice}, Last updated: ${lastRefreshed}`;
  })
  .catch((error) => {
    //Throws error incase it fails to fetch API data
    stockPriceElement.textContent = 'Error: Unable to fetch stock price';
  });