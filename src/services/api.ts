import Account from "../types/models/Account";

export const getAccounts = async ():Promise<Account[] |null> => {
    try {
        const accountsResponse = await fetch('https://api.npoint.io/97d89162575a9d816661').then(response => {
            if (!response) {
                throw new Error(response)
            }
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
        if (account.n === ' ' || translateAccountType(account.tipoLetras) === '') {
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
