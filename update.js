const { exec } = require('child_process')

exec('bash update.sh', (err, stdout, stderr) => {
   if (err) {
      console.error(`❌ Update error:\n${stderr}`)
      return
   }
   console.log(`✅ Update log:\n${stdout}`)
})
