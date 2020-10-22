const db = require("../data/config");

function find() {
/* 
    translates to:
        SELECT *
        FROM schemes;
*/
    return db("schemes as s")
        .select("s.scheme_name")
}

function findById(id) {
    return db("schemes as s")
        .where("s.id", id)
        .select("s.scheme_name")
}

// function findSteps(id) {
//     return db("steps as st")
//         .innerJoin("schemes as sc", "st.scheme_id", "sc.id" )
//         .where("st.scheme_id", id)
//         .select("st.id", "st.instructions", "sc.scheme_name")
// } // with (awkward) subsitutions

function findSteps(id) {
    return db("steps")
        .innerJoin("schemes", "steps.scheme_id", "schemes.id" )
        .where("steps.scheme_id", id)
        .select("steps.id", "steps.instructions", "schemes.scheme_name")
}

// only resolves to id of added scheme?
function add(scheme) {
    return db("schemes")
        .insert(scheme)
}

function update(changes, id) {
    return ("schemes as s")
        .where("s.id", id)
        .update("s.scheme_name", changes)
}

// pending: resolved to removed scheme, resolves to null on an invalid id (already does?)
function remove(id) {
    return db("schemes as s")
        .where("s.id", id)
        .del("scheme")
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}