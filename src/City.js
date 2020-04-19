class City {
  constructor(city, country, isBase, data) {
    this.city = city;
    this.country = country;
    this.isBase = !Boolean(isBase);
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
        low: Math.floor(data[i].low_temp),
        high: Math.floor(data[i].max_temp),
      });
    }
  }
}

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
