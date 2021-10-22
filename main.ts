import cookies from './jdCookie'
import signBean from './signBean'
import { randDelay } from './util'

console.log(JSON.stringify(cookies))

const main = async () => {
  for (const cookie of cookies) {
    const res = await signBean(cookie)
    if (!res.errcode) {
      console.log(`get ${res.beans} beans`)
    }
    await randDelay()
  }
}

main()
