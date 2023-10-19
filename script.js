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

    class CountdownTimer {
        constructor(countdownElement, initialTime) {
          this.countdownElement = countdownElement;
          this.initialTime = initialTime;
          this.time = initialTime;
          this.interval = null;
        }
      
        start() {
          this.reset();
          this.updateCountdown();
      
          this.interval = setInterval(() => {
            if (this.time <= 0) {
              clearInterval(this.interval);
              this.countdownElement.innerText = 'AGAIN!';
              setTimeout(()=>{
              this.reset();
              this.start();
              }, 2000); //wait 2000ms to reset and start timer again
            } else {
              this.time--;
              this.updateCountdown();
            }
          }, 1000); //wait 1000ms to update timer
        }
      
        updateCountdown() {
          this.countdownElement.innerText = `Review Time: ${this.time}`;
        }
      
        reset() {
          clearInterval(this.interval);
          this.time = this.initialTime;
          this.updateCountdown();
        }
      }
      
      const countdownElement = document.getElementById('countdown');
      const initialTime = 60; //Initial time of 60seconds
      const countdownTimer = new CountdownTimer(countdownElement, initialTime);
      countdownTimer.start();

const apiKey = 'MH0QLY17SXF8TB6D'; //Own API key from AlphaVantage
document.getElementById('apple-stock').addEventListener('click', () => {
    //Only need to change "AAPL" with stock symbol of choice.
    const aaplApiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=${apiKey}`;
    const stockPriceElement = document.getElementById('stock-price');

    stockPriceElement.innerHTML = 'AAPL Stock Price: Loading...';

    fetch(aaplApiUrl)
        .then((response) => response.json())
        .then((data) => {
            const timeSeries = data['Time Series (1min)'];
            const lastRefreshed = data['Meta Data']['3. Last Refreshed'];
            const stockPrice = timeSeries[lastRefreshed]['1. open'];

            stockPriceElement.innerHTML = `Stock Price for AAPL: $${stockPrice}, Last updated: ${lastRefreshed}`;
        })
        //Throws error if unable to fetch API data
        .catch((error) => {
            stockPriceElement.textContent = 'Error: Unable to fetch stock price';
        });
});

document.getElementById('microsoft-stock').addEventListener('click', () => {
    const microsoftApiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=${apiKey}`;
    const stockPriceElement = document.getElementById('stock-price');

    stockPriceElement.innerHTML = 'MSFT Stock Price: Loading...';

    fetch(microsoftApiUrl)
        .then((response) => response.json())
        .then((data) => {
            const timeSeries = data['Time Series (1min)'];
            const lastRefreshed = data['Meta Data']['3. Last Refreshed'];
            const stockPrice = timeSeries[lastRefreshed]['1. open'];

            stockPriceElement.innerHTML = `Stock Price for MSFT: $${stockPrice}, Last updated: ${lastRefreshed}`;
        })
        .catch((error) => {
            stockPriceElement.textContent = 'Error: Unable to fetch stock price';
        });
});