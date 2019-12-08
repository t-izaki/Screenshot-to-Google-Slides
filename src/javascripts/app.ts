import Oauth from './oauth'
import ScreenShot from './screenShot'
import * as Util from './util'
import { ChromeExtentionMessageAction } from './const'

async function captureScreenShotAndInsertToSlides(presentationUrl: string): Promise<void> {
  Util.sendDisplayStatusMessage({ message: 'Check Slide', status: 'inProgress' })
  await Oauth.auth()

  Util.sendDisplayStatusMessage({ message: 'Take Screenshot', status: 'inProgress' })
  const screenShot = new ScreenShot()
  await screenShot.capture()

  Util.sendDisplayStatusMessage({ message: 'Add to Slide', status: 'inProgress' })
  await screenShot.addToSlide(presentationUrl)

  Util.sendDisplayStatusMessage({ message: 'SUCCESS', status: 'success' })
}

chrome.runtime.onMessage.addListener(
  (request, _sender, sendResponse): boolean => {
    if (request.action === ChromeExtentionMessageAction.RUN_BACKGROUND_SCRIPT) {
      captureScreenShotAndInsertToSlides(request.presentationUrl)
        .then(
          (): void => {
            sendResponse({ ok: true })
          }
        )
        .catch(
          (error: Error): void => {
            Util.sendDisplayStatusMessage({ message: error.message, status: 'error' })
            sendResponse({ ok: false })
          }
        )
    }
    return true
  }
)
