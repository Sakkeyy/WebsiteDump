# WebsiteDump
**IN00DL12-3002- Web ohjelmointi verkkosivu**

Olen tähdännyt numeroon 5 ja täyttänyt kaikki tarvittavat kohdat arviointikriteereistä verkkosivuni luomisessa. Joissakin esimerkeissä tulen viittaamaan koodin pätkiin. HTML & CSS paikkapaikoin itse selitteisiä

**HTML (5/5) 25%**

1. Basic HTML structure is present.
2. HMTL structure with clear content differentation(Headings, paragraphs, lists)
3. Use of forms, links and media. (there are links to KRP and photos)
4. Tables are effectively used. (First name Last name list)
5. Consistent use of semantic HTML througout (<headers>, <mains>, <sections> etc.)

**CSS (5/5) 25%**
1. Basic CSS styling (colors, fonts)
2. Use of classes and IDs to style spesific elements
3. Implementation of responsive design elements
4. Use of layouts for advanced user interfaces (I used flexbox for the SELF ADJUSTING TEXT on the top of the web-page to stay consistent across viewmodel changes and also in HMTL files using
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">)
```
5. Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.(this is HIGHLY subjective)

**JavaScript Basics (5/5) 25%**
1. Simple interactions (Alerts on button click on the radiobuttons "Yes/No")
2. Multiple event listeners and basic DOM manipulations(Button click triggers PrevImage(), nextImage(), updateTable() & showMessage(), countdown timer has setInterval. For DOM there's updateTable() for creating new table rows and cells with added data from user. Stock price display and updating countdown timer)
3. Use of arrays, objects, and functions(Array for image slider, accessing and extracting data from JS objects like "Meta Data" "Time Series" "Last Refreshed" for Stock prices. and for functions there are plenty already named).
4. Advanced logic, looping through data, and dynamic DOM updates.(startCountdown() decrements value while updating the display and handling also the restarting of the timer. Looping through data by iterating the images of imageslider with prevImage() and nextImage() dynamically updating DOM by updating the 'src' attribute of slider-image and updating display with the timer.)
5. Consistent use of Object-Oriented JavaScript principles (I implemented my countdown timer with a class for easy manipulation of updating the display, counting down and reset + start)

**Asynchronous Operations (5/5) 25%**
1. Use of timers. (I have implemented a timer to topright corner that resets itself)
2. Succesful implementation of an AJAX call or fetch (I have called for an external API, AlphaVantage to fetch the latest stock price)
``` In this example, APPLE
const apiKey = 'MH0QLY17SXF8TB6D'; //Own API key from AlphaVantage
//where we get out API response
const aaplApiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=${apiKey}`; 
    const stockPriceElement = document.getElementById('stock-price');

    stockPriceElement.innerHTML = 'Stock Price: Loading...'; //while we wait

    fetch(aaplApiUrl)
        .then((response) => response.json())
        .then((data) => {
            const timeSeries = data['Time Series (1min)'];
            const lastRefreshed = data['Meta Data']['3. Last Refreshed'];
            const stockPrice = timeSeries[lastRefreshed]['1. open'];

            stockPriceElement.innerHTML = `Stock Price for AAPL: $${stockPrice}, Last updated: ${lastRefreshed}`;
        })
```
3. Data from the asynchronous call is displayed on the webpage (At the bottom of the page i have displayed the fetched data)
4. Error handling is implemented for failed API calls (In a case of emergency my code will throw an error if API data is not available)
```
.catch((error) => {
    //Throws error incase it fails to fetch API data
    stockPriceElement.textContent = 'Error: Unable to fetch stock price';
  }
```
5. Effective use of asynchronous data to enhance user experience(I chose to implement two buttons to fetch two different stock prices, in my project for APPLE and MICROSOFT)
```
document.getElementById('microsoft-stock').addEventListener('click', () => {
    const microsoftApiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=${apiKey}`; //Easy to implement by only chaning the "MSFT" to any of the existing stock keys out there.
```

