/* Você acabou de conseguir um emprego em uma importadora e precisa continuar a desenvolver o sistema de organização de estoque da empresa.
A pessoa desenvolvedora anterior a você chegou a criar uma função que ajusta os preços para o formato brasileiro, Aproveitando a função já feita, 
faça uma nova função que receba o array de estoque como parâmetro, use a função ajustaPreco para corrigir os preços e retorne a lista de estoque ordenada
pela quantidade de cada produto. */


type Iten = {
    name: string,
    quantity: number,
    unitValue: number
}

type ItenUpdated = {
    name: string,
    quantity: number,
    unitValue: string
}

const inventory: Iten[] = [
	{ name: "MacMugffin", quantity: 37, unitValue: 51.040},
	{ name: "Vassoura voadora", quantity: 56, unitValue: 210.0},
	{ name: "Laço da verdade", quantity: 32, unitValue: 571.5},
	{ name: "O precioso", quantity: 1, unitValue: 9181.923},
	{ name: "Caneta de 250 cores", quantity: 123, unitValue: 17},
	{ name: "Plumbus", quantity: 13, unitValue: 140.44},
	{ name: "Pokebola", quantity: 200, unitValue: 99.9915}
]

const adjustPrice = (price: number): string => {
	const adjustedPrice: string = price.toFixed(2).replace('.', ',')
	return `R$${adjustedPrice}`
}

const inventoryAdjusted = (arr: Iten[]): ItenUpdated[] => {
  
   let inventory: ItenUpdated[] = []

   for(let i = 0; i < arr.length; i++){
    inventory.push({name: arr[i].name, quantity: arr[i].quantity, unitValue: adjustPrice(arr[i].unitValue)})
   }

   let inventorySort = inventory.sort((a, b)=>{
    return a.quantity > b.quantity ? 1 : -1 
   })

   return inventorySort
    
}

console.log(inventoryAdjusted(inventory))