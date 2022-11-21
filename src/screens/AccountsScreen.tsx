import React from "react";
import Account from "../types/models/Account";
import { getAccounts } from "../services/api";
import AccountCard from "../components/AccountCard";
import "../styles/screens/AccountScreen.css";

const AccountsScreen = ():JSX.Element => {
    const [accounts, setAccounts] = React.useState<Account[] | null>(null);
    const [paginationAccounts, setPaginationAccounts] = React.useState<Account[] | null>([]);
    const [page, setPage] = React.useState<number>(1);
    const [pageSize, setPageSize] = React.useState(0);

    React.useEffect(() => {
      const getApiAccounts = async () => {
        const result = await getAccounts();
        if (result) {
          setAccounts(result);
        }
      };
      getApiAccounts();
      
    }, []);

    const resolvePaginationAccounts = React.useCallback(():void => {
      if (!accounts) return;
      if (page === 1 && accounts.length > 5) {
        setPageSize(5);
      } else {
        setPageSize(4);
      }
      const paginateAccounts = accounts.slice((page - 1) * pageSize, page * pageSize);
      setPaginationAccounts(paginateAccounts);
    }, [setPaginationAccounts, accounts, pageSize, page])

    React.useEffect(() => {
      resolvePaginationAccounts();
    }, [resolvePaginationAccounts, page]);

    const nextPage = ():void => {
      setPage((oldPage) => oldPage + 1);
    };

    const previousPage = ():void => {
      setPage((oldPage => oldPage - 1));
    }

    return (
        <div>
          <div className="titles-container">
            <h2>Consulta de Saldo</h2>
            <h1>Seleccione la cuenta a consultar</h1>
          </div>
            <div className="accounts-container">
              {page > 1 && (
                <span className="change-page-button" onClick={() => previousPage()}>
                  <h2>{"<< Anteriores"}</h2>
                </span>
              )}
              {paginationAccounts?.map((account) =>(
                  <>
                    <AccountCard account={account}/>
                  </>   
              ))}
              {accounts && pageSize * page < accounts?.length -1  && (
                <span className="change-page-button" onClick={() => nextPage()}>
                  <h2>{"Siguientes >>"}</h2>
                </span>
              )}
            </div>
        </div>
    )
}

export default AccountsScreen