import Account from "../../types/models/Account";
import AccountStorage from "../../constants/Storage";
import { saveAccountOnStorage, getAccountFromStorage} from "../storage";

describe('Guardando local Storage', () => {
    beforeEach(() => {
        jest.spyOn(Object.getPrototypeOf(global.localStorage), 'setItem')
        Object.setPrototypeOf(global.localStorage.setItem, jest.fn())
    });

    afterAll(() => {
        jest.restoreAllMocks();
    })

    test('Llamando a localStorage para guardar Account', () => {
        const mockAccount:Account = {
            e: "test",
            n: "test",
            t: "test", 
            saldo: "test",
            moneda : "test",
            tipoLetras: "test",
        }    
        saveAccountOnStorage(mockAccount);
        expect(global.localStorage.setItem).toHaveBeenCalled()
        expect(global.localStorage.setItem).toHaveBeenCalledTimes(1);
    });
});

describe('Obteniendo la cuenta actual', () => {
    beforeEach(() => {
        jest.spyOn(Object.getPrototypeOf(global.localStorage), 'getItem');
        Object.setPrototypeOf(global.localStorage.getItem, jest.fn());
    });

    afterAll(() => {
        jest.restoreAllMocks();
    })

    test('Llamando a LocalStorage para traer la cuenta actual', () => {
        getAccountFromStorage(AccountStorage.currentAccount);
        expect(global.localStorage.getItem).toHaveBeenCalled();
        expect(global.localStorage.getItem).toHaveBeenCalledTimes(1);
    });
})