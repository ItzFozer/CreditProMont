const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const daily = Math.floor(Math.random() * 350) + 10;
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
var prefix = "+"
var adminprefix = '+'

 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

et credits = JSON.parse(fs.readFileSync('./credits.json', 'utf8')); // Edit Texo
 
const cool = [];
client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
 
  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

 
  if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, لقد حدت خطأ  **`);
    if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, لقد حدت خطأ  **`);
    if(isNaN(args[2]) || args[2] < 1) return message.channel.send(`:interrobang: **| ${message.author.username}, لقد حدت خطأ  **`);
  if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`); 
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1; 
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**✍ | \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** ‼ | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
   message.channel.send(`**${mention.username}, your <a:credit:588071560477278208> balance is** **\`$${credits[mention.id].credits}\`**. `);
 
 }
 
 }
       if(args[0].toLowerCase() === `${prefix}daily`) {  
     
if(credits[message.author.id].daily != moment().format('L')) {
 
      credits[message.author.id].daily = moment().format('L');
         
 
         let ammount = (30, 50, 60, 70, 80, 90, 100, 110,120,45);
         credits[author].credits += ammount;

         message.channel.send(`** ${message.author.username}, you received your 💵 ${ammount} daily credits!**`);
   's'.writeFile("./credits.json", JSON.stringify(credits), function(e) {
           if (e) throw e;
       })
if(mention.message.author.username) return 
let user = message.mentions.users.first();
          user.sendMessage(`🏧|  Transfer Receipt \`\`\`You have received ${balance} from user (${message.author.username})(${message.guild.id}) Server ${message.guild.name})\`\`\``);




     }else{
     message.channel.send(`:stopwatch: : **Please cool down  ${moment().endOf('day').fromNow()}**`);
 
     }
 
       }

});


client.login(process.env.BOT_TOKEN);