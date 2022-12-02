import { render, screen, fireEvent } from '@testing-library/react';
import Account from '../../types/models/Account';
import AccountCard from "../AccountCard";
import { saveAccountOnStorage }from "../../storage/storage";

describe('Renderizar Tarjeta para mostrar Cuentas', () => {
    const { location } = window;

    beforeEach(() => {
        jest.spyOn(Object.getPrototypeOf(global.localStorage), 'setItem')
        Object.setPrototypeOf(global.localStorage.setItem, jest.fn());
        delete (window as any).location
        window.location = { assign: jest.fn() } as any;
    });

    afterAll(() => {
        jest.restoreAllMocks();
        window.location = location;
    })

    const mockAccount:Account = {
        e: "test",
        n: "test",
        t: "test", 
        saldo: "test",
        moneda : "test",
        tipoLetras: "test",
    }    
    render(<AccountCard account={mockAccount}/>);
    const numberAccountText = screen.getByText(/Nro: /i);
    expect(numberAccountText).toBeInTheDocument();
    
    const divElement = screen.getByText("Nro: test"); 
    fireEvent.click(divElement);

    test('Probando function en el momento de hacer click en la tarjeta', () => {
        expect(jest.isMockFunction(window.location.assign)).toBe(true);
        saveAccountOnStorage(mockAccount);
        expect(global.localStorage.setItem).toHaveBeenCalled()
        expect(global.localStorage.setItem).toHaveBeenCalledTimes(1);
        window.location.assign("/account-details");
        expect(window.location.assign).toHaveBeenCalled()
        expect(window.location.assign).toHaveBeenCalledWith("/account-details");
    });
})