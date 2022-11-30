const { MongoClient, ServerApiVersion } = require('mongodb');
const bcrypt = require('bcrypt');

const uri = process.env.MongoURL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const getAllData = async () => {
    try {
        await client.connect();
        const matches = await client.db('fifa22cup').collection('matches').find().toArray();
        const results = await client.db('fifa22cup').collection('results').find().toArray();
        return {
            allMatches: matches,
            allResults: results
        }
    } catch (e) {
        return e.toString();
    } finally {
        client.close();
    }
};

const getAllUsers = async () => {
    try {
        await client.connect();
        const users = await client.db('fifa22cup').collection('users').find().toArray();
        return {
            allUsers: users
        }
    } catch (e) {
        return e.toString();
    } finally {
        client.close();
    }
};

module.exports.handler = async (event, context) => {
    let data = null;

    const body = JSON.parse(event.body);

    switch (body.action) {
        case 'getAllUsers': 
            data = await getAllUsers();
            break;
        case 'getAllData':
            data = await getAllData();
            break;
    }

    let response = null;
    if (data) {
        response = {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    } else {
        response = {
            statusCode: 404
        }
    }

    return response;
}