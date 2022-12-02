import { render, screen} from '@testing-library/react';
import AccountDetailScreen from "../AccountDetailScreen";
import Account from '../../types/models/Account';
import AccountStorage from "../../constants/Storage";
import { saveAccountOnStorage, getAccountFromStorage }from "../../storage/storage";


describe('Renderizar Pantalla para detalle de Cuenta', () => {
    beforeEach(() => {
        jest.spyOn(Object.getPrototypeOf(global.localStorage), 'setItem')
        Object.setPrototypeOf(global.localStorage.setItem, jest.fn());
        jest.spyOn(Object.getPrototypeOf(global.localStorage), 'getItem')
        Object.setPrototypeOf(global.localStorage.getItem, jest.fn());
    });

    afterAll(() => {
        jest.restoreAllMocks();
    })

    const mockAccount:Account = {
        e: "test",
        n: "test",
        t: "test", 
        saldo: "test",
        moneda : "test",
        tipoLetras: "test",
    };

    test('Recuperando una cuenta de localStorage y asegurando correcto formato de la pantalla', () => {
        saveAccountOnStorage(mockAccount);
        expect(global.localStorage.setItem).toHaveBeenCalled()
        expect(global.localStorage.setItem).toHaveBeenCalledTimes(1);
        getAccountFromStorage(AccountStorage.currentAccount);
        expect(global.localStorage.getItem).toHaveBeenCalled();
        expect(global.localStorage.getItem).toHaveBeenCalledTimes(1);
        render(<AccountDetailScreen />)
        const titleElement = screen.getByText(/Este es tu saldo Actual/i);
        expect(titleElement).toBeInTheDocument();
        const balanceText = screen.getByText(/Saldo de Cuenta:/i);
        const accountTypeText = screen.getByText(/Tipo de Cuenta:/i);
        const accountNumberText = screen.getByText(/Número de Cuenta:/i);
        expect(balanceText).toBeInTheDocument();
        expect(accountTypeText).toBeInTheDocument();
        expect(accountNumberText).toBeInTheDocument();
    })
})