var http = require('http');
var slash = require('slash');
var lastCommandUUID = null;

var main = function() {
  console.log('Twitch Plays Client Handler: Started');

  setInterval(function() {
    http.request('http://localhost:8000/command.json', function(responseCode, responseBody) {
      if (responseCode != 200) {
        console.log('[ COMMAND INGESTION ]: Target server not responding...');
      }

      var response = JSON.parse(responseBody);
      var chatConnected = response.chatConnected;
      var command = response.command;

      if (!chatConnected) {
        echo(player, '[ CHAT SERVICE ]: Reconnecting...');
      }

      if (!command.uuid || command.uuid == lastCommandUUID) {
        return;
      }

      lastCommandUUID = command.uuid;

      if (command.option.executableCommand) {
        console.log(responseBody);
        return;
      }

      var slashCommand = command.commandTemplate;

      slashCommand = slashCommand.replace('<id>', command.option.id);
      slashCommand = slashCommand.replace('<duration>', command.option.duration);
      slashCommand = slashCommand.replace('<amplification>', command.option.amplification);
      slashCommand = slashCommand.replace('<experience>', command.option.experience);
      slashCommand = slashCommand.replace('<quantity>', command.option.quantity);

      if (command.option.repeatCommand) {
        for (var i = 0; i < command.option.repeatCommand; i++) {
          var repeatSlashCommand = '' + slashCommand;
          var offsetRange = command.option.offsetRange;
          var xOffset = getRandomInt(offsetRange[0], offsetRange[1]) * (getRandomInt(0, 1) ? 1 : -1);
          var yOffset = getRandomInt(offsetRange[0], offsetRange[1]) * (getRandomInt(0, 1) ? 1 : -1);
          var zOffset = getRandomInt(offsetRange[0], offsetRange[1]) * (getRandomInt(0, 1) ? 1 : -1);

          repeatSlashCommand = repeatSlashCommand.replace('<randomXOffset>', xOffset);
          repeatSlashCommand = repeatSlashCommand.replace('<randomYOffset>', yOffset);
          repeatSlashCommand = repeatSlashCommand.replace('<randomZOffset>', zOffset);

          console.log(repeatSlashCommand);
          echo(repeatSlashCommand);
          slash(repeatSlashCommand);
        }
      } else {
        console.log(slashCommand);
        echo(slashCommand);
        slash(slashCommand);
      }
    });
  }, 2500);
}

exports.twitchplays = main;

/*
 * Helpers
 */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
