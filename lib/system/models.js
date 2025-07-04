const models = {
   users: {
      afk: -1,
      afkReason: '',
      afkObj: {},
      banned: false,
      ban_temporary: 0,
      ban_times: 0,
      premium: false,
      expired: 0,
      lastseen: 0,
      hit: 0,
      warning: 0,
      example: []
   },
   groups: {
      activity: 0,
      antidelete: true,
      antilink: false,
      antivirtex: false,
      antitagsw: true,
      filter: false,
      left: false,
      localonly: false,
      mute: false,
      viewonce: true,
      autosticker: false,
      member: {},
      text_left: '',
      text_welcome: '',
      welcome: true,
      expired: 0,
      stay: false
   },
   chats: {
      chat: 0,
      lastchat: 0,
      lastseen: 0
   },
   setting: {
      autobackup: false,
      autodownload: true,
      antispam: true,
      debug: false,
      error: [],
      hidden: [],
      pluginDisable: [],
      receiver: [],
      groupmode: false,
      sk_pack: 'Sticker by',
      sk_author: '© dailylepedia-networks',
      self: false,
      noprefix: false,
      multiprefix: true,
      prefix: ['.', '#', '!', '/'],
      toxic: ["ajg", "ajig", "anjas", "anjg", "anjim", "anjing", "anjrot", "anying", "asw", "autis", "babi", "bacod", "bacot", "bagong", "bajingan", "bangsad", "bangsat", "bastard", "bego", "bgsd", "biadab", "biadap", "bitch", "bngst", "bodoh", "bokep", "cocote", "coli", "colmek", "comli", "dajjal", "dancok", "dongo", "fuck", "gelay", "goblog", "goblok", "guoblog", "guoblok", "hairul", "henceut", "idiot", "itil", "jamet", "jancok", "jembut", "jingan", "kafir", "kanjut", "kanyut", "keparat", "kntl", "kontol", "lana", "loli", "lont", "lonte", "mancing", "meki", "memek", "ngentod", "ngentot", "ngewe", "ngocok", "ngtd", "njeng", "njing", "njinx", "oppai", "pantek", "pantek", "peler", "pepek", "pilat", "pler", "pornhub", "pucek", "puki", "pukimak", "redhub", "sange", "setan", "silit", "telaso", "tempek", "tete", "titit", "toket", "tolol", "tomlol", "tytyd", "wildan", "xnxx"],
      online: true,
      onlyprefix: '+',
      owners: ['6282164961900'],
      lastReset: new Date * 1,
      msg: 'Halo +tag 🪸\nSaya adalah sistem otomatis (Bot WhatsApp) yang dapat membantu menjalankan perintah, mencari, dan mendapatkan data atau informasi langsung melalui WhatsApp.\n\n◦ *Modul* : +module\n◦ *Basis Data* : +db\n◦ *Library* : Baileys v+version\n◦ *API* : https://api.neoxr.my.id\n◦ *Sumber* : https://github.com/dailylepedia-grup/neoxr-bot\n\nJika Anda menemukan kesalahan atau ingin meningkatkan ke paket premium, silakan hubungi pemilik bot.',
      style: 4,
      cover: 'https://cdn.discordapp.com/attachments/1321836421589242021/1387507732806107296/3F34853F-68CC-4704-AE8B-56EC99EBDF12.png',
      link: 'https://whatsapp.com/channel/0029VaZsNOG7z4kgDhIkmL0X'
   }
}

module.exports = { models }
