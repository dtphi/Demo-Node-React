'use strict'

const { Client, GatewayIntentBits } = require('discord.js')
const {
    CHANEL_ID_DISCORD,
    TOKEN_DISCORD
} = process.env

class LoggerService {
    constructor() {
        this.client = new Client({
            intents: [
                GatewayIntentBits.DirectMessages,
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent
            ]
        })

        // add the channel id
        this.channelId = CHANEL_ID_DISCORD

        this.client.on('ready', () => {
            console.log(`Logged is as ${this.client.user.tag}`)
        })

        this.client.login(TOKEN_DISCORD)
    }

    sendToMessage(message = 'message') {
        const channel = this.client.channels.cache.get(this.channelId)
        if (!channel) {
            console.log(`Could not find the channel ${channel}`)

            return;
        }
        // You can improve send the message use Chat GPT message call api....
        channel.send(message).catch(e => console.log(e))

    }

    sendFormatToMessage(logData) {
        const { code, message = 'This is some additional', title = 'Code example' } = logData

        //if (1 == 1) {} check prod and dev env.

        const codeMessage = {
            content: message,
            embeds: [
                {
                    color: parseInt('00ff00', 16),
                    title,
                    description: '```json\n' + JSON.stringify(code, null, 2) + '\n```',
                }
            ]
        }

        this.sendToMessage(codeMessage)

    }
}

const loggerService = new LoggerService()
module.exports = loggerService