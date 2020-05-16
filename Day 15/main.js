// A Program which tells the number of days in a month.

// Function Definition 
function fnDayinMonth()
    // Receives value from the textbox
{   var month = document.getElementById("DayinMonth").value;
    // Loop Condition Statement 
    if (month=="January"){
        month = "January has 31 days ";
    } else if (month=="Febuary"){
        month = "Febuary has 28 days & 29 days if it's a leap year ";
    } else if (month=="March"){
        month = "March has 31 days ";
    } else if (month=="April"){
        month = "April has 30 days";
    } else if (month=="May"){
        month= "May has 31 days";
    } else if (month=="June"){
        month = "June has 30 days ";
    } else if (month=="July"){
        month = "July has 31 days ";
    } else if (month=="August"){
        month = "August has 31 days ";
    } else if (month=="September"){
        month = "<h1> September has 30 days";
    } else if (month=="October"){
        month = "October has 31 days";
    } else if (month=="November"){
        month = "November has 30 days";
    } else if (month=="December"){
        month = "December has 31 days";
    }  //If User Inputs the Wrong Month.
        else {
            month = "Invail Month. Please refresh and Re-enter Month ";
    }
    // Output to print-out
    document.getElementById("showResult").textContent = month;
}
// End of Code.