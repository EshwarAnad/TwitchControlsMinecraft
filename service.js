const uuidv1 = require('uuid/v1');
const commandsConfig = require('./config/commands');

const votingRoundDurationMilliseconds = 60 * 1000;

const state = {
  chatConnected: false,
  command: {},
};

const voting = {
  command: {
    name: null,
    description: null,
    options: [],
    optionVotes: [ [] ], // should be an object and not array of arrays, hash lookups are faster than filter.
  },
  roundEndsAt: 0,
};

const run = () => {
  setInterval(function() {
    if (Date.now() < voting.roundEndsAt) {
      const roundEndSeconds = Math.floor((voting.roundEndsAt - Date.now()) / 1000);

      if (!(roundEndSeconds % 10)) {
        console.log(`[ SERVICE:VOTING ] ROUND ENDS IN ${roundEndSeconds} SECONDS...`);
      }

      return;
    }

    /*
     * Setup the winning command for server to run.
     */

    console.log('[ SERVICE:VOTING ] ROUND ENDED');

    const winningCommandOptionIndex = voting.command.optionVotes
      .map(votes => votes.length)
      .reduce((winningIndex, totalVotes, index, votesArray ) => {
        return (totalVotes > votesArray[winningIndex]) ? index : winningIndex;
      }, 0);

    const winningCommandOptionVotesTotal = voting.command.optionVotes[winningCommandOptionIndex].length;
    const winningCommandOption = voting.command.options[winningCommandOptionIndex];

    if (winningCommandOption && winningCommandOptionVotesTotal > 0 && !winningCommandOption.pass) {
      state.command = {
        uuid: voting.command.uuid,
        name: voting.command.name,
        commandTemplate: voting.command.commandTemplate,
        option: winningCommandOption,
      };

      console.log('[ SERVICE:VOTING ] WINNING VOTE:');
      console.log(winningCommandOption);
    }

    /*
     * Setup the next round of voting.
     */

    voting.command = getRandomizedCommand();
    voting.roundEndsAt = Date.now() + votingRoundDurationMilliseconds;

    console.log('[ SERVICE:VOTING ] NEXT ROUND STARTING');
    console.log(`[ SERVICE:VOTING ] VOTE - ${voting.command.name}`);
    console.log(`[ SERVICE:VOTING ] VOTE OPTIONS:`);
    console.log(voting.command.options);
  }, 1000);
};

const handleChatMessage = (target, context, message, self) => {
  if (isNaN(message)) {
    return
  }

  const userId = context['user-id'];
  const voteIndex = parseInt(message) - 1;

  if (!voting.command.optionVotes[voteIndex]) {
    return;
  }

  for (let i = 0; i < voting.command.optionVotes.length; i++) {
    voting.command.optionVotes[i] = voting.command.optionVotes[i].filter(votedUserId => {
      return userId != votedUserId;
    });
  }

  voting.command.optionVotes[voteIndex].push(userId);

  console.log(voting.command);
};

const handleChatConnected = () => {
  console.log('[ SERVICE:CHAT ] CONNECTED');
  state.chatConnected = true;
};

const handleChatDisconnected = () => {
  console.log('[ SERVICE:CHAT ] DISCONNECTED');
  state.chatConnected = false;
};

module.exports = {
  state,
  voting,
  handleChatMessage,
  handleChatConnected,
  handleChatDisconnected,
  run,
};

/*
 * Helpers
 */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getUniqueRandomArrayElements(array, count) {
  const uniqueElements = [];

  while (uniqueElements.length < count) {
    const randomElement = getRandomArrayElement(array);

    if (!uniqueElements.includes(randomElement)) {
      uniqueElements.push(randomElement);
    }
  }

  return uniqueElements;
}

function shuffleArray(array) {
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

function getRandomizedCommand() {
  let weightedCommands = [];

  commandsConfig.forEach(command => {
    const weightedArray = Array.apply(null, Array(command.weight)).map(() => Object.assign({}, command));
    weightedCommands = weightedCommands.concat(weightedArray);
  });

  const command = getRandomArrayElement(weightedCommands);


  shuffleArray(command.options);

  command.options = getUniqueRandomArrayElements(command.options, command.presentableOptionsExcludingDefault);
  command.options = command.options.map(option => {
    if (option.durationRange) {
      option.duration = getRandomInt(option.durationRange[0], option.durationRange[1]);
    }

    if (option.amplificationRange) {
      option.amplification = getRandomInt(option.amplificationRange[0], option.amplificationRange[1]);
    }

    if (option.experienceRange) {
      option.experience = getRandomInt(option.experienceRange[0], option.experienceRange[1]);
    }

    if (option.quantityRange) {
      option.quantity = getRandomInt(option.quantityRange[0], option.quantityRange[1]);
    }

    if (option.repeatCommandRange) {
      option.repeatCommand = getRandomInt(option.repeatCommandRange[0], option.repeatCommandRange[1]);
    }

    return option;
  });

  command.uuid = uuidv1();
  command.options.push(command.defaultOption);
  command.optionVotes = Array.apply(null, Array(command.options.length)).map(() => []);

  return command;
}
