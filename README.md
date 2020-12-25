# Twitch Controls Minecraft

## Have Questions? Need Setup Help?

Hey all! Thanks for the interest in the project. If you need help getting this setup, or have any questions - feel free to reach out to me on Twitter: https://twitter.com/braydonio

## What Is This?
**Twitch Controls Minecraft** is a Minecraft mod that lets your chat vote to make things happen in your minecraft server in real time. The options presented to vote on are entirely randomized and voting rounds by default last 60 seconds.

Your chat may choose to give you items, or maybe they want to cause a thunderstorm, perhaps summon a few chickens? Yep - all things they can do, in real time, while interacting with you as you stream and experience the shitstorm or bounty the give you.

**You can watch a video from a stream with this mod in action here: https://www.twitch.tv/videos/517641721**

<img src="https://github.com/braydo25/TwitchControlsMinecraft/blob/master/doc-assets/example-3.png" height="400" />
<img src="https://github.com/braydo25/TwitchControlsMinecraft/raw/master/doc-assets/example-1.png" />
<img src="https://github.com/braydo25/TwitchControlsMinecraft/blob/master/doc-assets/example-2.png" />

## Installation

This plugin has a pretty extensive setup and requires you to run a Spigot server, so bear with me..

### 1) Download Spigot & Setup Your Server
You'll need to setup a Minecraft Spigot server first. [Download the Spigot BuildTools.jar file to your desktop and follow the instructions here to run a Spigot server.](https://www.spigotmc.org/wiki/buildtools/#wikiPage)

### 2) Add The TwitchControlsMinecraft Plugin To Your Spigot Server
Open your spigot server on your desktop that you setup. Open the `scriptcraft/plugins` directory.
Copy the plugin file in the `TwitchControlsMinecraft-master/plugin` directory to your `scriptcraft/plugins` directory that you have open. It is called `twitchplays.js`.

### 3) Install Node.JS
This mod requires you to run a local server to handle the chat interaction that then is relayed to Spigot to make things happen in Minecraft in real time. [Download the Node.JS installer from here](https://nodejs.org/en/download/)

### 4) Download & Setup TwitchControlsMinecraft Dependencies
Next, [download the TwitchControlsMinecraft mod from here](https://github.com/braydo25/TwitchControlsMinecraft/archive/master.zip) and put it somewhere where you can easily access it. This guide will assume you download and unzip it on your desktop.

After downloading, unzip the file. You'll then need to open the **Terminal** on Mac/Linux, **Command Prompt** on Windows. You can find this by using your computer's search function.

In the Terminal on Mac/Linux type in `cd ~/Desktop/TwitchControlsMinecraft-master` and then press enter.
In the Command Prompt on Windows type in `cd desktop/TwitchControlsMinecraft-master` and then press enter.

This will navigate you into the TwitchControlsMinecraft mod's folder within the Terminal/Command prompt.

Type in `npm install` and press enter. This will install required dependencies to run the mod.

### 5) Setup Twitch Chat Integration
Open (https://twitchapps.com/tmi/)[https://twitchapps.com/tmi/] and follow the prompts. This will give you your chat OAuth token which lets the TwitchControlsMinecraft receive updates when anyone sends a message in your chat. This is how the mod tracks voting.

Open the .env file in the TwitchControlsMinecraft directory. It may be hidden on some computers - make sure that your file browser is set to display hidden files and folders.

In the .env file, edit the following lines..
* Edit the line `TMI_USERNAME=YOUR_CHANNEL_NAME` with your Twitch channel username. For example `TMI_USERNAME=LolThisIsFine`;
* Edit the line `TMI_PASSWORD=OAUTH_TOKEN` with your OAuth token you copied from the step above. For example `TMI_PASSWORD=oauth:abcdefghijklmnop123456789`;
* Edit the line `TMI_CHANNEL_NAME=YOUR_CHANNEL_NAME` with your Twitch channel username. For example `TMI_CHANNEL_NAME=LolThisIsFine`;

### 6) Run The Server & Mod
Open the **Terminal** on Mac/Linux or **Command Prompt** on Windows. You can find this by using your computer's search function.

In the Terminal on Mac/Linux type in `cd ~/Desktop/TwitchControlsMinecraft-master` and then press enter.
In the Command Prompt on Windows type in `cd desktop/TwitchControlsMinecraft-master` and then press enter.

Type `java -jar spigot-` in the Terminal/Command Prompt and press the TAB key. This should autocomplete the rest of the text you entered. Now press enter to start your server.

Open a new Terminal/Command Prompt window (Don't close the one running your server) and enter `cd ~/Desktop/TwitchControlsMinecraft-master`. Now type `node index.js` and press enter to start the voting mod.

### 7) Add The Voting Prompt To Your Stream
Now that the mod is running, you can access the voting prompt at by opening the URL (http://localhost:8000)[http://localhost:8000].

If you're using Streamlabs OBS, you can add a "Browser Source" to your stream and enter the url `http://localhost:8000` to display voting on stream.

If you're using Regular OBS or something else, you'll need to launch a web browser window and open (http://localhost:8000)[http://localhost:8000]. You then need to choose a `Window Source` or equivalent, and select the area or the browser window to show it in your stream.

### 8) Login To Your Spigot Server

Start Minecraft, go to `Multiplayer` and press the `Direct Connect` button.

In the `Server Address` field type `localhost`.

Press `Join Server`.

### 9) Start The Mod & You're Done

After you join your now running server, in the Minecraft chat, type in the command `/js twitchplays()`.

The server will now make things happen when your chat votes on them.

#### Stopping & Starting Again

When you finish playing, you can start the mod again in the future by following steps 6, 7, 8 and 9.

Enjoy! If you have questions, go ahead and (https://github.com/braydo25/TwitchControlsMinecraft/issues)[open an issue here].
