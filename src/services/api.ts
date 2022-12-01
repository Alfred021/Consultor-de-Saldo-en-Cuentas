import Account from "../types/models/Account";

export const getAccounts = async ():Promise<Account[] |null> => {
    try {
        const accountsResponse = await fetch(process.env.REACT_APP_API_URL ?? '').then(response => {
            return response.json();
        });
        return parseAccounts(accountsResponse.cuentas);
    } catch (error) {
        console.log(error);
        return null;
    };
}

const parseAccounts = (accounts: any[]):Account[] => {
    return accounts.map((account) => parseAccount(account)).filter((account) => {
        if (account.n === ' ' || translateAccountType(account.tipoLetras) === '' || translateCurrency(account.moneda) === '') {
            return false;
        } else {
            return true;
        }
    });
}

const parseAccount = (response:any):Account => {
    return {
        e: response.e,
        n: response.n,
        t: response.t, 
        saldo: response.saldo,
        moneda: response.moneda,
        tipoLetras: response.tipo_letras,
    }
}

export const translateAccountType = (type: string): string => {
    switch (type.toLowerCase()) {
        case "cc":
            return "Cuenta Corriente";
        case "ca":
            return "Cuenta Ahorro";
        default:
            return '';
    }
}

export const translateCurrency = (type: string): string => {
    switch (type) {
        case "$":
            return "Pesos";
        case "u$s":
            return "Dólares";
        default:
            return '';
    }
};

export const formatBalances = (balance: string): string => {
    if (balance.includes('-')) {
        return balance.replaceAll('-', '');
    } 
    return balance;
}
