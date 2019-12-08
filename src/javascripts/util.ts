/* eslint-disable import/prefer-default-export */

import { DisplayStatus } from './types'
import { ChromeExtentionMessageAction } from './const'

export function base64ToBlob(base64Str: string): Blob {
  const bin: string = atob(base64Str.replace(/^.*,/, ''))
  const buffer: Uint8Array = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i += 1) {
    buffer[i] = bin.charCodeAt(i)
  }
  return new Blob([buffer.buffer], { type: 'image/png' })
}

export function sendDisplayStatusMessage(displayStatus: DisplayStatus): void {
  chrome.runtime.sendMessage({
    action: ChromeExtentionMessageAction.UPDATE_DISPLAY_STATUS,
    displayStatus
  })
}
