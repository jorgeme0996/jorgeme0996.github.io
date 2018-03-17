const MongoClient = require('mongodb').MongoClient;
const db = require('./configDb')

function saveStudent (name,age,program,){
    return MongoClient.connect(db.url).then(function(cliente){

        let db = cliente.db ('cinta_roja') 
        let collections = db.collection('students')
        
        let data = {
            'name': name,
            'age':age,
            'program':program,
        }
        return collections.insert(data)
    }).then(function(docs){
        return docs
    })
}

function findStudent(name){
    return MongoClient.connect(db.url).then(function(client){
        let db = client.db('cinta_roja')
        let collections = db.collection('students')

        return collections.find({'name':name}).toArray()
    }).then (function(docs){
        return docs
    }).catch (function(err){
        return err
    })
}

function findUser(username,password){
    return MongoClient.connect(db.url).then(function(client){
        let db = client.db('cinta_roja')
        let collections = db.collection('user')

        return collections.find({'username':username,'password':password}).toArray()
    }).then (function(docs){
        return docs
    }).catch (function(err){
        return err
    })
}

function saveUser (name,username,password,){
    return MongoClient.connect(db.url).then(function(cliente){

        let db = cliente.db ('cinta_roja') 
        let collections = db.collection('user')
        
        let data = {
            'name': name,
            'username':username,
            'password':password,
        }
        return collections.insert(data)
    }).then(function(docs){
        return docs
    })
}

module.exports.findUser = findUser
module.exports.saveUser = saveUser
module.exports.saveStudent = saveStudent
module.exports.findStudent = findStudent