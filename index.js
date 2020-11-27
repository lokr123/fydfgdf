const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');
const fs = require('fs');
const i = require('./bot.json');
const countdown = require('countdown');

/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                ايدي شات معين
                 var channel =  msg.channel.id === "759850598497255454"
                 if (!channel) return false;

                                 تعريف اليمبد
                      var embed = new Discord.MessageEmbed()

                             كود ما يقبل برسال البوتات
                           if(message.author.bot) return;

                            كود هذا الامر فقط للسيرفرات
    if(!msg.channel.guild) return  msg.channel.send(' هذا الامر فقط للسيرفرات !!');

                            كود ما يقبل الى برتبه معينه 
                if (!message.member.hasPermission("ADMINISTRATOR"))


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
///بنق
client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(i.prefix+ "ping")) {
    message.channel.send(`Pong...`).then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp}  ms\nDiscord API: ${Math.round(client.ping)} ms\`\`\``)
 
    })
  }  
 });
///بنق




///افتار
client.on('message', message => {
  var cmd = message.content.split(' ')[0]
  if(cmd === `${i.prefix}avatar`){
    var user = message.mentions.users.first() || message.author
    if(!user) return
    var embed = new Discord.MessageEmbed()
    .setColor('#2F3136')
    .setThumbnail(user.avatarURL({dynamic: true}))
    .setImage(user.avatarURL({dynamic: true}))
    message.channel.send(embed)
  }
  });
  ///افتار
  
  
  
  
  ///انفايت
  client.on('message', msg => {  
    if (msg.content ===  (i.prefix+ "invite") ) { 
      var embed = new Discord.MessageEmbed()
    .setAuthor(`اذا حاب تدخل البوت لسيرفرك`)
    .setTitle('رابط البوت')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=754319938335801464&permissions=1075857414&scope=bot')
    msg.author.send(embed);
   msg.react("✅");
  } });
  ///انفايت
  
  
  
  
  ///كود فتح و قفل الشات
  client.on('message', message => {
    if(message.author.bot) return; 
    if (message.content === i.prefix +"قفل" ) {
    if(!message.channel.guild) return  message.channel.send(' هذا الامر فقط للسيرفرات !!');
  
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return  message.channel.send('');
           message.channel.updateOverwrite(message.guild.id, {
         SEND_MESSAGES: false
  
           }).then(() => {
                message.channel.send(`🔒** <#${message.channel.id}> تم اغلاق الشات.🔒**`)
           });
             }
  if (message.content === i.prefix +"فتح" ) {
    if(!message.channel.guild) return  message.channel.send(' هذا الامر فقط للسيرفرات !!');

  if(!message.member.hasPermission('MANAGE_MESSAGES')) return  message.channel.send('');
           message.channel.updateOverwrite(message.guild.id, {
         SEND_MESSAGES: true
  
           }).then(() => {
               message.channel.send(`🔓** <#${message.channel.id}> تم فتح الشات.🔓**`)
           });
             }
  });
  ///كود فتح و قفل الشات
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  client.on('message', msg => {  
    if (msg.content ===  (i.prefix+ "!") ) {
      var user = msg.mentions.users.first() || msg.author
      if(!user) return
  const embed = new Discord.MessageEmbed()
    .setColor('#2F3136')
    .setTitle('رابط')
    .setURL('https://discord.js.org/')
    .setAuthor(user.tag , user.avatarURL({dynamic: true}))
    .setDescription('سيرفر', 'https://discord.gg/FnwsY4')
    .setThumbnail(user.avatarURL({dynamic: true}))
    .addFields(
      { name: '1', value: '2' },
      { name: '3', value: '4' },
      { name: '5', value: '6', inline: true },
      { name: '7', value: '8', inline: true },
    )
    .addField('ksa1', 'KSA2' )
    .addField('ksa3', 'KSA4' ,  true)
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL({dynamic: true}));
  
  msg.channel.send(embed);
     }
  });
  

  
  
  
  
  
  
  
  
  
  
  
  client.on("message", function(message) {
    if(message.content.startsWith(i.prefix + "help")) {
      var user = message.author
      if(!user) return 
     let messageArgs = message.content.split(" ").slice(1).join(" ");
     let messageRPS = message.content.split(" ").slice(2).join(" ");
     let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
     let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
     var RpsEmbed = new Discord.MessageEmbed()
     .setAuthor(user.tag , user.avatarURL({dynamic: true}))
     .addField("عامه","👥",true)
     .addField("ادمنيه","👑",true)
     .addField(" العاب","🎮",true)
     .addField(" رموز","🔱",true)
     .setTimestamp()
     message.channel.send(RpsEmbed).then(msg => {
         msg.react('👥')
         msg.react("👑")
         msg.react("🎮")
         msg.react("🔱")
   .then(() => msg.react('👥'))
   .then(() =>msg.react('👑'))
   .then(() => msg.react('🎮'))
   .then(() => msg.react('🔱'))
   let reaction1Filter = (reaction, user) => reaction.emoji.name === '👥' && user.id === message.author.id;
   let reaction2Filter = (reaction, user) => reaction.emoji.name === '👑' && user.id === message.author.id;
   let reaction3Filter = (reaction, user) => reaction.emoji.name === '🎮' && user.id === message.author.id;
   let reaction4Filter = (reaction, user) => reaction.emoji.name === '🔱' && user.id === message.author.id;
   let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 2000000 });
   let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 2000000 });
   let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 2000000 });
   let reaction4 = msg.createReactionCollector(reaction4Filter, { time: 2000000 });
   reaction1.on("collect", r => {
     var embed = new Discord.MessageEmbed()
     .setAuthor(user.tag , user.avatarURL({dynamic: true}))
       .setColor("#000000")
       .setDescription(`
   :busts_in_silhouette:**__اوامر عامة__**:busts_in_silhouette:
   
\`\`\`
『 الامر
『 الامر
『 الامر
『 الامر
『 الامر\`\`\`
   `)
    message.author.send(embed)
     
   })
   reaction2.on("collect", r => {
     var embed = new Discord.MessageEmbed()
     .setAuthor(user.tag , user.avatarURL({dynamic: true}))
       .setColor("#000000")
       .setDescription(`
   :crown:  **__اوامر ادارية__**:crown: 
   
\`\`\`
${i.prefix}ping
${i.prefix}قفل/فتح
${i.prefix}bots
${i.prefix}اقتراح\`\`\`
   `)
   message.author.send(embed)
   
   })
   reaction3.on("collect", r => {
     var embed = new Discord.MessageEmbed()
     .setAuthor(user.tag , user.avatarURL({dynamic: true}))
       .setColor("#000000")//لاضافه المزيد من الاوامر تعرف السالفه
       .setDescription(`
   :video_game:**__اوامر العاب__**:video_game:
    
\`\`\`
1
\`\`\`
  `)
    message.author.send(embed)
   })
  
  reaction4.on("collect", r => {
    var embed = new Discord.MessageEmbed()
      .setColor("#000000")
      .setDescription(`
      \`\`\`                        -=-حروف-=-                        \`\`\`
      
      \`\`\`🅰 🅱 🅲 🅳 🅴 🅵 🅶 🅷 🅸 🅹 🅺 🅻 🅼 🅽 🅾 🅿 🆀 🆁 🆂 🆃 🆄 🆅 🆆 🆇 🆈 🆉\`\`\`
      \`\`\`🅐 🅑 🅒 🅓 🅔 🅕 🅖 🅗 🅘 🅙 🅚 🅛 🅜 🅝 🅞 🅟 🅠 🅡 🅢 🅣 🅤 🅥 🅦 🅧 🅨 🅩\`\`\`
      \`\`\`🄰 🄱 🄲 🄳 🄴 🄵 🄶 🄷 🄸 🄹 🄺 🄻 🄼 🄽 🄾 🄿 🅀 🅁 🅂 🅃 🅄 🅅 🅆 🅇 🅈 🅉 \`\`\`
      \`\`\`𝙰 𝙱 𝙲 𝙳 𝙴 𝙵 𝙶 𝙷 𝙸 𝙹 𝙺 𝙻 𝙼 𝙽 𝙾 𝙿 𝚀 𝚁 𝚂 𝚃 𝚄 𝚅 𝚆 𝚇 𝚈 𝚉 \`\`\`
      \`\`\`𝚊 𝚋 𝚌 𝚍 𝚎 𝚏 𝚐 𝚑 𝚒 𝚓 𝚔 𝚕 𝚖 𝚗 𝚘 𝚙 𝚚 𝚛 𝚜 𝚝 𝚞 𝚟 𝚠 𝚡 𝚢 𝚣\`\`\`
      \`\`\`𝘼 𝘽 𝘾 𝘿 𝙀 𝙁 𝙂 𝙃 𝙄 𝙅 𝙆 𝙇 𝙈 𝙉 𝙊 𝙋 𝙌 𝙍 𝙎 𝙏 𝙐 𝙑 𝙒 𝙓 𝙔 𝙕\`\`\`
      \`\`\`𝙖 𝙗 𝙘 𝙙 𝙚 𝙛 𝙜 𝙝 𝙞 𝙟 𝙠 𝙡 𝙢 𝙣 𝙤 𝙥 𝙦 𝙧 𝙨 𝙩 𝙪 𝙫 𝙬 𝙭 𝙮 𝙯\`\`\`
      \`\`\`𝘈 𝘉 𝘊 𝘋 𝘌 𝘍 𝘎 𝘏 𝘐 𝘑 𝘒 𝘓 𝘔 𝘕 𝘖 𝘗 𝘘 𝘙 𝘚 𝘛 𝘜 𝘝 𝘞 𝘟 𝘠 𝘡\`\`\`
      \`\`\`𝘢 𝘣 𝘤 𝘥 𝘦 𝘧 𝘨 𝘩 𝘪 𝘫 𝘬 𝘭 𝘮 𝘯 𝘰 𝘱 𝘲 𝘳 𝘴 𝘵 𝘶 𝘷 𝘸 𝘹 𝘺 𝘻\`\`\`
      \`\`\`𝗔 𝗕 𝗖 𝗗 𝗘 𝗙 𝗚 𝗛 𝗜 𝗝 𝗞 𝗟 𝗠 𝗡 𝗢 𝗣 𝗤 𝗥 𝗦 𝗧 𝗨 𝗩 𝗪 𝗫 𝗬 𝗭\`\`\`
      \`\`\`𝗮 𝗯 𝗰 𝗱 𝗲 𝗳 𝗴 𝗵 𝗶 𝗷 𝗸 𝗹 𝗺 𝗻 𝗼 𝗽 𝗾 𝗿 𝘀 𝘁 𝘂 𝘃 𝘄 𝘅 𝘆 𝘇\`\`\`
      \`\`\`𝖠 𝖡 𝖢 𝖣 𝖤 𝖥 𝖦 𝖧 𝖨 𝖩 𝖪 𝖫 𝖬 𝖭 𝖮 𝖯 𝖰 𝖱 𝖲 𝖳 𝖴 𝖵 𝖶 𝖷 𝖸 𝖹\`\`\`
      \`\`\`𝖺 𝖻 𝖼 𝖽 𝖾 𝖿 𝗀 𝗁 𝗂 𝗃 𝗄 𝗅 𝗆 𝗇 𝗈 𝗉 𝗊 𝗋 𝗌 𝗍 𝗎 𝗏 𝗐 𝗑 𝗒 𝗓\`\`\`
      \`\`\`𝕬 𝕭 𝕮 𝕯 𝕰 𝕱 𝕲 𝕳 𝕴 𝕵 𝕶 𝕷 𝕸 𝕹 𝕺 𝕻 𝕼 𝕽 𝕾 𝕿 𝖀 𝖁 𝖂 𝖃 𝖄 𝖅\`\`\`
      \`\`\`𝖆 𝖇 𝖈 𝖉 𝖊 𝖋 𝖌 𝖍 𝖎 𝖏 𝖐 𝖑 𝖒 𝖓 𝖔 𝖕 𝖖 𝖗 𝖘 𝖙 𝖚 𝖛 𝖜 𝖝 𝖞 𝖟\`\`\`
      \`\`\`𝔸 𝔹 𝔻 𝔼 𝔽 𝔾 𝕀 𝕁 𝕂 𝕃 𝕄 𝕆 𝕊 𝕋 𝕌 𝕍 𝕎 𝕏 𝕐\`\`\`
      \`\`\`𝕒 𝕓 𝕔 𝕕 𝕖 𝕗 𝕘 𝕙 𝕚 𝕛 𝕜 𝕝 𝕞 𝕟 𝕠 𝕡 𝕢 𝕣 𝕤 𝕥 𝕦 𝕧 𝕨 𝕩 𝕪 𝕫\`\`\`
      \`\`\`𝐴 𝐵 𝐶 𝐷 𝐸 𝐹 𝐺 𝐻 𝐼 𝐽 𝐾 𝐿 𝑀 𝑁 𝑂 𝑃 𝑄 𝑅 𝑆 𝑇 𝑈 𝑉 𝑊 𝑋 𝑌 𝑍\`\`\`
      \`\`\`𝑎 𝑏 𝑐 𝑑 𝑒 𝑓 𝑔 𝑖 𝑗 𝑘 𝑙 𝑚 𝑛 𝑜 𝑝 𝑞 𝑟 𝑠 𝑡 𝑢 𝑣 𝑤 𝑥 𝑦 𝑧\`\`\`
      \`\`\`𝑨 𝑩 𝑪 𝑫 𝑬 𝑭 𝑮 𝑯 𝑰 𝑱 𝑲 𝑳 𝑴 𝑵 𝑶 𝑷 𝑸 𝑹 𝑺 𝑻 𝑼 𝑽 𝑾 𝑿 𝒀 𝒁\`\`\`
      \`\`\`𝒂 𝒃 𝒄 𝒅 𝒆 𝒇 𝒈 𝒉 𝒊 𝒋 𝒌 𝒍 𝒎 𝒏 𝒐 𝒑 𝒒 𝒓 𝒔 𝒕 𝒖 𝒗 𝒘 𝒙 𝒚 𝒛\`\`\`
      \`\`\`Ａ Ｂ Ｃ Ｄ Ｅ Ｆ Ｇ Ｈ Ｉ Ｊ Ｋ Ｌ Ｍ Ｎ Ｏ Ｐ Ｑ Ｒ Ｓ Ｔ Ｕ Ｖ Ｗ Ｘ Ｙ Ｚ \`\`\`
      \`\`\`ａ ｂ ｃ ｄ ｅ ｆ ｇ ｈ ｉ ｊ ｋ ｌ ｍ ｎ ｏ ｐ ｑ ｒ ｓ ｔ ｕ ｖ ｗ ｘ ｙ ｚ\`\`\`
      \`\`\`Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ\`\`\`
      \`\`\` ⓐ ⓑ ⓒ ⓓ ⓔ ⓕ ⓖ ⓗ ⓘ ⓙ ⓚ ⓛ ⓜ ⓝ ⓞ ⓟ ⓠ ⓡ ⓢ ⓣ ⓤ ⓥ ⓦ ⓧ ⓨ ⓩ\`\`\`
      \`\`\`⒜ ⒝ ⒞ ⒟ ⒠ ⒡ ⒢ ⒣ ⒤ ⒥ ⒦ ⒧ ⒨ ⒩ ⒪ ⒫ ⒬ ⒭ ⒮ ⒯ ⒰ ⒱ ⒲ ⒳ ⒴ ⒵\`\`\`
      
      `)
  
          message.author.send(embed)
  })
  
  reaction4.on("collect", r => {
     var embed = new Discord.MessageEmbed()
       .setColor("#000000")
       .setDescription(`\`\`\`                        -=-ارقام-=-                        \`\`\`
       \`\`\`
  𝟶 𝟷 𝟸 𝟹 𝟺 𝟻 𝟼 𝟽 𝟾 𝟿
  𝟬 𝟭 𝟮 𝟯 𝟰 𝟱 𝟲 𝟳 𝟴 𝟵
  𝟘 𝟙 𝟚 𝟛 𝟜 𝟝 𝟞 𝟟 𝟠 𝟡
  𝟎 𝟏 𝟐 𝟑 𝟒 𝟓 𝟔 𝟕 𝟖 𝟗
  ⓵ ⓶ ⓷ ⓸ ⓹ ⓺ ⓻ ⓼ ⓽ ⓾
  ⓫ ⓬ ⓭ ⓮ ⓯ ⓰ ⓱ ⓲ ⓳ ⓴
  ⒈ ⒉ ⒊ ⒋ ⒌ ⒍ ⒎ ⒏ ⒐ ⒑ ⒒ ⒓ ⒔ ⒕ ⒖ ⒗ ⒘ ⒙ ⒚ ⒛
  ⑴ ⑵ ⑶ ⑷ ⑸ ⑹ ⑺ ⑻ ⑼ ⑽ ⑾ ⑿ ⒀ ⒁ ⒂ ⒃ ⒄ ⒅ ⒆ ⒇
  ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩ ⑪ ⑫ ⑬ ⑭ ⑮ ⑯ ⑰ ⑱ ⑲ ⑳
  ₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉
  ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁰
       \`\`\`
       `)
    message.author.send(embed)
   })
   
   reaction4.on("collect", r => {
     var embed = new Discord.MessageEmbed()
       .setColor("#000000")
       .setDescription(`\`\`\`                        -=-رموز-=-                        \`\`\`
       \`\`\`
꧁ ꧂ 「 」【 】⸦ ⸧⸎  ⸏ ⸐ ⸑ ⸒  ⸒ ⸓ ⸔ ⸕⸨ ⸩⧼ ⧽〖 〗⦃ ⦄ ⦅ ⦆ ⦇ ⦈ ⦉ ⦊ ⦋ ⦌ ⦍ ⦎ ⦏ ⦐ ⟦ ⟧ ⟨ ⟩ ⟪ ⟫⥊ ⥋ ⥌ ⥍ ⥎ ⥏ ⥐ ⥑ ⥒ ⥓⥤ ⥥ ⥦ ⥧ ⥨ ⥩ ⥪ ⥫ ⥬ ⥭ ⥮
シ ッ ツ ヅ ㊚ ㊛ ㊣ ㍐ 卐⸋⸗⏅ ⏆ ⏇ ⏈ ⏉ ⏋ ⏌ ⏍ ⏎  ⏐ ⏑ ⏒ ⏓ ⏔ ⏕ ⏖ ⏗ ⏘ ⏙ ⏚ ⏛ ⏜ ⏝ ⏞ ⏟ ⏠ ⏡ ⏢ ⏣ ⏤ ⏥ ⏦ ∞
⬒ ⬓ ⬔ ⬕ ⬖ ⬗ ⬘ ⬙ ⬚ ⬠ ⬡ ⊙ ● ⬢ ⬣⧣ ⧤ ⧥┅ ┆ ┇ ┈ ┉ ┊ ┋ ┌ ┍ ┎ ┏ ┐ ┑ ┒ ┓ └ ┕ ┖ ┗ ┘ ┙ ┚ ┛ ├ ┝ ┞ ┟ ┠ ┡ ┢ ┣ ┤ ┥ ┦ ┧ ┨ ┩ ┪ ┫ ┬ ┭ ┮ ┯ ┰ ┱ ┲ ┳ ┴ ┵ ┶ ┷ ┸ ┹ ┺ ┻ ┼ ┽ ┾ ┿ ╀ ╁ ╂ ╃ ╄ ╅ ╆ ╇ ╈ ╉ ╊ ╋ ╌ ╍ ╎ ╏ ═ ║ ╒ ╓ ╔ ╕ ╖ ╗ ╘ ╙ ╚ ╛ ╜ ╝ ╞ ╟ ╠ ╡ ╢ ╣ ╤ ╥ ╦ ╧ ╨ ╩ ╪ ╫ ╬ ╬﹌ ╭ ╮ ╭━ ┈ ━╮╭ ╯  ╯ ╰ ╰☆╮ ╱ ╲ ╳ ╴ ╵ ╶ ╷ ╸ ╹ ╺ ╻ ╼ ╽ ╾ ╿ ▀ ▁ ▂ ▃ ▄ ▅ ▆ ▇ █ ▉ ▊ ▋ ▌ ▍ ▎ ▏ ▐ ░ ▒ ▓ ▔ ▕ ▖ ▗ ▘ ▙ ▚ ▛ ▜ ▝ ▞ ▟ ■ □ ▢ ▣ ▤ ▥ ▦ ▧ ▨ ▩ ▪️ ▫️️ ▬ ▭ ▮ ▯ ▰ ▱ ▲ △ ▴ ▵ \▶️ ▷ ▸ ▹ ► ▻ ▼ ▽ ▾ ▿ \◀️ ◁ ◂ ◃ ◄ ◅ ◆ ◇ ◈ ◉ ۝  ◊ ○ ◌ ◍ ◎⍟  ⊕⊗ ⌥ ⌦ ⌧ ⌨ 〈 〉 ⌫ ⌬ ⌭ ⌮ ⌯ ⌰ ⌱ ⌲ ⌗ ⌘⌁ ⌂ 
⬀ ⬁ ⬂ ⬃ ⬄ ⬅️ ⬆️ ⬇️ ⬈ ⬉ ⬊ ⬋ ⬌ ⬍ ⬎ ⬏ ⬐ ⬑⟰ ⟱⟵ ⟶ ⟷ ⟸ ⟹ ⟺ ⟻ ⟼ ⟽ ⟾ ⟿ ⤀ ⤁ ⤂ ⤃ ⤄ ⤅ ⤆ ⤇ ⤈ ⤉ ⤊ ⤋ ⤌ ⤍ ⤎ ⤏ ⤐ ⤑ ⤒ ⤓ ⤔ ⤕ ⤖ ⤗ ⤘ ⤙ ⤚ ⤛ ⤜ ⤝ ⤞ ⤟ ⤠ ⤡ ⤢ ⤣ ⤤ ⤥ ⤦ ⤧ ⤨ ⤩ ⤪ ⤫ ⤬ ⤭ ⤮ ⤯ ⤰ ⤱ ⤲ ⤳ ⤴️ ⤵️ ⤶ ⤷ ⤸ ⤹ ⤺ ⤻ ⤼ ⤽ ⤾ ⤿ ⥀ ⥁➔ ➘ ➙ ➚ ➛ ➜← ↑ → ↓ \↔️ \↕️ \↖️ \↗️ \↘️ \↙️ ↚ ↛ ↜ ↝ ↞ ↟ ↠ ↡ ↢ ↣ ↤ ↥ ↦ ↧ ↨ \↩️ \↪️ ↫ ↬ ↭ ↮ ↯ ↰ ↱ ↲ ↳ ↴ ↵ ↶ ↷ ↸ ↹ ↺ ↻ ↼ ↽ ↾ ↿ ⇀ ⇁ ⇂ ⇃ ⇄ ⇅ ⇆ ⇇ ⇈ ⇉ ⇊ ⇋ ⇌ ⇍ ⇎ ⇏ ⇐ ⇑ ⇒ ⇓ ⇔ ⇕ ⇖ ⇗ ⇘ ⇙ ⇚ ⇛ ⇜ ⇝ ⇞ ⇟ ⇠ ⇡ ⇢ ⇣ ⇤ ⇥ ⇦ ⇧ ⇨ ⇩ ⇪ ⇫ ⇬ ⇭ ⇮ ⇯ ⇰ ⇱ ⇲ ⇳ ⇴ ⇵ ⇶ ⇷ ⇸ ⇹ ⇺ ⇻ ⇼ ↓ ⇽ ⇾ ⇿  ➝ ➞ ➟ ➠ ➢ ➣ ➤ ➥ ➦ ➧ ➨ ➩ ➪ ➫ ➬ ➭ ➮ ➯ ➱ ➲ ➳ ➴ ➵ ➶ ➷ ➸ ➹ ➺ ➻ ➼ ➽ ➾ ⟀ ⟁✢ ✣ ✤ ✥ ✦ ✧ ✧♱ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ✱ ✲  ✵ ✶ ✷ ✸ ✹ ✺ ✻ ✼ ✽ ✾ ✿ ❀ ❁ ❂ ❃ \❄️ ❅ ❆  ❈ ❉ ❊ ❋ ❍ ❏ ❐ ❑ ❒ ❖⚭ ⚮ ⚯  ✁  ✃ ✄ ✆ ✇ ✎ \✏️ ✐ ✑  ✓  ✕ \✖️ ✗ ✘ ✙ ✚ ✛ ✜♲ ♳ ♴ ♵ ♶ ♷ ♸ ♹ ♺  ♼ ♽ ⚐ ⚑ ⚀ ⚁ ⚂ ⚃ ⚄ ⚅♔ ♕ ♖ ♗ ♘ ♙ ♚ ♛ ♜ ♝ ♞  \♠️ ♡  \♣️  \♥️ \♦️  ♩ ♪ ♫ ♬ ♭ ♮ ♯ 🦲 ⌨︎︎ ☠︎︎   ⃢➺ ﹌ \🗒
  ⧄ ⧅ ⧆ ⧇ ⧈ ⧉ ⧊ ⧋ ⧌ ⧍ ⧎ ⧏ ⧐ ⧑ ⧒ ⧓ ⧔ ⧕ ⧖ ⧗ ⧘ ⧙ ⧚ ⧛ ⧜ ⧝ ⧞ ⧟ ⧡⧨ ⧩ ⧪ ⧫ ⧬ ⧭ ⧮ ⧯ ⧰ ⧱ ⧲ ⧳
          \`\`\``)
    message.author.send(embed)
   })
   
   reaction4.on("collect", r => {
    var embed = new Discord.MessageEmbed()
      .setColor("#000000")
      .setDescription(`\`\`\`                        -=-رموز2-=-                        \`\`\`
      \`\`\`
✸　•　*.　°·　\☀️　\🌎　°　\🌓　•　.°•\🚀 ✯✯　★　*　°　°·.　•　°★　•▁▂▃▅▆▇▇▆▅▃▂▁
 \`\`\``)
   message.author.send(embed)
  })
   


   
   
     })
   }
   });
  
  
  
  
  
  
  
   
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    client.on('ready', () => {//KinG ❥#5451 , Tσxic Cσdes
      let st = [` ${i.prefix}help`, ` prefix(${i.prefix})`];
      setInterval(function() {
        let status = st[Math.floor(Math.random() * st.length)];
        client.user.setActivity(status, "PLAYING WATCHING"); //  بدل الرابط PLAYING WATCHING  LISTENING  هنا اذا تبيه يكون بلاي او واتش او ليسنت
      }, 3000) // هنا تكتب الوقت الي تبيه يتغير فيه مثل كل 5 ثواني وكذا                                                                                                           
    })//KinG ❥#5451 , Tσxic Cσdes
  
  
  
  
  
  
  
  /*
    client.on("guildMemberAdd", member => {
      member.createDM().then(function (channel) {
      return channel.send(`<:rose:744977089072988161>  ولكم نورت السيرفر<:rose:744977089072988161> 
    :crown:اسم العضو  ${member}:crown:  
    انت العضو رقم ${member.guild.memberCount} `) 
    }).catch(console.error)
    })
  */
  /*
    client.on('message', async message => {
      if(message.author.bot) return;
      if(!message.guild) return;
              let invite = await message.channel
          .createInvite({ unique: true, temporary: false })
              let embed = new Discord.MessageEmbed()
              .setTitle(`A new random message lol`)
              .setThumbnail(message.guild.iconURL())
              .addField(`Server Members:`, `${message.guild.memberCount}`)
              .addField(`Server name:`, `${message.guild.name}`)
              .addField(`Server owner:`, `${message.guild.owner}`)
              .addField(`Server ID:`, `${message.guild.id}`)
              .addField(`Mesage author:`, `${message.author.tag} | ${message.author.id} | <@${message.author.id}>`)
              .addField(`Server Invite:`, `${invite}`)
              .setDescription(`\`\`\`${message.content}\`\`\``)
              .setColor("BLUE")
      client.channels.cache.get("hg").send(embed);
  
  })
  */
  
  
  
  
  
 
  
  
  

  
  
  
  
  
  
  

  
  
  
  
  
  
   



  
  
  
  
      client.on("message", message => {
        var args = message.content.split(" ");
        var sugg = message.content.split(" ").slice(1).join(" ");
        if (args[0] === i.prefix+"اقتراح"){
        if (!sugg){
            return message.channel.send("Usage : `"+args[0]+" <your suggest>`");
        }
        var chname = "test"; // اسم الروم
        var sugchanel = message.guild.channels.cache.find(ch => ch.name == chname); // اسم الروم 
        if (!sugchanel){
            return message.channel.send("**i can't find a suggestion channel please create one with name `"+chname+"`**");
        }
        message.channel.send("Thanks you for suggestion , your suggestion has been Sent in <#"+sugchanel.id+">")
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Suggestion By '+message.author.tag)
        .setDescription(`${sugg}`)
        sugchanel.send(embed).then(mes => {
        mes.react("👍").then(rec =>{
            mes.react("👎")
        })
        
        });
        }
    });
  
  
  
  
  
  
  
  
  






    




  























