import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default function useSignup() {
  const router = useRouter()
  const email = ref()
  const password = ref()

  const auth = getAuth()
  const handleSignup = () => {
    console.log(email.value)
    console.log(password.value)
    // createUserWithEmailAndPassword(auth, email.value, password.value)
    //   .then((userCredential) => {
    //     const user = userCredential.user
    //     const { uid, email } = user

    //     // TODO: vuexにuid, email格納 2021/10/21 R

    //     router.push('/setup/')
    //   })
    //   .catch((error) => {
    //     console.error(error.code)
    //     console.error(error.message)
    //   })
  }

  return {
    email,
    password,
    handleSignup,
  }
}
