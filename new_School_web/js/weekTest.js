$(function(){
    $("#test05").jeDate({
        format:"hh:mm",
        minDate:"00:00",
        maxDate:"23:59"
    });
    $("#test06").jeDate({
        format: "hh:mm",
        minDate:"00:00:00",
        maxDate:"23:59:00"
    });
});
function testDate(dates){
    $.jeDate(dates,{
        trigger:false,
        format: "hh:mm",
        minDate:"00:00:00",
        maxDate:"23:59:00"
    })
}