/*
  client.on("messageDelete", msg => {
    // var logChannel = client.channels.cache.find(ch => ch.id === "759850598497255454" <-- ايدي روم اللوق | logChannel id  );
     var logChannel = client.channels.cache.find(ch => ch.name === "test"// <-- ايدي روم اللوق | logChannel id  );       
     var sFa7 = new Discord.MessageEmbed().setAuthor(client.user.tag + "Logs")
      .setThumbnail(msg.author.avatarURL({dynamic:true})).setTimestamp().setFooter(msg.author.tag, msg.author.avatarURL({dynamic:true}))
      .setColor("RED")
      .setDescription(`**
  
    في هذا الشات :  [ ${msg.channel} ]  
    
    صاحب الرسالة : [ ${msg.author} ] 
    
    > الرسالة المحذوفه :
    \`\`\`${msg}\`\`\` **`)
    
    if (!logChannel) return;
    logChannel.send(sFa7);
    });
*/



  
  
  
  
  
  
  client.on('message', msg => {
    if (msg.content === 'السلام عليكم') {
      msg.channel.send('وعليكم السلام')
    }
    if (msg.content === 'سلام عليكم') {
      msg.channel.send('وعليكم السلام')
    }
    
  });
  
  
  
  
  client.on("message", message => {
    if (message.content ===  "bots") {
      var list_all = [];
      message.guild.members.cache.forEach(client => {
        if (!client.user.bot) return;
        list_all.push(`<@${client.user.id}>`);
      });
      message.channel.send(list_all.join(", "));
    }
  });
  
  










      



















  let spread = JSON.parse(fs.readFileSync('./spread.json' , 'utf8'));
  
  
  client.on('message', message => {
      if(message.content.startsWith(i.prefix + "off1")) {
        if(!message.channel.guild) return  message.channel.send(' هذا الامر فقط للسيرفرات !!');
          if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
  spread[message.guild.id] = {
  onoff: 'Off',
  }
  message.channel.send(`**⛔ تم الغاء عدم النشر⛔**`)
            fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
  
          })
          client.on('message', message => {
      if(message.content.startsWith(i.prefix + "on1")) {
        if(!message.channel.guild) return  message.channel.send(' هذا الامر فقط للسيرفرات !!');
          if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
  spread[message.guild.id] = {
  onoff: 'On',
  }
  message.channel.send(`**✅تم تفعيل عدم النشر✅**`)
            fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
  
          })
      client.on('message', message => {
      var args = message.content.split(/[ ]+/)
      if(message.content.includes('http://www.gmail.com/')){
              if(!spread[message.guild.id]) spread[message.guild.id] = {
          onoff: 'Off'
              }
          if(spread[message.guild.id].onoff === 'Off') return;
          message.delete()
          return message.reply(`**⛔ممنوع النشر⛔**`)
      }
  });
  
  client.on('message', message => {
      var args = message.content.split(/[ ]+/)
      if(message.content.includes('https://www.snapchat.com/')){
              if(!spread[message.guild.id]) spread[message.guild.id] = {
          onoff: 'Off'
  
              }
          if(spread[message.guild.id].onoff === 'Off') return;
          message.delete()
          return message.reply(`**⛔ممنوع النشر⛔**`)
      }
  });
  
  
  client.on('message', message => {
      var args = message.content.split(/[ ]+/)
      if(message.content.includes('https://www.instagram.com/')){
              if(!spread[message.guild.id]) spread[message.guild.id] = {
          onoff: 'Off'
              }
          if(spread[message.guild.id].onoff === 'Off') return;
          message.delete()
          return message.reply(`**⛔ممنوع النشر⛔**`)
      }
  });
  
  
  client.on('message', message => {
      var args = message.content.split(/[ ]+/)
      if(message.content.includes('https://www.twitter.com/')){
              if(!spread[message.guild.id]) spread[message.guild.id] = {
          onoff: 'Off'
              }
          if(spread[message.guild.id].onoff === 'Off') return;
          message.delete()
          return message.reply(`**⛔ممنوع النشر⛔**`)
      }
  });
  
  
  client.on('message', message => {
      var args = message.content.split(/[ ]+/)
      if(message.content.includes('http://www.facebook.com/')){
              if(!spread[message.guild.id]) spread[message.guild.id] = {
          onoff: 'Off'
              }
          if(spread[message.guild.id].onoff === 'Off') return;
          message.delete()
          return message.reply(`**⛔ممنوع النشر⛔**`)
      }
  });
  
  
  
  client.on('message', message => {
      var args = message.content.split(/[ ]+/)
      if(message.content.includes('https://www.youtube.com/')){
              if(!spread[message.guild.id]) spread[message.guild.id] = {
          onoff: 'Off'
              }
          if(spread[message.guild.id].onoff === 'Off') return;
          message.delete()
          return message.reply(`**⛔ممنوع النشر⛔**`)
      }
  
  });
  
  client.on('message', message => {
      var args = message.content.split(/[ ]+/)
      if(message.content.includes('https://www.discordapp.com/')){
              if(!spread[message.guild.id]) spread[message.guild.id] = {
          onoff: 'Off'
              }
          if(spread[message.guild.id].onoff === 'Off') return;
          message.delete()
          return message.reply(`**⛔ممنوع النشر⛔**`)
      }
  
  });
  client.on('message', message => {
      var args = message.content.split(/[ ]+/)
      if(message.content.includes('https://discord.gg/')){
              if(!spread[message.guild.id]) spread[message.guild.id] = {
          onoff: 'Off'
              }
          if(spread[message.guild.id].onoff === 'Off') return;
          message.delete()
          return message.reply(`**⛔ممنوع النشر⛔**`)
      }
  
  });
  client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://youtu.be/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
        return message.reply(`**⛔ممنوع النشر⛔**`)
    }

});
client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if(message.content.includes('https://www.nonolive.com/')){
          if(!spread[message.guild.id]) spread[message.guild.id] = {
      onoff: 'Off'
          }
      if(spread[message.guild.id].onoff === 'Off') return;
      message.delete()
      return message.reply(`**⛔ممنوع النشر⛔**`)
  }

});
client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if(message.content.includes('https://www.twitch.tv/')){
          if(!spread[message.guild.id]) spread[message.guild.id] = {
      onoff: 'Off'
          }
      if(spread[message.guild.id].onoff === 'Off') return;
      message.delete()
  return message.reply(`**⛔ممنوع النشر⛔**`)
  }

});





















