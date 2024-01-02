export const delay = async (timeout: number = 3000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('wake up')
    }, timeout)
  })
}