import React from "react";
import {SwapiSeviceConsumer} from "../swapi-service-context";


const withSwapiService = (mapMethodsToProps) => (Wrapped) => {
    return (props) => {
        return (<SwapiSeviceConsumer>
            {(swapiService) => {
                const serviceProps = mapMethodsToProps(swapiService)
                return <Wrapped {...props} {...serviceProps}/>
            }}
        </SwapiSeviceConsumer>)
    }
}
export default withSwapiService