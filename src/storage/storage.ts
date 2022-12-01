import AccountStorage from "../constants/Storage"
import Account from "../types/models/Account"

export const saveAccountOnStorage = (account: Account):void => {
    localStorage.setItem(AccountStorage.currentAccount, JSON.stringify(account))
}

export const getAccountFromStorage = (currentStorage: string):Account => {
    const account: Account = JSON.parse(localStorage.getItem(currentStorage) ?? '');
    return account;
}