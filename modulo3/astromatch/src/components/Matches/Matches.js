


const Matches = ({arrayMatches, voltarInicio, getMatches})=>{

   const arrayMatchesMapeado = arrayMatches.map((item)=>{
    return(
        <li key={item.id}>{item.name}</li>
    )
    })

    return (
        <>
            <button onClick={voltarInicio}>Voltar ao Início</button>
            {arrayMatchesMapeado}
        </>
    )
}

export default Matches;