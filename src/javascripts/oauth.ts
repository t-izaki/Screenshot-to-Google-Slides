import { ErrorMessage } from './const'

export default class Oauth {
  public static token: string

  public static async auth(): Promise<void> {
    return new Promise(
      (resolve: any, reject: any): void => {
        chrome.identity.getAuthToken(
          {
            interactive: true
          },
          (token: string | undefined): void => {
            if (token) {
              Oauth.token = token
              resolve()
            } else {
              reject(new Error(ErrorMessage.GoogleAuthFail))
            }
          }
        )
      }
    )
  }
}
