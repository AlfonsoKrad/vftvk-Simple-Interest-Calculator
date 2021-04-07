function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    if( principal <= 0)
    {
        alert("Enter a positive number")
        document.getElementById("principal").focus();
        return;
    }
    else
    {
        var interes = principal*years*rate/100;
        var futureYear = parseInt(new Date().getFullYear()) +parseInt(years);
        
        // Concatenate the values needed in order to sett to the result element
        var newPara ="If you deposit " + "<mark>" + principal + "</mark>" + "," + '<br>';
        var newText = "at an interest rate of " + "<mark>" + rate + "%" + "</mark>"+ "," + '<br>';
        var newText2 = "You will receive an amount of " + "<mark>" + interes + "</mark>" + "," + '<br>' ;
        var newText3 = "in the year " + "<mark>" + futureYear + "</mark>";
    
        newPara = newPara + newText + newText2 +newText3;
        document.getElementById("result").innerHTML = newPara;
    }
}

function currentRangeValue()
{
    // Set values to rateValues element
    var rateValue = document.getElementById("rate").value;
    document.getElementById("rateValue").innerHTML = rateValue+" %";
}
        