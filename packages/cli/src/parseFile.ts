import { paramCase } from 'param-case'

export const parseFile = (content: string) => {
  const functionBodyMatcher = content.match(
    /\/\/ @lc code=start([\s\S]*)?\/\/ @lc code=end/im,
  )

  if (Array.isArray(functionBodyMatcher)) {
    const functionBody = functionBodyMatcher[1]
    const functionNameMatcher = functionBody.match(/var([\s\S]*?)=/i)

    if (Array.isArray(functionNameMatcher)) {
      const functionName = functionNameMatcher[1].trim()
      return { functionBody, functionName: paramCase(functionName) }
    }
    throw new Error('Can not get the function name string.')
  } else {
    throw new Error('Can not get the function body string.')
  }
}
