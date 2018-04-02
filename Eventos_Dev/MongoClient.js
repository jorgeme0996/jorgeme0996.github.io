const MongoClient = require('mongodb').MongoClient;
const db = require('./configDb')

function saveEvent (name,fecha,cantper){
    return MongoClient.connect(db.url).then(function(cliente){

        let db = cliente.db ('evento_dev') 
        let collections = db.collection('eventos')
        
        let data = {
            'name': name,
            'fecha':fecha,
            'cantper':cantper,
            'asistentes':[]
        }
        return collections.insert(data)
    }).then(function(docs){
        return docs
    })
}

function findEvent(){
    return MongoClient.connect(db.url).then(function(client){
        let db = client.db('evento_dev')
        let collections = db.collection('eventos')

        return collections.find({}).toArray()
    }).then (function(docs){
        return docs
    }).catch (function(err){
        return err
    })
}

function Reg_Asistente(name,asistentes){
    return MongoClient.connect(db.url).then(
        function(client){  
        let db = client.db('evento_dev')
        let collections = db.collection('eventos')
    
        return collections.update({"name":name},{$push:{"asistentes":asistentes}})
    }).then(function(docs){
        return docs
    })
 }


module.exports.saveEvent = saveEvent
module.exports.findEvent = findEvent
module.exports.Reg_Asistente=Reg_Asistente
// function saveUser (name,username,password,){
//     return MongoClient.connect(db.url).then(function(cliente){

//         let db = cliente.db ('cinta_roja') 
//         let collections = db.collection('user')
        
//         let data = {
//             'name': name,
//             'username':username,
//             'password':password,
//         }
//         return collections.insert(data)
//     }).then(function(docs){
//         return docs
//     })
// }

// module.exports.findUser = findUser
// module.exports.saveUser = saveUser
