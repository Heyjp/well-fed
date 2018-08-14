const inputs = `
    input UserInput {
        email: String
        password: String
    }
`

const mutations = `
        createUser(input: UserInput): String
        loginUser(input: UserInput): String
`

const types = `
`

const queries = `
`

module.exports = { inputs, mutations, types, queries };