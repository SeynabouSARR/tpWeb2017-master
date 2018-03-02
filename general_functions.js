/*************FUNCTION *****************/
function correctFormat(number)
{
    if(!Number.isSafeInteger(number))
    {
        number = number.toFixed(2);
    }

    return number;
}


function cloneArray(tableau)
{
    var copyValue = [];
    tableau.forEach(element => {
        copyValue.push(element);
    });
    return copyValue;
}