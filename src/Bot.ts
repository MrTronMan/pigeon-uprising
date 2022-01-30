import { Client, ClientOptions } from "discord.js";
import 'dotenv/config';
import ready from "./listeners/ready";

const token = process.env.TOKEN; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: []
});
ready(client);
client.login(token);