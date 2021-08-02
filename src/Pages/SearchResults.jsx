import { Spinner } from 'Components/Spinner';
import {ListOfGifs} from 'Components/ListOfGifs'
import { useGifs } from 'Hooks/useGifs';
import { useNearScreen } from 'Hooks/useNearScreen';
import { useCallback, useEffect, useRef } from 'react';
import debounce from 'just-debounce-it';
export  function SearchResults ({ params }) {
    const { keyword, rating } = params
    const { loading, gifs, setPage } = useGifs({ keyword, rating })
    
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    })
            //Scrorll infinito
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage])

    useEffect(function () {
        if (isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])
    return <>
    {loading
        ? <Spinner/>
        :<>
        <h3 className='App-title'>
            {decodeURI(keyword)}
        </h3>
        <ListOfGifs gifs={gifs}/>
        <div id='visor' ref={externalRef}></div>
        </>
    }
    
    
    </>

}
