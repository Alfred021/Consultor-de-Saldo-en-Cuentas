import AccountStorage from "../constants/Storage"
import Account from "../types/models/Account"

export const saveAccountOnStorage = (account: Account):void => {
    try {
        localStorage.setItem(AccountStorage.currentAccount, JSON.stringify(account))
    } catch(e) {
        localStorage.clear()
        localStorage.setItem(AccountStorage.currentAccount, JSON.stringify(account))
    }
}

export const getAccountFromStorage = (currentStorage: string):Account => {
    const account: Account = JSON.parse(localStorage.getItem(currentStorage) ?? '')
    if (account === null) {
        throw new Error("Account not found in Storage")
    }
    return account;
}
