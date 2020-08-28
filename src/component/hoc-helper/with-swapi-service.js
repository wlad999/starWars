import React from "react";
import {SwapiSeviceConsumer} from "../swapi-service-context";


const withSwapiService = (Wrapped, mapMethodsToProps) => {
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