import mongoose from 'mongoose';

const Connection = async (username, password) => {
   //const URL = `mongodb+srv://${username}:${password}@cluster0.ezkihbr.mongodb.net/blog?retryWrites=true&w=majority`

    const URL = `mongodb://${username}:${password}@ac-7ibdmbk-shard-00-00.ezkihbr.mongodb.net:27017,ac-7ibdmbk-shard-00-01.ezkihbr.mongodb.net:27017,ac-7ibdmbk-shard-00-02.ezkihbr.mongodb.net:27017/?ssl=true&replicaSet=atlas-bl8btq-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;