const cuttweets = [
  'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
  'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
  'كت تويت | الحرية لـ ... ؟',
  'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
  'كت تويت ‏| كلمة للصُداع؟',
  'كت تويت ‏| ما الشيء الذي يُفارقك؟',
  'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
  'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
  'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
  'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
  '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
  'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
  '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
  '‏كت تويت | وش يفسد الصداقة؟',
  '‏كت تويت | شخص لاترفض له طلبا ؟',
  '‏كت تويت | كم مره خسرت شخص تحبه؟.',
  '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
  '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
  '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
  '‏كت تويت |أقوى كذبة مشت عليك ؟',
  '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
  'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
  '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
  '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
  '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
  '‏كت تويت | مطلبك الوحيد الحين ؟',
  '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
  
]
 
client.on ('message', async (toxicc) => {
  if (!toxicc.guild || toxicc.author.bot) return false;
  switch (toxicc.content.split(' ') [0]){
    case i.prefix + 'cuttweet':
      var embed = new Discord.MessageEmbed()
      .setTitle("Cut Tweet")
      .setThumbnail("https://cdn.discordapp.com/attachments/729135696580968460/771922685588144138/213432432546547658667996865542.png")
      .setDescription(cuttweets [Math.floor (Math.random () * cuttweets.length)])
      .setFooter(toxicc.author.tag, toxicc.author.displayAvatarURL)
      toxicc.channel.send (embed);
      break;
  }
})




