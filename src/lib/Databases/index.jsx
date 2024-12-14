function post(values){
      console.log('Values', values)
      return new Promise((resolve, reject) => {
        resolve('Authenticated Successfully!!!')
      })
}
export {post}