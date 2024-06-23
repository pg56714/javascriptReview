for (let day = 1; day <= 7; day++) {
  if (day === 6 || day === 7) {
    continue;
  }
  console.log("星期" + day.toString() + "要上班");
}
