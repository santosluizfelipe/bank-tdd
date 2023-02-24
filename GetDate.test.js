const NewDate = require('./GetDate');

describe("bank class", () => {
  it("should return the current date", () => {
    const mockDate = new Date('2023-02-21T00:00:00.000Z');
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    const currentDate = new NewDate();
    expect(currentDate.getCurrentDate()).toEqual("21/02/2023");

    global.Date.mockRestore();
  })

  it("should create a GetDate object with a valid date", () => {
    const date = new NewDate("2023-02-24");
    expect(date.today).toBeInstanceOf(Date);
  });

  it("should return the current date in the expected format", () => {
    const date = new NewDate("2023-02-24");
    expect(date.getCurrentDate()).toEqual("24/02/2023");
  });

  it("should return the current date with leading zeros", () => {
    const date = new NewDate("2023-02-05");
    expect(date.getCurrentDate()).toEqual("05/02/2023");
  });

  it("should throw an error if an invalid date is passed to the NewDate constructor", () => {
    expect(() => new NewDate("invalid date")).toThrowError("Invalid date");
  });

  it("should throw an error if an day is bigger than 31", () => {
    expect(() => new NewDate("2023-02-35")).toThrowError("Invalid date");
  })

  it("should throw an error if an day is bigger than 31", () => {
    expect(() => new NewDate("2023-14-05")).toThrowError("Invalid date");
  })

  it("should throw an error if the year string length is less than 4", () => {
    expect(() => new NewDate("23-02-01")).toThrowError("Invalid date");
  });
});

