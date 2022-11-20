import React from "react";
import { translateAccountType, translateCurrency } from "../services/api";
import { getAccountFromStorage } from "../storage/storage";
import AccountStorage from "../constants/Storage";

const AccountDetailScreen = ():JSX.Element => {
    const currentAccount = getAccountFromStorage(AccountStorage.currentAccount);

    return (
        <div>
            <h1>Este es tu saldo Actual</h1>
            <p>{`Saldo de Cuenta: ${translateCurrency(currentAccount?.moneda)}`}</p>
            <p>{`Tipo de Cuenta: ${translateAccountType(currentAccount?.tipoLetras)}`}</p>
            <p>{`Número de Cuenta: ${currentAccount?.n}`}</p>
        </div>
    )
}

export default AccountDetailScreen;

