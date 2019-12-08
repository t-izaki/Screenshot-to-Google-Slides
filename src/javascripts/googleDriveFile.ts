import { GoogleDriveApi } from './apis'
import Oauth from './oauth'
import { ErrorMessage } from './const'

export default class GoogleDriveFile {
  public id: string | null = null

  public url: string | null = null

  private file: Blob

  public constructor(file: Blob) {
    this.file = file
  }

  public async upload(): Promise<void> {
    const response: Response = await GoogleDriveApi.uploadPngImage(this.file)

    if (response.ok) {
      const { id }: { id: string } = await response.json()
      this.id = id
      this.url = `https://www.googleapis.com/drive/v3/files/${id}/?alt=media&access_token=${Oauth.token}`
    } else {
      throw new Error(ErrorMessage.UploadFail)
    }
  }

  public async delete(): Promise<void> {
    if (this.id == null) {
      throw new Error(ErrorMessage.DeleteFileIdNotFound)
    }

    const response: Response = await GoogleDriveApi.deleteFile(this.id)

    if (!response.ok) {
      throw new Error(ErrorMessage.DeleteFileFail)
    }
  }
}
