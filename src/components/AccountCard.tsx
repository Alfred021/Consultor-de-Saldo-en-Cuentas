import React from "react";
import AccountCardProps from "../types/components/AccountCardProps";
import { translateAccountType } from "../services/api";
import { saveAccountOnStorage } from "../storage/storage";
import '../styles/components/AccountCard.css';

const AccountCard = ({ account }: AccountCardProps):JSX.Element => {

    return (
        <div className="card-container" onClick={() => {
            saveAccountOnStorage(account);
            window.location.assign("/account-details");
        }}>
            <h2>{translateAccountType(account.tipoLetras)}</h2>
            <p>Nro: {account.n}</p>
        </div>
    )
}

export default AccountCard;