
function print_current_date_format1()
{
    var today = new Date();
    var todayformat1;
    var todayformat2;
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    todayformat1 = mm + '-' + dd + '-' + yyyy;
}
return todayformat1;
function print_current_date_format2()
{
    newFunction();
}
return todayformat2;

function newFunction() {
    var today = new Date();
    var todayformat2;
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    todayformat2 = mm + '/' + dd + '/' + yyyy;
}
