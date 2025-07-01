exports.run = {
   usage: ['owner'],
   category: 'miscs',
   async: async (m, {
      client,
      env,
      Func
   }) => {
      client.sendContact(m.chat, [{
         name: env.owner_name,
         number: env.owner,
         about: 'Owner & Creator'
      }], m, {
         org: 'Dailylepedia Network',
         website: 'https://dailylepedia.com',
         email: 'contact@dailylepedia.com'
      })
   },
   error: false,
   cache: true,
   location: __filename
}