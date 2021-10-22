export const delay = async (ms: number) => {
  return new Promise<void>(resolve => setTimeout(resolve, ms))
}

export const randDelay = async () => {
  const interval = Math.ceil(Math.random() * 1000)
  await delay(interval)
}
