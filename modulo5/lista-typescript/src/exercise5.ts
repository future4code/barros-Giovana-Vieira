type User = {
    name: string,
    email: string,
    role: string
}

const users: User[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const emailsAdminUsers = (arr: User[]): string[] => {
 
    let emails = []

    for(let user of arr){
        user.role === "admin" && emails.push(user.email)
    }

    return emails

}

console.log(emailsAdminUsers(users))