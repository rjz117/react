//api/new-meetup
 
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    if(req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://raviraj:raviraj117@cluster0.4s6mv.mongodb.net/?retryWrites=true&w=majority');
        const database = client.db('meetup');

        const meetupCollection = database.collection('meetups')

        const result = await meetupCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({message : 'meetup inserted!'});
    }

}


export default handler;