import * as dotenv from 'dotenv'

dotenv.config()

console.log(process.env.COOKIES)
const cookies = process.env.COOKIES.split('\n')

export default cookies
