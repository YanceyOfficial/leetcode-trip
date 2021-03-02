import { paramCase } from 'param-case'

export const parseFile = (content: string) => {
  const functionArr = content.match(
    /\/\/ @lc code=start([\s\S]*)?\/\/ @lc code=end/im,
  )

  if (Array.isArray(functionArr)) {
    const functionStr = functionArr[1]
    const functionNameArr = functionStr.match(/var([\s\S]*?)=/i)
    if (Array.isArray(functionNameArr)) {
      const functionNameStr = functionNameArr[1].trim()
      return { functionStr, functionNameStr: paramCase(functionNameStr) }
    }
    throw new Error('Can not get the function name string.')
  } else {
    throw new Error('Can not get the function body string.')
  }
}
