import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./friends.css";
import { FriendsDetail } from "./FriendsDetail"
import { FriendsForm } from "./FriendsForm";
export const FriendsCard = () => {

    const history = useHistory();

    return (
        <div>
            <div className="card">
                <FriendsDetail />
            </div>
            <div className="card">
                <FriendsForm />
            </div>
        </div>
    );
}