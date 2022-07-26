
/**
*
* Generated by Rsquare Codegen (v3.0.1) (2022-07-22 14:26:31 192)
*
*  문의 내역 
*
*/


import axios from 'axios'
import { Injectable } from "@nestjs/common"
import { Remote } from '../rfind.config'

import WwwAsIsPagingWwwGetAsIsQusOut from '../models/WwwAsIsPagingWwwGetAsIsQusOut'
import WwwGetQusProcHstOut from '../models/WwwGetQusProcHstOut'

/**
* @description  문의 내역 
*/
@Injectable()
export default class WwwMbrQusService {

  /**
  * @summary  로그인된 유저가 등록한 문의 조회 
  */
  async getWwwQusPaging (orderBy?: string, pageSize?: number, pageNum?: number, mbrId?: string): Promise<WwwAsIsPagingWwwGetAsIsQusOut> {
    const data = await axios.get(Remote + '/web/www/qus', {params:{orderBy, pageSize, pageNum, mbrId}}) as WwwAsIsPagingWwwGetAsIsQusOut
    return new Promise<WwwAsIsPagingWwwGetAsIsQusOut>((resolve)=>{resolve(data)})
  }

  /**
  * @summary  고객문의 답변 가져오기 
  */
  async getWwwQusProcStat (qusId: string): Promise<WwwGetQusProcHstOut[]> {
    const data = await axios.get(Remote + '/web/www/qus/qus-proc-stat', {params:{qusId}}) as WwwGetQusProcHstOut[]
    return new Promise<WwwGetQusProcHstOut[]>((resolve)=>{resolve(data)})
  }

}
