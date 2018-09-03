const authFunc = require('../auth/index.js');


const resolvers = {
    Mutation: {
        createUser: function (_, {input}) {
            let {email, password} = input;
            return authFunc.createUser({email, password})
                .then(res => {
                    return res.email;
                })
        },
        loginUser: (_, {input}) => {
            let {email, password} = input;

            return authFunc.authUser(email, password)
                .then(res => {
                    return res;
                })
        },
    },   
}

module.exports = resolvers;