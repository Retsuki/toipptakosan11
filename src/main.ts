import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth()
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid
    const displayName = user.displayName
    const email = user.email
    const emailVerified = user.emailVerified

    // TODO: ここにvuexに格納処理を書く 2021/10/21
  } else {
    // TODO: logout処理を書く？ 2021/10/21
  }
})

createApp(App).use(router).mount('#app')
