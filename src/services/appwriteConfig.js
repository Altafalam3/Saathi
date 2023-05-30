import { Client, Account, Databases } from "appwrite";
const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("645f406dcd2c117ff98b");

export const account = new Account(client);
export const databases = new Databases(client, "6475bc41d08143bd0b2e");
