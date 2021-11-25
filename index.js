const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"},
    {year: "2015", result: "W"}
  ]

  function winYear(record){
      return (record.result ==="W");
  }


function superbowlWin(record){

    const winObject = (record.find(winYear))
    console.log(winObject)
    if (winObject === undefined) {
      return  winObject;
      }
      else {
       return winObject.year
      };


}





 superbowlWin(record)