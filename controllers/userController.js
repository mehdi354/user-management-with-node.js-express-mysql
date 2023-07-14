const db = require('../config/database')

exports.view = async (req,res) => {
    const query = `SELECT * FROM users WHERE status = "active"`;
    const [users] = await db.query(query);

    if(users) {
        res.status(200).render('index' , {
            users:users
        })
    }
    // res.render('index' , {users:users});
};


exports.getNewUser = (req,res) => {
    res.render('add-user');
}

exports.postNewUser = async (req,res) => {
    const query = `
    INSERT INTO users (first_name,last_name,email,phone,comments,state)
    VALUES (?,?,?,?,?,?)
    `;
    const data = await db.query(query,[
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.phone,
        req.body.comments,
        req.body.status,
    ]);

    console.log(data);
    // res.render('add-user', {response: 'success'})
    if(data) {
        res.render('add-user', { alert: 'User added successfully.' });
    }
    
}

exports.find = async (req,res) => {
    const searchTearm = req.body.search;
    console.log(searchTearm)
    const [users] = await db.query(
        'SELECT * FROM users WHERE first_name LIKE ? OR last_name',
        ["% "+ searchTearm + "%",
        "% "+ searchTearm + "%"]);
    console.log(users)

    if(users) {
        res.status(200).render('index' , {
            users:users
        })
    }
    
}

exports.viewSingleUser = async (req,res) => {
    const param = req.params.id;
    const query = `SELECT *  FROM users WHERE id = ?`;
    const [user] = await db.query(query , [param]);
    console.log(user[0])
    if(user) {
        res.status(200).render('view-user' ,{
            user:user[0]
        })
    }
    
}

exports.edit = async (req,res) => {
    const param = req.params.id;
    const query = `SELECT *  FROM users WHERE id = ?`;
    const [user] = await db.query(query , [param]);
    if(user) {
        res.status(200).render('update' ,{
            user:user[0]
        })
    }
    
}


exports.updateUser = async (req,res) => {
    const query = `
    UPDATE users SET first_name =?,last_name =?,email =?,phone =?,comments =?,status =? 
    WHERE id = ? `;
    const data = await db.query(query,[
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.phone,
        req.body.comments,
        req.body.status,
        req.body.id,
    ]);

    // res.render('add-user', {response: 'success'})
    if(data) {
        res.redirect('/')
    }
    
}

exports.delete = async (req,res) => {
    const query = `
    DELETE FROM users WHERE id = ? `;
    const data = await db.query(query,[
        req.body.id,
    ]);
    console.log(data)
    // res.render('add-user', {response: 'success'})
    if(data) {
        res.redirect('/')
    }
}