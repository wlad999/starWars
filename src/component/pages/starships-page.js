import React from "react"
import {StarshipList} from "../sw-component";
import {withRouter} from "react-router-dom"


const StarshipsPage = ({history}) => {
    return (
        <StarshipList onItemSelected={(itemId) => {
            history.push(`/starships/${itemId}`)
        }}/>
    )
}
export default withRouter(StarshipsPage)