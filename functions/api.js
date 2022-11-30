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

const handler = async (event, context) => {
    console.log(event);
    console.log(context);
    const allData = await getAllData();
    return {
        statusCode: 200,
        body: JSON.stringify([event, context, allData])
    }
}

module.exports = { handler }