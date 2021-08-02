import { Spinner } from 'Components/Spinner'
import { useNearScreen } from 'Hooks/useNearScreen'
import React, {Suspense} from 'react'
const  TrendingSearches  = React.lazy(
    () => import('./TrendingSearches')
) 

export const LazyTrending = () => {

    const {isNearScreen, fromRef} = useNearScreen({distance: '200px'})

    return <div ref={fromRef}>
    <Suspense fallback={'Cargando ....'}>
        {isNearScreen ? <TrendingSearches/> : <Spinner/>}
    </Suspense>
    </div>
    
}
