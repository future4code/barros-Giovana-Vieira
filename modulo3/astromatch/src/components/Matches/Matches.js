

const Matches = ({arrayMatches})=>{

   const arrayMatchesMapeado = arrayMatches.map((item)=>{
    return(
        <li key={item.id}>{item.name}</li>
    )
})


    return (
        <>
            {arrayMatchesMapeado}
        </>
    )
}

export default Matches;