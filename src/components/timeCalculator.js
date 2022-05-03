const timeCalculator =  function(time, timeDelta){
    let totalSeconds = (
        time[0] * ( 60 * 60 ) + //hours
        time[1] * ( 60 ) + //minutes
        time[2]  //seconds
    )
    totalSeconds += timeDelta //solution inplemented to use the same function on both counters

    var hours   = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    var seconds = totalSeconds - (hours * 3600) - (minutes * 60);

    return ([ hours, minutes, seconds])
}

export default timeCalculator