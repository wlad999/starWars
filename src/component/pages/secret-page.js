import React from "react";
import {Redirect} from "react-router-dom"

const SecretPage = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return (
            <div className="jambotron text-center">
                <h3>This page is full of secrets!!!</h3>
            </div>
        )
    }

    return <Redirect to={"/login"}/>
}

export default SecretPage