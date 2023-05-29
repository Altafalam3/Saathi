import { Client, Account } from "appwrite";
const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("645f406dcd2c117ff98b");

export const account = new Account(client);
