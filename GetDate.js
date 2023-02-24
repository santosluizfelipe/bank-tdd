class GetDate{
  constructor(dateString) {
    const today = new Date(dateString);
    if (isNaN(today)) {
      throw new Error("Invalid date");
    }else if(today.getMonth() + 1 > 12 || today.getDate()  > 31 || today.getFullYear().length < 4 ) {
      throw new Error("Invalid date");
    }else{
      this.today = today;
    }
  }
  getCurrentDate() {
    const day = this.today.getDate();
    const month = this.today.getMonth() + 1;
    const year = this.today.getFullYear();
    let currentDate = `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`;
    return currentDate;
  }
}

module.exports = GetDate