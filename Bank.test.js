const Bank = require('./Bank')


describe("bank class", () => {

  beforeEach(() => {
    const mockDate = new Date('2023-02-21T00:00:00.000Z');
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
  });

  it("The class initiates w/ an empty array", () => {
    const bank = new Bank();
    
    expect(bank.statement()).toEqual([])
  })

  it("should be able to deposit and display the date of a deposit", () => {
    const bank = new Bank()
    bank.deposit(1000.00);
    
    expect(bank.statement()).toEqual(["21/02/2023 || "+1000.00])
  })

  it("should be able to deposit and display the date of a deposit", () => {
    const bank = new Bank()
    bank.deposit(1000.00);
    bank.withdrawal(50.00);
    
    expect(bank.statement()).toEqual(["21/02/2023 || "+1000.00,"21/02/2023 || "+950.00])
  })

  it("should not allow a withdrawal that exceeds the available balance", () => {
    const bank = new Bank();
    bank.deposit(100.00);

    expect(() => bank.withdrawal(200.00)).toThrowError("Insufficient balance");
    expect(bank.statement()).toEqual(["21/02/2023 || " + 100.00]);
  });

  it("should not allow a negative deposit", () => {
    const bank = new Bank();
    expect(() => bank.deposit(-50.00)).toThrowError("Invalid amount");
    expect(bank.statement()).toEqual([]);
  });

  it("should not allow a negative withdrawal", () => {
    const bank = new Bank();
    expect(() => bank.withdrawal(-50.00)).toThrowError("Invalid amount");
    expect(bank.statement()).toEqual([]);
  });
})