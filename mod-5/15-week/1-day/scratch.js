// IMMUTABLE VS MUTATIONS
let state = {1: {name: "Will"}, 2: {name: "Alex"}, 3: {name: "Zaviar"}}

// let newState = {...state} // makes a shallow copy

// UPDATE a user
let newState = {...state, 2: {name: "Bob"}} // Updating user 1's name to Bob

// CREATE a user
// let newState = {...state, 4: {name: "Brandon"}} // Adding a new user named Brandon

// DELETE a user
delete newState["1"]

console.log(state !== newState) // shallow copy is not stricly equal TRUE


console.log(state["2"] === newState["2"]) // we made an immutable update this is good


// usersCopy["1"].name = "Bradon"

// console.log(users)
// console.log(usersCopy)



// let arr = [{hello: "world"}, {goodbye: "moon"}]

// let arrCopy = arr.slice()

// // console.log(arr === arrCopy)
// // console.log(arr[1] === arrCopy[1])
// arrCopy[1].goodbye = "world"

// console.log(arr)
// console.log(arrCopy)