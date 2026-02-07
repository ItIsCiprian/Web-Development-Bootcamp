<!-- This HTML file creates a simple Love Calculator web page. -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Love Calculator</title>
    <style>
        /* Basic styling for the body of the page. */
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <h1>Love Calculator</h1>
    <!-- Button to trigger the love calculation. -->
    <button onclick="calculateLove()">Calculate Love</button>
    <!-- Paragraph to display the love calculation result. -->
    <p id="loveResult"></p>

    <script>
        // Function to calculate and display a random love score.
        function calculateLove() {
            // Generate a random love score between 1 and 100.
            var loveScore = Math.floor(Math.random() * 100) + 1;

            // Get the HTML element where the result will be displayed.
            var resultElement = document.getElementById("loveResult");

            // Display different messages based on the love score.
            if (loveScore > 80) {
                resultElement.innerHTML = `Congratulations! Your love score is ${loveScore}. You are a perfect match! ❤️`;
            } else if (loveScore > 50) {
                resultElement.innerHTML = `Your love score is ${loveScore}. There's potential for a great connection! 😊`;
            } else {
                resultElement.innerHTML = `Oops! Your love score is ${loveScore}. Keep searching for the one! 💔`;
            }
        }
    </script>
</body>
</html>

