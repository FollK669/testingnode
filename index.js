import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  //Test code
  // weekend:
  // new Date("June 24, 2023 11:13:00");
  // weekday:
  // new Date("June 20, 2023 11:13:00");
  const day = today.getDay();

    let DayName;
  // console.log(day);
  let type = "a weekday";
    let adv = "it's time to work hard";


  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  switch(day)
  {
      case 0: DayName = "zondag";
      case 1: DayName = "maandag";
      case 2: DayName = "dinsdag";
      case 3: DayName = "weondsdag";
      case 4: DayName = "dodnerdag";
      case 5: DayName = "vrijdag";
      case 6: DayName = "zaterdag";



  }





  res.render("solution2.ejs", {
    dayType: type,
      advice: adv,
      DayName: DayName,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
