import { ChromeExtentionMessageAction } from './const'

function updateDisplayStatus(info: any): boolean {
  const statusMessageElement: HTMLElement | null = document.getElementById('js-statusMessage')
  const statusIconElement: HTMLElement | null = document.getElementById('js-statusIcon')
  if (!statusMessageElement || !statusIconElement) {
    return false
  }

  let className: string
  switch (info.status) {
    case 'inProgress':
      className = 'fas fa-spinner fa-pulse statusIcon statusIcon__inProgress'
      break
    case 'success':
      className = 'fas fa-check statusIcon statusIcon__success'
      break
    case 'error':
      className = 'fas fa-times statusIcon statusIcon__error'
      break
    default:
      className = ''
  }

  statusMessageElement.textContent = info.message
  statusIconElement.className = className

  return true
}

function getPresentationUrl(): Promise<any> {
  return new Promise<any>(
    (resolve: any): void => {
      chrome.storage.sync.get(
        (result: { [key: string]: string }): void => {
          resolve(result.googleSlideUrl || '')
        }
      )
    }
  )
}

function setPresentationUrl(url: string): Promise<void> {
  return new Promise<any>(
    (resolve: any): void => {
      chrome.storage.sync.set(
        { googleSlideUrl: url },
        (): void => {
          resolve()
        }
      )
    }
  )
}

async function handleChangeInputValue(event: Event): Promise<void> {
  const inputValue: string = (event.target as HTMLInputElement).value
  await setPresentationUrl(inputValue)
}

function handleClickSubmit(inputValue: string): void {
  chrome.runtime.sendMessage({
    action: ChromeExtentionMessageAction.RUN_BACKGROUND_SCRIPT,
    presentationUrl: inputValue
  })
}

;(async (): Promise<void> => {
  chrome.runtime.onMessage.addListener(
    (request, _sender, sendResponse): void => {
      if (request.action === ChromeExtentionMessageAction.UPDATE_DISPLAY_STATUS) {
        sendResponse({ ok: updateDisplayStatus(request.displayStatus) })
      }
    }
  )

  const button = document.getElementById('js-capture') as HTMLElement
  const input = document.getElementById('js-presentationUrl') as HTMLInputElement

  input.value = await getPresentationUrl()

  input.onchange = async (event: Event): Promise<void> => {
    await handleChangeInputValue(event)
  }

  button.onclick = (_e: Event): void => {
    handleClickSubmit(input.value)
  }
})()
