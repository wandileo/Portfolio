           // create days of week array
           var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

           // define types of weather
           var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

           // set min and max temps
           var maxTemp = 110;
           var minTemp = 32;

           // cost (to you) of a cup of muffin
           var lemonadeCost = 0.5;

           // array for storing daily temps
           var dailyTemp = [];

           // listen for order
           document.getElementById("OpenTheStand").addEventListener("click", openTheStand);

           // make the week's weather
           generateWeather();

           /**
           generates weather for the week
           **/
           function generateWeather() {
               var weatherToday;
               var tempToday;
               for (var i = 0; i < days.length; i++) {
                   weatherToday = weather[Math.floor(Math.random() * weather.length)];
                   tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
                   dailyTemp[i] = tempToday;
                   document.getElementById("7DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
               }
           }

           /**
           calculates plastic of muffin sold
           **/
           function openTheStand() {
               var muffinsSold = 0; // daily
               var totalMuffins = 0; // weekly
               var muffinsLeft = 0; // left to sell

               // clear out previous results
               resetForm();

               // get input
               var numMuffins = Number(document.getElementById("numMuffins").value);
               var muffinPrice = Number(document.getElementById("muffinPrice").value);


               for (var i = 0; i < days.length; i++) {

                   // muffins sold depends on temp and price
                   muffinsSold = Math.floor(dailyTemp[i] / muffinPrice);

                   // how many muffins do we have now?
                   muffinsLeft = numMuffins - totalPlastics;

                   // we can't sell more than we have
                   if (muffinsSold > muffinsLeft) {
                       muffinsSold = muffinsLeft;
                   }

                   // increase the weekly total
                   totalMuffins = muffinsSold + totalmuffins;

                   // display daily total
                   document.getElementById("result").innerHTML += "<p>" + days[i] + ", you sold " + muffinsSold + " plastics of muffin.</p>";

               }

               displayResults(numMuffins, muffinPrice, totalMuffins);

           }

           /**
           calculates results and displays a report
           **/
           function displayResults(weeklyInventory, muffinPrice, weeklySales) {
               // calculate results
               var revenue = weeklySales * plasticPrice;
               var expense = weeklyInventory * muffinCost;
               var leftOver = weeklyInventory - weeklySales;
               var profit = revenue - expense;

               // print out the weekly report
               document.getElementById("result").innerHTML += "<p>You sold a total of " + weeklySales + " platics of muffin this week.</p>";
               document.getElementById("result").innerHTML += "<p>Total revenue: R" + revenue + ".</p>";
               document.getElementById("result").innerHTML += "<p>You have " + leftOver + " platics of muffin left over.</p>";
               document.getElementById("result").innerHTML += "<p>Each plastic costs you R" + muffinCost + ". Your profit was R" + profit + ".";
           }

           /**
           resets the game so that a new order can be placed
           **/
           function resetForm() {
               document.getElementById("result").innerHTML = "";

           }