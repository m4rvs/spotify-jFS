import {MongoClient} from "mongodb"

const URI =
	"mongodb+srv://m4rvs:m4rvs159456@mrvs-api.wjvzz.mongodb.net/?retryWrites=true&w=majority&appName=MRVS-API"

const client = new MongoClient(URI)

export const db = client.db("SpotifyMRVS")