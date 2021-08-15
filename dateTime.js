let dateTime = () =>
{
    let showDate=new Date();
    let displayTodaysDate=showDate.getDate()+'/'+(showDate.getMonth()+1)+'/'+showDate.getFullYear();
    let dt=showDate.toDateString();
    let displayTime=showDate.getHours()+'/'+showDate.getMinutes()+'/'+showDate.getSeconds();
    return(
        <div style={{color:'black'}}>
            <center>
            <input type='text' value={displayTodaysDate} readOnly='true'/>
            {dt} - {displayTime}
            </center>
        </div>
    );
}

export default dateTime;