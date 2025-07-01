const colors = require('colors')
const chalk = require('chalk')
const moment = require('moment-timezone')

process.on('uncaughtException', err => {
   const date = moment(Date.now()).format('DD/MM/YY HH:mm:ss')
   if (err?.code === 'ENOMEM') {
      console.log(chalk.black(chalk.bgRed(` Exception `)), chalk.black(chalk.bgBlue(` ${date} `)), ':', colors.gray('Out of memory error detected. Cleaning up resources'))
      setTimeout(() => process.exit(1), 100) // only for ENOMEM
   } else {
      console.log(chalk.black(chalk.bgRed(` Exception `)), chalk.black(chalk.bgBlue(` ${date} `)), ':', colors.gray(err))
      // Jangan exit, log saja
   }
})


const unhandledRejections = new Map()

process.on('unhandledRejection', (reason, promise) => {
   unhandledRejections.set(promise, reason)
   const date = moment(Date.now()).format('DD/MM/YY HH:mm:ss')

   if (
      reason?.message?.includes('Timed') ||
      reason?.message?.includes('ENOENT') ||
      reason?.message?.includes('EAI_AGAIN')
   ) {
      console.warn(chalk.black(chalk.bgYellow(` Warn `)), chalk.black(chalk.bgBlue(` ${date} `)), ':', colors.gray(reason.message))
      return
   }

   console.log(chalk.black(chalk.bgRed(` Rejection `)), chalk.black(chalk.bgBlue(` ${date} `)), ':', colors.gray(reason))
   // Exit hanya jika error tidak bisa di-handle dengan aman
   setTimeout(() => process.exit(1), 100)
})


process.on('warning', (warning) => {
   if (warning?.name === 'MaxListenersExceededWarning') {
      console.warn(colors.yellow('Potential memory leak detected.'))
   }
})

// process.stderr.write = () => {}  // Disable all stderr output (Extra Clean 💀) not recommended