import { ApiSignRes } from './signBean'

const Success: ApiSignRes = {
  "code": "0",
  "data": {
    "signedRan": "B",
    "status": "2",
    "beanUserType": 1,
    "awardType": "1",
    "dailyAward": {
      "type": "1",
      "title": "今天已签到，",
      "subTitle": "获得奖励",
      "beanAward": {
        "beanCount": "2",
        "beanImgUrl": "https://m.360buyimg.com/njmobilecms/jfs/t23452/19/1797778090/8622/14e40996/5b69974eN9880f531.png"
      }
    },
    "conductionBtn": {
      "btnText": "种豆瓜分京豆",
      "linkUrl": "https://bean.m.jd.com/plantBean/index.action"
    },
    "signRemind": {
      "title": "领京豆",
      "content": "签到领京豆啦，断签会错过连签礼包哦",
      "popImgUrl": "https://m.360buyimg.com/njmobilecms/jfs/t25144/349/281504248/8702/2397c397/5b6ab64fN016b2a9d.png",
      "beanHomeLink": "{\"des\":\"m\",\"params\":{\"url\":\"https://bean.m.jd.com\"}}"
    },
    "signCalendar": {
      "currentDate": "20211022",
      "signRecordList": [
        {
          "day": "7",
          "awardState": "1"
        },
        {
          "day": "8",
          "awardState": "1"
        },
        {
          "day": "9",
          "awardState": "1"
        },
        {
          "day": "10",
          "awardState": "1"
        },
        {
          "day": "22",
          "awardState": "1",
          "awardType": "1"
        },
        {
          "day": "24",
          "awardImgUrl": "https://m.360buyimg.com/njmobilecms/jfs/t25771/309/792025266/1853/7e27160f/5b7aac27N44dbd72a.png",
          "awardState": "2",
          "awardType": "2",
          "awardDesc": "5京豆",
          "popText": "再连签2天即可获得哦"
        },
        {
          "day": "28",
          "awardImgUrl": "https://m.360buyimg.com/njmobilecms/jfs/t25771/309/792025266/1853/7e27160f/5b7aac27N44dbd72a.png",
          "awardState": "2",
          "awardType": "2",
          "awardDesc": "15京豆"
        }
      ]
    },
    "recommend": {},
    "msgGuideSwitch": "0",
    "sourceTips": "京豆君温馨提示：每天通过京东app首页-领京豆icon进行签到，连续签到惊喜多！",
    "tomorrowSendBeans": 0
  }
}


export const LoginFailed: ApiSignRes = {
  "code": "3",
  "errorMessage": "用户未登录"
}
