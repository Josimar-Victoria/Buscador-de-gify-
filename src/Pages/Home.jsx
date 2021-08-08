import { ListOfGifs } from 'Components/ListOfGifs'
import { Spinner } from 'Components/Spinner'
import { useGifs } from 'Hooks/useGifs'
import { LazyTrending } from 'Components/TrendingSearches/LazyTrending'
import SearchForms from 'Components/SearchForms'
import { Helmet } from 'react-helmet'
import '../Styles/Home.css'

export const Home = () => {
    const { loading, gifs } = useGifs()


    return (
    <>
        <Helmet>
            <title>Home | Giffy</title>
        </Helmet>
        <header>
        <SearchForms />
        </header>
        <div className='App-main'>
            <div className='App-results'>
                <h3 className='App-title'>Ultima Busqueda</h3>
                {loading
                ? <Spinner/>
                :<ListOfGifs gifs={gifs}/>
                }
            </div>
            <div className='App-category'>
                <LazyTrending/>
            </div>
        </div>
        
    </>
)
}
