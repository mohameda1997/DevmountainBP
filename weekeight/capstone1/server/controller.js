require('dotenv').config()
const Sequelize = require('sequelize')
const {CONNECTION_STRING} = process.env



const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists users;
        drop table if exists contacts;    
            
            create table users (
                user_id serial primary key,
                username varchar,
                password varchar
            );

            create table contacts (
                contact_id serial primary key, 
                firstName varchar,
                lastName varchar,
                email varchar
            );

          

            insert into users (username, password)
            values ('admin', '123');

            
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    },
    getContacts: (req, res) => {
        sequelize.query(`select * from contacts
        ORDER BY contacts.firstName;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
    },

    createContact: (req, res) => {
        const {firstName, lastName, email} = req.body;
        sequelize.query(`insert into contacts ( firstName, lastName, email) 
        values ('${firstName}','${lastName}', '${email}') returning *;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(console.log(err => console.log(err))) 
    },

    
    
    deleteContact: (req, res) => {
        const {id} = req.params;
        sequelize.query(`DELETE FROM contacts
        WHERE contact_id = ${id}`)
        .then(dbRes => res.status(200).send(dbRes[0]))
    },
    getUsers: (req, res) => {
        sequelize.query(`select * from users;`)
        .then(dbRes => res.status(200).send(dbRes[0]))

},
    createUser: (req, res) => {
        const {username, password} = req.body;
        sequelize.query(`insert into users (username, password) 
        values ('${username}','${password}') returning *;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(console.log(err => console.log(err))) 
    },

    updateContact: (req, res) => {
        const { id } = req.params;
        const { firstName, lastName, email } = req.body;

        sequelize.query(`
            UPDATE contacts
            SET firstName = '${firstName}', lastName = '${lastName}', email = '${email}'
            WHERE contact_id = ${id}
            RETURNING *;
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    }

  
}