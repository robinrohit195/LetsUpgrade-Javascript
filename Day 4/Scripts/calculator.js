
function number(clickedId) 
{
    document.calculator.result.value+=clickedId;
}
function Clear() 
{
    document.calculator.result.value="";
}

function calculate()
{
    try
    {
        var inp=eval(document.calculator.result.value);
        document.calculator.result.value=inp;
    }catch(err)
        {
                document.calculator.result.value="error";
        }
}
function calcsqrt()
{
    var inputNum1=document.calculator.result.value;
    var result = Math.sqrt(inputNum1);
    document.calculator.result.value = result;
  }
