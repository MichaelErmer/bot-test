'strict mode'

test = function (bot) {

this.commands = ['echo'];

this.help = function () {
  return "Runs a test function";
};

this.echo = function(channel, message) {
  bot.say(channel, "Echo to" + message);
};


};


exports = test;