const { REST, Routes } = require('discord.js');
require('dotenv').config()
const clientId = process.env.CLIENT_ID
const token = process.env.TOKEN
const commands = [
    {
    "name": "radio",
    "type": 1,
    "description": "Play a radio station",
    "options": [
        {
            "name": "radio",
            "description": "stations",
            "type": 3,
            "required": true,
            "choices": [
                {
                    "name": "Radyo Natin",
                    "value": "0"
                  },
                  {
                    "name": "MOR Entertainment",
                    "value": "1"
                  },
                  {
                    "name": "Magic 89.9",
                    "value": "2"
                  },
                  {
                    "name": "Love Radio",
                    "value": "3"
                  },
                  {
                    "name": "Win Radio",
                    "value": "4"
                  },
                  {
                    "name": "Monster Radio RX ",
                    "value": "5"
                  },
                  {
                    "name": "DZRH NEWS FM 94.3",
                    "value": "6"
                  },
                  {
                    "name": "Eagle FM",
                    "value": "7"
                  },
              
                  {
                    "name": "Easy Rock",
                    "value": "8"
                  },
              
                  {
                    "name": "Barangay LS",
                    "value": "9"
                  },
                  {
                    "name": "101.1 Yes! FM",
                    "value": "10"
                  },
              
                  {
                    "name": "Energy FM",
                    "value": "11"
                  },
              
                  {
                    "name": "Wish 107.5",
                    "value": "12"
                  }
            ]
        },
    ]
    },
    {
        "name": "stop",
        "description": "Stop Radio"
    }
];


// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

//and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();
