import { useState } from "react"
import { useQuery } from "react-query"

import Character from "../../components/Character"

import './style.css'



export default function Home() {

    const [page, setPage] = useState(1)

    const fetchCharacters = async ({ queryKey }) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)

        return response.json()
    }

    const { data, status, isPreviousData } = useQuery(["character", page], fetchCharacters, {
        keepPreviousData: true
    })

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (status === 'error') {
        return <div>Error</div>
    }


    return (
        <div id="container">
            <div className="button-container">
                <div className="button">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(old => Math.max(old - 1, 1))}
                    >
                        Previous
                    </button>
                    <p> {page} </p>
                    <button
                        className="button-next"
                        disabled={isPreviousData && !data.info.next}
                        onClick={() => setPage(old => old + 1)}
                    >
                        Next</button>
                </div>
            </div>
            <div className="caracter-container">
                <div className="characters">

                    {data.results.map(character => (
                        <Character key={character.id} character={character} />
                    ))}

                </div>
            </div>
        </div>

    )
}
