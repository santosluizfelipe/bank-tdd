const NewDate = require('./GetDate');

describe("bank class", () => {
  it("should return the current date", () => {
    const mockDate = new Date('2023-02-21T00:00:00.000Z');
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    const currentDate = new NewDate();
    expect(currentDate.getCurrentDate()).toEqual("21/02/2023");

    global.Date.mockRestore();
  })
});