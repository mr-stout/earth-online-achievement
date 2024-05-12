import {ApiResp, url_base, url_get_all_list} from "./constants";

export async function wrappedFetch(url: string, body?: RequestInit, do_echo?: boolean) {
    return fetch(url, body).then((resp) => {
        console.log(resp)
        // http请求失败
        if (!resp.ok) {
            if (do_echo) {
                confirm("请求失败")
            }
            return "failed"
        }
        return resp.json().then((box: ApiResp) => {
            // 应用状态错误
            if(box.status != 200) {
                if (do_echo) {
                    confirm(box.msg)
                }
                return "failed"
            }

            return box.data
        })
    }, () => {
        return new Promise((resolve, reject) => {
            reject()
        })
    })
}