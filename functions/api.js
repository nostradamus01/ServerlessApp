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

const handler = async (event, context) => {
    let response = null;

    const body = JSON.parse(event.body);
    
    switch (body.action) {
        case 'getAllUsers': 
            response = await getAllUsers();
            break;
        case 'getAllData':
            response = await getAllData();
            break;
    }

    return response ? {
        statusCode: 200,
        body: JSON.stringify([event, context, response])
    } : {
        statusCode: 404
    }
}

module.exports = { handler }