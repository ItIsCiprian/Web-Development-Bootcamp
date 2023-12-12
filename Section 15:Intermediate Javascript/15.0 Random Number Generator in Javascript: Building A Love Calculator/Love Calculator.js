<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Love Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <h1>Love Calculator</h1>
    <button onclick="calculateLove()">Calculate Love</button>
    <p id="loveResult"></p>

    <script>
        function calculateLove() {
            // Generate a random love score between 1 and 100
            var loveScore = Math.floor(Math.random() * 100) + 1;

            // Display the love score result
            var resultElement = document.getElementById("loveResult");

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

