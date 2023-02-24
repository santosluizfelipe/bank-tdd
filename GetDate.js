class GetDate{
  constructor(dateString) {
    const today = new Date(dateString);
    if (isNaN(today)) {
      throw new Error("Invalid date");
    }
    this.today = today;
  }
  getCurrentDate() {
    const date = this.today.getDate();
    const month = this.today.getMonth() + 1;
    const year = this.today.getFullYear();
    return `${date < 10 ? "0" + date : date}/${month < 10 ? "0" + month : month}/${year}`;
  }
}

module.exports = GetDate