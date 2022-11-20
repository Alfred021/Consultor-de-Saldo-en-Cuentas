import React from "react";
import AccountCardProps from "../types/components/AccountCardProps";
import { translateAccountType } from "../services/api";
import '../styles/components/AccountCard.css';
import { saveAccountOnStorage } from "../storage/storage";

const AccountCard = ({ account }: AccountCardProps):JSX.Element => {

    return (
           <div className="Container" onClick={() => {
                saveAccountOnStorage(account);
                window.location.assign("/account-details");
           }}>
                <h2>{translateAccountType(account.tipoLetras)}</h2>
                <p>Nro: {account.n}</p>
            </div>
    )
}

export default AccountCard;