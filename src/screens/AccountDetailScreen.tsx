import React from "react";
import { translateAccountType, translateCurrency, formatBalances } from "../services/api";
import { getAccountFromStorage } from "../storage/storage";
import AccountStorage from "../constants/Storage";
import "../styles/screens/AccountDetailScreen.css";

const AccountDetailScreen = ():JSX.Element => {
    const currentAccount = getAccountFromStorage(AccountStorage.currentAccount);

    return (
        <div>
            <div className="titles-container">
                <h2>Consulta de Saldo</h2>
                <h1>Este es tu saldo Actual</h1>
            </div>
            <div className="details-container">
                <p className="detail-text">{`Saldo de Cuenta: ${formatBalances(currentAccount.saldo)}`}</p>
                <p className="detail-text">{`Tipo de Cuenta: ${translateAccountType(currentAccount?.tipoLetras)} en ${translateCurrency(currentAccount?.moneda)}`}</p>
                <p className="detail-text">{`Número de Cuenta: ${currentAccount?.n}`}</p>
            </div> 
        </div>
    )
}

export default AccountDetailScreen;

