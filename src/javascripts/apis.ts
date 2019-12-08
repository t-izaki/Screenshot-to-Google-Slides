import Oauth from './oauth'

async function postRequest(endpoint: string, headers: Headers, body: string | Blob): Promise<Response> {
  headers.append('Authorization', `Bearer ${Oauth.token}`)

  return fetch(endpoint, {
    method: 'POST',
    headers,
    body
  })
}

async function deleteRequest(endpoint: string): Promise<Response> {
  const headers: Headers = new Headers({})
  headers.append('Authorization', `Bearer ${Oauth.token}`)

  return fetch(endpoint, {
    method: 'DELETE',
    headers
  })
}

export class GoogleDriveApi {
  public static async uploadPngImage(file: Blob): Promise<Response> {
    const endpoint = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart'
    const headers: Headers = new Headers({
      'Content-Type': 'image/png'
    })

    return postRequest(endpoint, headers, file)
  }

  public static async deleteFile(fileId: string): Promise<Response> {
    const endpoint = `https://www.googleapis.com/drive/v3/files/${fileId}`

    return deleteRequest(endpoint)
  }
}

export class GoogleSlideApi {
  public static async insertBlankSlide(presentationId: string): Promise<Response> {
    const endpoint = `https://slides.googleapis.com/v1/presentations/${presentationId}:batchUpdate`
    const headers: Headers = new Headers({
      'Content-Type': 'application/json'
    })
    const body: object = {
      requests: [
        {
          createSlide: {
            slideLayoutReference: {
              predefinedLayout: 'BLANK'
            }
          }
        }
      ]
    }

    return postRequest(endpoint, headers, JSON.stringify(body))
  }

  public static insertImage(presentationId: string, slideId: string, imageUrl: string): Promise<Response> {
    const endpoint = `https://slides.googleapis.com/v1/presentations/${presentationId}:batchUpdate`
    const headers: Headers = new Headers({
      'Content-Type': 'application/json'
    })
    const body: object = {
      requests: [
        {
          createImage: {
            elementProperties: {
              pageObjectId: slideId
            },
            url: imageUrl
          }
        }
      ]
    }

    return postRequest(endpoint, headers, JSON.stringify(body))
  }
}
