
import http  from '@/utils/http.js'

export const getList = (params) =>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
          return resolve({
            data: {
              errcode: 0,
              data: {
                uid: 1,
                username: 'tom'
              }
            }
          })
        }, 300)
      })
    

   // http.get('/a/list',{params})
}

export const updateList = (params) => http.post('/a/update',params)