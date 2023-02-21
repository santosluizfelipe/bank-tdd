const NewDate = require('./GetDate')

describe("bank class", () => {
  it("Should return the current date", () => {
    const currentDate = new NewDate();
    currentDate.getCurrentDate()
    
    expect(currentDate.getCurrentDate()).toEqual("21/02/2023");
  })
})