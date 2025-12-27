export default function Search({ searchValue, setSearchValue}){

    return(
        <>
            <h2>Buscador</h2>
            <label htmlFor="search">
                Buscar:
            </label>
            <input
                type="search"
                id="search"
                placeholder="Escribe para buscar..."
                value={searchValue}
                onChange={(event)=>{
                    setSearchValue(event.target.value)
                }}
            />
        </>
    )
}