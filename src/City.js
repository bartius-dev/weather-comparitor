class City {
  constructor(city, country, isBase, data) {
    this.city = city;
    this.country = country;
    this.isBase = isBase;
    this.weather = [];
    for (let i = 0; i < 12; i++) {
      let dateArray = data[i].datetime.split("-");
      let dayIndex = new Date(
        dateArray[0],
        parseInt(dateArray[1]) - 1,
        dateArray[2]
      ).getDay();
      this.weather.push({
        dayOfWeek: daysOfTheWeek[dayIndex],
        low: data[i].low_temp,
        high: data[i].max_temp,
      });
    }
  }
}

City.prototype.setToBase = function () {
  this.isBase = true;
};

const daysOfTheWeek = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

export default City;
