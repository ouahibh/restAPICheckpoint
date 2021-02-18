const User = require('../model/user')

module.exports.ListUser = (req, res) => {
    User.find()
        .then(users => res.send(users))
        .catch(err => res.send([]))
}

module.exports.AddUser = (req, res) => {
    const user = new User()
    user.name = req.body.name;
    user.age = req.body.age
    user.email = req.body.email
    user.save()
        .then(r => res.send('L\'utilisateur a été ajouter avec succés'))
        .catch(err => res.send('Il y\'a un problème l\'utilisateur n\'a pas été ajouté'))
}

module.exports.DeleteUser = (req, res) => {
    User.remove({
        '_id': req.body.id
    }).then(r => res.send('L\'utilisateur a été supprimer avec succés'))
        .catch(err => res.send('Il y\'a un problème l\'utilisateur n\'a pas été supprimer'))
}

module.exports.EditUser=(req,res)=>{
    User.updateOne({
        '_id': req.body.id
    }).then(r =>res.send('L\'utilisateur a été ajouter avec succés'))
        .catch(err => res.send('Il y\'a un problème l\'utilisateur n\'a pas été ajouté'));
}

