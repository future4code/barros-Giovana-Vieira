console.log("exercicio 4");

    const generateUniqueItems = (firstList, secondList) => {
        
        const newList = []
        const set = new Set();
    
        for(let i = 0; i < firstList.length; i++){
            newList.push(firstList[i])
        }

        for(let i = 0; i < secondList.length; i++){
            newList.push(secondList[i])
        }

        const newListFilter = newList.filter((item)=>{
            let duplicatedItem = set.has(item.nome);
            set.add(item.nome)
            return !duplicatedItem
        })

        console.log(newListFilter)
}

generateUniqueItems([
	{
		nome: "Banana"
	},
    {
		nome: "Banana"
	},
    {
		nome: "Laranja"
	}
], [
    {
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	},
	{
		nome: "Amora"
	}
])