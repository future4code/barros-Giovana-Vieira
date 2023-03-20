import userPurchase from "../src/testsFuncs/userPurchase"

describe.skip("Tests", () => {
    const user = {
        username: "Giovana",
        userBalance: 50000
    }

    test("Test 1", () => {
        expect(userPurchase(user, 30000)).toEqual({
            username: user.username,
            userBalance: user.userBalance - 30000
        })
    })

    test("Test 2", () => {
        expect(userPurchase(user, user.userBalance)).toEqual({
            username: user.username,
            userBalance: user.userBalance - user.userBalance
        })
    })

    test("Test 3", () => {
        expect(userPurchase(user, 60000)).toBe(undefined)
    })
})