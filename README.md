# DJ Ruel - The PH Radio Discord Bot

DJ Ruel is a Discord bot designed to broadcast select Philippine radio stations directly into your voice channel. Enjoy 24/7 streaming of your favorite stations with seamless integration into your server!

## Features
- 🎵 **Live Streaming**: Tune in to various Philippine radio stations.
- 🎛 **Simple Commands**: Easily control the bot via Discord slash commands.
- 🔊 **High-Quality Audio**: Uses FFmpeg for smooth, uninterrupted playback.
- 📻 **Handpicked Stations**: Streams selected PH radio stations (not all).

## How to Use
1. Invite DJ Ruel to your Discord server.
2. Use the `/radio` command to start streaming.
3. Choose from the available station options.
4. Enjoy the music!

## Technical Details
- **Language**: JavaScript (Node.js)
- **Framework**: discord.js
- **Audio Processing**: @discordjs/voice & FFmpeg

For setup instructions, check the prerequisites below.

---

Stay tuned for more features and updates! 🚀

---

# Prerequisites for Running DJ Ruel - The PH Radio Discord Bot

## 1. Install Node.js
The bot requires Node.js to run. Install the latest LTS version from:
- [Node.js official site](https://nodejs.org/)
- Verify installation:
  ```sh
  node -v
  npm -v
  ```

## 2. Install FFmpeg
FFmpeg is required for streaming audio.

### **Windows**
1. Download FFmpeg from [https://ffmpeg.org/download.html](https://ffmpeg.org/download.html).
2. Extract it and add the `bin` folder to the **System Path**.
3. Verify installation:
   ```sh
   ffmpeg -version
   ```

### **Linux (Ubuntu/Debian)**
```sh
sudo apt update && sudo apt install ffmpeg -y
```
Verify:
```sh
ffmpeg -version
```

### **MacOS (Homebrew)**
```sh
brew install ffmpeg
```

## 3. Install Required Node.js Packages
Run the following command in your project directory:
```sh
npm install
```
Ensure you have these dependencies installed in `package.json`:
```json
"dependencies": {
  "discord.js": "^14.0.0",
  "@discordjs/voice": "^0.14.0",
  "dotenv": "^16.4.7",
  "ffmpeg-static": "^4.4.0",
  "prism-media": "^1.3.0"
}
```
If missing, install them manually:
```sh
npm install discord.js @discordjs/voice ffmpeg-static prism-media dotenv
```

## 4. Set Up a Discord Bot
1. Go to [Discord Developer Portal](https://discord.com/developers/applications).
2. Create a new bot and copy its **TOKEN**.
3. Invite the bot to your server with `applications.commands` and `voice` permissions.

## 5. Run the Bot
After setup, start the bot with:
```sh
node ./app/index.js
```

