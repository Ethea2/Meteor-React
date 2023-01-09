import { useContext } from "react"
import { MeteorContext } from "./MeteorContext"

const MeteorList = () => {
    const {meteors, setMeteors} = useContext(MeteorContext)
    
    const searchMeteor = (meteor) => {
        const search = "https://www.google.com/search?q=" + meteor.name + " meteorite"
        window.open(search, "_blank", "noreferrer")
    }

    const searchLocation = (meteor) => {
        const loc = meteor.reclat + ',' + meteor.reclong
        const search = 'https://www.google.com/maps/place/'+loc
        window.open(search, '_blank', 'noreferrer')
    }

    return(
        <div>
            {
                meteors.map(meteor => (
                    <div key={meteor.id}>
                        <div>
                            name: {meteor.name}
                        </div>   
                        <div>
                            year: {meteor.year.substring(0,4)}
                        </div>
                        <button onClick={() => searchMeteor(meteor)}>Search</button>
                        <button onClick={() => searchLocation(meteor)}>Search Location</button>
                        
                        <hr></hr>
                    </div>
                    
                ))
            }
        </div>
    )
}

export default MeteorList