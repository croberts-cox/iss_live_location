const convertUnixToTime = (currentTimestamp) => {
  // let newTimestamp = Date.now();
  console.log(currentTimestamp); 
  // console.log(newTimestamp); // get current timestamp
  // let newTimestamp = (currentTimestamp)
  let date = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(currentTimestamp*1000);

  return(date)
}

export default convertUnixToTime