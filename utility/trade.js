function unixTimestamp (date = Date.now()) {  
    console.log(date)
    return date;
}

function toDate (unixTimestamp) {  
    return new Date(
      unixTimestamp * 1000
    )
}

module.exports = {
    unixTimestamp,
    toDate
};