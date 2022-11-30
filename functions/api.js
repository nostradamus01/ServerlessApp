const { MongoClient, ServerApiVersion } = require('mongodb');
const bcrypt = require('bcrypt');

const uri = process.env.MongoURL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const connect = async (callback) => {
    try {
        await client.connect();
        console.log('Connected successfully');
        await callback();
        client.close();
    } catch (e) {
        console.error(e);
    }
}

const getAllData = async () => {
    await connect(async () => {
        try {
            const matches = await client.db('fifa22cup').collection('matches').find().toArray();
            const results = await client.db('fifa22cup').collection('results').find().toArray();
            return {
                allMatches: matches,
                allResults: results
            }
        } catch (e) {
            return null;
        }
    });
};

const handler = async (event, context) => {
    console.log(event);
    console.log(context);
    const allData = await getAllData();
    if (allData) {
        return {
            statusCode: 200,
            body: JSON.stringify(allData)
        }
    } else {
        return {
            statusCode: 404
        }
    }
}

module.exports = { handler }