const startTime = performance.now()
console.info(`====================== Api Start: src/index.ts || Time ${startTime} MS`)

import { app } from './app'
import { logger } from './logger'
logger.startTimer()

const port = app.get('port')
const host = app.get('host')

process.on('unhandledRejection', (reason) => logger.error('Unhandled Rejection %O', reason))

app.listen(port).then(() => {
  logger.info(`Api listening on http://${host}:${port}`)
  const endTime = (performance.now() - startTime) / 1000
  console.info(
    `>>>>>>>>>>>>>>>>>>>>>> Api End Listen: src/index.ts || Time: ${endTime.toFixed(2)} SECONDS ]]]]`
  )
})
