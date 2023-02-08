<!DOCTYPE html>
<html>
<head>
  <title>Coffee Shop</title>
</head>
<body>
  <h1>Coffee Shop</h1>
  <form>
    <label for="coffee">Select a type of coffee:</label>
    <select id="coffee">
      <option value="espresso">Espresso</option>
      <option value="latte">Latte</option>
      <option value="cappuccino">Cappuccino</option>
    </select><br><br>
    
    <label for="size">Select a size:</label>
    <select id="size">
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select><br><br>
    
    <button type="button" onclick="calculateTotal()">Calculate Total</button>
  </form>
  
  <p id="result"></p>
  
  <script>
    function calculateTotal() {
      var coffee = document.getElementById("coffee").value;
      var size = document.getElementById("size").value;
      var total = 0;
      
      if (coffee === "espresso") {
        if (size === "small") {
          total = 2.00;
        } else if (size === "medium") {
          total = 2.50;
        } else if (size === "large") {
          total = 3.00;
        }
      } else if (coffee === "latte") {
        if (size === "small") {
          total = 3.00;
        } else if (size === "medium") {
          total = 3.50;
        } else if (size === "large") {
          total = 4.00;
        }
      } else if (coffee === "cappuccino") {
        if (size === "small") {
          total = 3.50;
        } else if (size === "medium") {
          total = 4.00;
        } else if (size === "large") {
          total = 4.50;
        }
      }
      
      document.getElementById("result").innerHTML = "The total cost is $" + total.toFixed(2);
    }
  </script>
</body>
</html>
