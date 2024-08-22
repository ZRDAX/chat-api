const { MongoClient, ObjectId } = require('mongodb'); 

let singleton;

async function connect(){
  if (singleton) return  singleton;

  const client = new MongoClient(process.env.DB_HOST);
  await client.connect();

  singleton = client.db(process.env.DB_DATABASE);
  return singleton;
}

let findALL = async (Collection)=>{
  const db = await connect();
  return await db.Collection(Collection).find().toArray();
}

module.exports = {findALL};
