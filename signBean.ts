import axios from 'axios'

type SuccessApiSignRes = {
  code: '0'
  data: any
}

type LoginFailedSignRes = {
  code: '3'
  errorMessage: string
}

export type ApiSignRes = SuccessApiSignRes | LoginFailedSignRes

export type SignRes = {
  errcode?: number
  errmsg?: string
  beans?: number
}

const signBean = async (cookie: string): Promise<SignRes> => {
  const url = 'https://api.m.jd.com/client.action'
  const body = 'functionId=signBeanIndex&appid=ld'
  const res = await axios.post<ApiSignRes>(url, body, { headers: { Cookie: cookie } })
  console.log(`[${res.status}]${JSON.stringify(res.data)}`)
  const signRes = res.data
  if (signRes.code === '3') {
    return {
      errcode: 3,
      errmsg: 'cookie失效'
    }
  }
  const beans = signRes.data.dailyAward.beanAward.beanCount
  return { beans }
}

export default signBean
