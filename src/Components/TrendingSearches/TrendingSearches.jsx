import { Category } from "../Category"
const { useEffect, useState } = require("react")
const { getTrendingTermsService } = require("Services/getTrendingTermsService")

const TrendingSearches = () => {
    
        const [ trends, setTrends ] = useState([])
        useEffect(() => {
            getTrendingTermsService()
            .then(setTrends)
        },[])
    
        return <Category name="Tendencias" option={trends}/>
    
}

export default TrendingSearches
