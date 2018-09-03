class User {
    constructor({id, username, email, recipes, plans}) {
        this.id = id;
        this.username = username;
        this.email = email;
    }
}

module.exports = User;


/*
    {
        id: 231231,
        username: "heyjp",
        email: "hey@jp.com",
        created: 15/03/2018,
        recipes: ["id1", "id2"], // recipes created
        plans: ["id"], // plans created
        favourited: ["id"] // recipe id's liked
        favouirted_plans: ["id"]
    }   
*/