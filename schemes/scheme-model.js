const db = require("../data/config");

function find() {
    return db("schemes as s")
        .select("s.scheme_name")
/* 
translates to:
SELECT *
FROM schemes;
*/
}

function findById(id) {
    return db("schemes as s")
        .where("s.id", id)
        .select("s.scheme_name")
/*
translates to:
SELECT scheme_name
FROM schemes
WHERE schemes.id = ?;
*/
}

function findSteps(id) {
    return db("steps")
        .innerJoin("schemes", "steps.scheme_id", "schemes.id" )
        .where("steps.scheme_id", id)
        .select("steps.id", "steps.instructions", "schemes.scheme_name")
/*
SELECT steps.id, steps.instructions, schemes.scheme_name
FROM steps
JOIN schemes ON steps.scheme_id = schemes.id
WHERE steps.scheme_id = ?;
*/
}

// findSteps() with (awkward) substitutions
// function findSteps(id) {
//     return db("steps as st")
//         .innerJoin("schemes as sc", "st.scheme_id", "sc.id" )
//         .where("st.scheme_id", id)
//         .select("st.id", "st.instructions", "sc.scheme_name")
// }

// only resolves to id of added scheme?
function add(scheme) {
    return db("schemes")
        .insert(scheme)
}

// 
// function update(changes, id) {
//     return db("schemes as s")
//         .where("s.id", id)
//         .update("s.scheme_name", changes)
// }

function update(changes, id) {
    return db("schemes as s")
        .where({ id })
        .update(changes)
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