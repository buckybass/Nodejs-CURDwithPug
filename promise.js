const weather =true

const dowload = new Promise(function (resolve, reject) {
  if (weather) {
    const user = {
      name: 'bass',
      location: 'wat chom poo',
      table: 10
    }
    resolve(user)
  } else {
    reject(new Error("not ok"))
  }
})

const grab = (user) => {
    const msg = `กำลังไปส่งที่ ${user.location} คุณ ${user.name}`
    return Promise.resolve(msg)
}

async function mygrab(){
  try{
    let user = await user
    let msg = await grab(user);
    console.log(msg)
  }catch(error){
    console.log(error)
  }
}

mygrab()
