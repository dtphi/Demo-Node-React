// For more information about this file see https://dove.feathersjs.com/guides/cli/log-error.html
import type { HookContext, NextFunction } from '../declarations'
import { logger } from '../logger'

export const logError = async (context: HookContext, next: NextFunction) => {
  const startTime = performance.now()
  logger.http(`====================== Api Start App: src/hooks/log-error.ts || Time: ${startTime} MS`)
  logger.info(`'${context.path}' service method '${context.method}'`)

  try {
    await next()

    const endTime = (performance.now() - startTime) / 1000
    logger.info(
      `>>>>>>>>>>>>>>>>>>>>>> Api End App: src/hooks/log-error.ts || Time: ${endTime.toFixed(2)} SECONDS ]]]]`
    )
  } catch (error: any) {
    logger.error(error.stack)

    // Log validation errors
    if (error.data) {
      logger.error('Data: %O', error.data)
    }

    const endTime = (performance.now() - startTime) / 1000
    logger.info(
      `>>>>>>>>>>>>>>>>>>>>>> Api Error End App: src/hooks/log-error.ts || Time: ${endTime.toFixed(
        2
      )} SECONDS ]]]]`
    )

    throw error
  }
}
