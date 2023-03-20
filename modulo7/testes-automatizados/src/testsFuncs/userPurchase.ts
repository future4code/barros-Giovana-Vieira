import User from "../model/User"

const userPurchase = (user: User, purchasePrice: number): User | undefined => {
    if(user.userBalance >= purchasePrice){      
        const updatedUser = {
            username: user.username,
            userBalance: user.userBalance - purchasePrice
        }
        return updatedUser
    } else {
        return undefined
    }
}

export default userPurchase