import {ApiResp} from "./constants";

export async function wrappedFetch(url: string, options?: RequestInit, do_echo?: boolean) {
    return fetch(url, options).then((resp) => {
        console.log(resp)
        // http请求失败
        if (!resp.ok) {
            if (do_echo) {
                confirm("请求失败")
            }
            return new Promise((_, reject) => reject())
        }
        return resp.json().then((box: ApiResp) => {
            // 应用状态错误
            if(box.status != 200) {
                if (do_echo) {
                    confirm(box.msg)
                }
                return new Promise((_, reject) => reject())
            }

            return box.data
        })
    }, () => {
        return new Promise((_, reject) => {
            reject()
        })
    })
}

// 简单的分割，不考虑转义
export function parseURLParams(){
    let arr = window.location.href.split('?')
    const result = {} as any
    if(arr.length < 2) {
        return result
    }
    arr = arr[1].split('&')

    for(let i = 0 ; i < arr.length ; i++) {
        if(!arr[i]) continue
        const line = arr[i].split('=')
        if(line.length < 2) continue
        const key = line[0]
        const value = line[1]
        result[key] = value
    }
    return result
}

export function isRateNumber(rate: string){
    if (!rate || !rate.length || rate.length === 0) {
        return false
    }
    return rate.endsWith("%");
}
export function cvtRate(rate: string) {
    if (!isRateNumber(rate)) {
        return 0
    }
    return Number(rate.slice(0, rate.length - 1));
}