import React from "react";
import {SwapiSeviceConsumer} from "../swapi-service-context";


const withSwapiService = (Wrapped) => {
    return (props) => {
        return (<SwapiSeviceConsumer>
            {(swapiService) => {
                return <Wrapped {...props} swapiService={swapiService}/>
            }}
        </SwapiSeviceConsumer>)
    }
}
export default withSwapiService