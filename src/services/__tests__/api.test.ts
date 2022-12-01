import Account from "../../types/models/Account";
import { getAccounts, formatBalances } from "../api";

describe("Testeando una correcta respuesta del servicio de cuentas", () => {
  let fetchMock: any | undefined = undefined;
  const fetchMockFunctionResolve = () => Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve({})} as Response); 

  beforeEach(() => {
    fetchMock = jest.spyOn(global, "fetch")
    .mockImplementation(fetchMockFunctionResolve);
  });

  afterEach(() => {
    jest.resetAllMocks()
    jest.restoreAllMocks();
  });

  test('fetcheando el listado de cuentas', async () => {
    getAccounts();
    expect.assertions(2);
    expect(fetchMock).toBeCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(process.env.REACT_APP_API_URL);
  });
})


test('comprobando que la respuesta de la promesa se igual al modelo Account', async () => {
  const results = await getAccounts();
  expect(results).toBeTruthy();
  results?.forEach((result: Account) => {
    const keys = Object.keys(result);
    keys.forEach(key => {
      expect(result).toHaveProperty(key);
    });
  }); 
});

test('formateando correctamente balances con posible guion entre cifras', () => {
  const incorrectBalance = '2-2-0';
  const correctBalance = "220";
  const formattedBalance = formatBalances(incorrectBalance);
  const formattedBalanceWithoutDashes = formatBalances(correctBalance);
  expect(formattedBalance).not.toEqual(expect.stringMatching(incorrectBalance));
  expect(formattedBalanceWithoutDashes).toEqual(correctBalance);
})
  
  

  