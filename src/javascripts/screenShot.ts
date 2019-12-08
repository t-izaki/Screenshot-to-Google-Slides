import * as Util from './util'
import GoogleDriveFile from './googleDriveFile'
import GoogleSlidePresentation from './googleSlidePresentation'
import { ErrorMessage } from './const'

export default class ScreenShot {
  private file: GoogleDriveFile | null = null

  private base64: string | null = null

  public capture(): Promise<void> {
    return new Promise(
      (resolve: any): void => {
        chrome.tabs.captureVisibleTab(
          chrome.windows.WINDOW_ID_CURRENT,
          { format: 'png' },
          (dataUrl: string): void => {
            this.base64 = dataUrl
            resolve()
          }
        )
      }
    )
  }

  public async addToSlide(presentationId: string): Promise<void> {
    if (this.base64 == null) {
      throw new Error(ErrorMessage.Base64NotFound)
    }

    const slide = new GoogleSlidePresentation(presentationId)
    await slide.insertBlankSlide()

    try {
      this.file = new GoogleDriveFile(Util.base64ToBlob(this.base64))
      await this.file.upload()
      await slide.insertImage(this.file.url)
    } finally {
      if (this.file) {
        await this.file.delete()
      }
    }
  }
}
