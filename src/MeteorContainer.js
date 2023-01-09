import { useContext, useState } from "react"
import { MeteorContext } from "./MeteorContext"

const MeteorContainer = ( {setUserSearch, checkMeteor} ) => {
    const {meteors, setMeteors} = useContext(MeteorContext)
    const [search,  setSearch] = useState(null)


    return(
        <div>
            Search Meteor by Date:
            <input onChange={(e) => setUserSearch(e.target.value)}></input>
            <button onClick={checkMeteor}>Search</button>
            <hr></hr>
        </div>
    )
}

export default MeteorContainer