const sarahas = [
  'صراحه  |  صوتك حلوة؟',
  'صراحه  |  التقيت الناس مع وجوهين؟',
  'صراحه  |  شيء وكنت تحقق اللسان؟',
  'صراحه  |  أنا شخص ضعيف عندما؟',
  'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
  'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
  'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
  'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
  'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
  'صراحه  |  أشجع شيء حلو في حياتك؟',
  'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
  'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
  'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
  'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
  'صراحه  |  نظرة و يفسد الصداقة؟',
  'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
  'صراحه  |  شخص معك بالحلوه والمُره؟',
  'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
  'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
  'صراحه  |  وش تتمنى الناس تعرف عليك؟',
  'صراحه  |  ابيع المجرة عشان؟',
  'صراحه  |  أحيانا احس ان الناس ، كمل؟',
  'صراحه  |  مع مين ودك تنام اليوم؟',
  'صراحه  |  صدفة العمر الحلوة هي اني؟',
  'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
  'صراحه  |  صفة تحبها في نفسك؟',
  'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
  'صراحه  |  تصلي صلواتك الخمس كلها؟',
  'صراحه  |  ‏تجامل أحد على راحتك؟',
  'صراحه  |  اشجع شيء سويتة بحياتك؟',
  'صراحه  |  وش ناوي تسوي اليوم؟',
  'صراحه  |  وش شعورك لما تشوف المطر؟',
  'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
  'صراحه  |  ما اكثر شي ندمن عليه؟',
  'صراحه  |  اي الدول تتمنى ان تزورها؟',
  'صراحه  |  متى اخر مره بكيت؟',
  'صراحه  |  تقيم حظك ؟ من عشره؟',
  'صراحه  |  هل تعتقد ان حظك سيئ؟',
  'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
  'صراحه  |  كلمة تود سماعها كل يوم؟',
  'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
  'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
  'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
  'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
  '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
  'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
  '‏صراحه | هل تحب عائلتك ام تكرههم؟',
  '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
  '‏صراحه  |  هل خجلت من نفسك من قبل؟',
  '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
  '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
  '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
   '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
  '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
  '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
  'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
  '‏صراحه  |  ما هو عمرك الحقيقي؟',
  '‏صراحه  |  ما اكثر شي ندمن عليه؟',
  'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
client.on ('message', async (toxicc) => {
  if (!toxicc.guild || toxicc.author.bot) return false;
  switch (toxicc.content.split(' ') [0]){
    case    i.prefix + 'صراحة':
      var embed = new Discord.MessageEmbed()
      .setTitle("صراحة")
      .setThumbnail("https://cdn.discordapp.com/attachments/729135696580968460/771922685588144138/213432432546547658667996865542.png")
      .setDescription(sarahas [Math.floor (Math.random () * sarahas.length)])
      .setFooter(toxicc.author.tag, toxicc.author.displayAvatarURL)
      toxicc.channel.send (embed);
      break;
  }
});








/*
client.on('message' , roodx=>{  

  if(roodx.author.bot)return;
  if(roodx.channel.id !== '759850598497255454') return;
  if(roodx)
  {
   roodx.channel.send('https://media.discordapp.net/attachments/754398470558842930/759303476885979146/42_E25EB2C.gif')
  }
});
*/






client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(i.prefix+ "تهكير")) {
    message.channel.send(`يتم التجهيز`).then((msg) => {
      msg.edit(`83124780024
      0% ░░░░░░░░░░░░░░░░░░░░
      `)
      msg.edit(`35678686782
      5% █░░░░░░░░░░░░░░░░░░
      `)
      msg.edit(`12445768820
      10% ██░░░░░░░░░░░░░░░░░░
      `)
      msg.edit(`77345258090
      15% ███░░░░░░░░░░░░░░░░░
      `)
      msg.edit(`76573660857
      20% ████░░░░░░░░░░░░░░░░
      `)
      msg.edit(`34766685473
      25% █████░░░░░░░░░░░░░░░
      `)
      msg.edit(`35678686782
      30% ██████░░░░░░░░░░░░░░
      `)
      msg.edit(`12445768820
      35% ███████░░░░░░░░░░░░░
      `)
      msg.edit(`77345258090
      40% ████████░░░░░░░░░░░░
      `)
      msg.edit(`76573660857
      45% █████████░░░░░░░░░░░
      `)
      msg.edit(`34766685473
      50% ██████████░░░░░░░░░░
      `)
      msg.edit(`35678686782
      55% ███████████░░░░░░░░░
      `)
      msg.edit(`12445768820
      60% ████████████░░░░░░░░
      `)
      msg.edit(`77345258090
      65% █████████████░░░░░░░
      `)
      msg.edit(`76573660857
      70% ██████████████░░░░░░
      `)
      msg.edit(`34766685473
      75% ███████████████░░░░░
      `)
      msg.edit(`35678686782
      80% ████████████████░░░░
      `)
      msg.edit(`12445768820
      85% █████████████████░░░
      `)
      msg.edit(`77345258090
      90% ██████████████████░░
      `)
      msg.edit(`76573660857
      95% ███████████████████░
      `)
      msg.edit(`34766685473
      100% ███████████████████
      `)

      msg.edit(`error`)
      
      
 
    })
  }  
 });



































































































































































  
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
client.login(i.token); 