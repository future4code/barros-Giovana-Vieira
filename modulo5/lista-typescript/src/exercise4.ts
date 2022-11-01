enum SECTORS {
	MARKETING="marketing",
    SALES="sales",
    FINANCIAL="financial"
}

type Employee = {
	name: string,
    salary: number,
    sector: SECTORS,
    presential: boolean
}

const employees: Employee[] = [
	{ name: "Marcos", salary: 2500, sector: SECTORS.MARKETING, presential: true },
	{ name: "Maria" , salary: 1500, sector: SECTORS.SALES, presential: false},
	{ name: "Salete", salary: 2200, sector: SECTORS.FINANCIAL, presential: true},
	{ name: "João", salary: 2800, sector: SECTORS.MARKETING, presential: false},
	{ name: "Josué", salary: 5500, sector: SECTORS.FINANCIAL, presential: true},
	{ name: "Natalia", salary: 4700, sector: SECTORS.SALES, presential: true},
	{ name: "Paola", salary: 3500, sector: SECTORS.MARKETING, presential: true }
]

const employeesMarketingPresencial = (arr: Employee[]): Employee[] => {

	const employeesFiltered = arr.filter((employee)=>{
		if(employee.sector === SECTORS.MARKETING && employee.presential === true){
			return employee
		}
	})

	return employeesFiltered
}

console.log(employeesMarketingPresencial(employees))
