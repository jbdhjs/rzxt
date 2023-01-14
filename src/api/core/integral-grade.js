// @ 符号在vue.config.js 中配置， 表示 'src' 路径的别名
import request from '@/utils/request'

export default {
  list() {//获取积分等级列表的方法
    return request({//request 是封装的axios 方法
      url: '/admin/core/integralGrade/list',
      method: 'get'
    })
  },
  delete(){
    return request({
      url: '/admin/core/integralGrade/delete',
      method: 'delete'
    })
  },
  save(integralGrade) {
    return request({
        url: '/admin/core/integralGrade/save',
        method: 'post',
        data: integralGrade
    })
  },
  getById(id) {
    return request({
        url: `/admin/core/integralGrade/get/${id}`,
        method: 'get'
    })
  },
  updateById(integralGrade) {
    return request({
      url: '/admin/core/integralGrade/update',
      method: 'put',
      data: integralGrade
    })
  }
}