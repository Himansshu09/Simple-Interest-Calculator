function compute()
{   
    //Get the values and calculate 
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var totalamt = (principal+interest);
    //Create the Interest text
    document.getElementById("result").innerHTML = "Principal amount : " + principal + "</mark>,<br/>" +
        "Total interest : " + interest + "</mark>,<br/> " +
        "Total amount : " + totalamt + "</mark>";

}
//update the rate value
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval;
}
//Check for positive values
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}
