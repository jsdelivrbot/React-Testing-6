import {SAVE_COMMENT} from './types'

export function saveComment(message) {
  return{type: SAVE_COMMENT, payload: message}
}
