import { SELECTORS } from './selectors'

/**
 * Функция показывает данные поль-ля в <p></p>
 * @param {string} text - Данные пользователя
 */
export const showUserText = (text) => {
  SELECTORS.userText.innerHTML = text
}

/**
 * Функция очистки данных
 */
export const clearData = () => {
  SELECTORS?.form?.reset()
  SELECTORS.userText.innerHTML = ''
  // WIP (work in progress)

  //очищаем таблицу
  SELECTORS.table.innerHTML = ``

SELECTORS.ANSWER_CELLS
}

 