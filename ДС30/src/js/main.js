import { ANSWER_CELLS, ANSWER_FUNCTIONS } from './selectors'

/**
 * Функция возвращает первый символ
 * @param {string} text - Данные пользователя
 */
export const firstChar = (text) => text?.at(0)

/**
 * Функция возвращает количество слов
 * @param {string} text - Данные пользователя
 */
export const wordsCount = (text) => text?.split(' ')?.length

export const charsCount = () => {}

export const maxLengthWord = () => {}

export const reverseWord = () => {}

export const sentencesCount = () => {}

export const uniqueWordsCount = () => {}

export const wordsAlphabetical = () => {}

/**
 * Основная функция для анализа текста
 * @param {string} text - Данные пользователя
 */
export const analyzeText = (text) => {
  ANSWER_CELLS?.forEach((cell) => {
    const key = cell.dataset.answer
    const func = ANSWER_FUNCTIONS[key]

    cell.textContent = func(text)
  })
}
