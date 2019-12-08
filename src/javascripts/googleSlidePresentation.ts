import { GoogleSlideApi } from './apis'
import { ErrorMessage } from './const'

export default class GoogleSlideFile {
  private presentationId: string

  private targetSlideId: string | null = null

  public constructor(presentationUrl: string) {
    // eslint-disable-next-line prefer-destructuring
    this.presentationId = presentationUrl.split('/')[5]
  }

  public async insertBlankSlide(): Promise<void> {
    const response: Response = await GoogleSlideApi.insertBlankSlide(this.presentationId)

    if (response.ok) {
      const responseBody: {
        replies: { createSlide: { objectId: string } }[]
      } = await response.json()
      this.targetSlideId = responseBody.replies[0].createSlide.objectId
    } else {
      throw new Error(ErrorMessage.InsertBlankSlideFail)
    }
  }

  public async insertImage(url: string | null): Promise<void> {
    if (this.targetSlideId == null || url == null) {
      throw new Error(ErrorMessage.ScreenshotUrlNotFound)
    }

    const response: Response = await GoogleSlideApi.insertImage(this.presentationId, this.targetSlideId, url)

    if (!response.ok) {
      throw new Error(ErrorMessage.InsertImageFail)
    }
  }
}
