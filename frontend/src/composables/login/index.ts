import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default function useLogin() {
  const router = useRouter()
  const email = ref()
  const password = ref()

  const auth = getAuth()
  const handleLogin = async () => {
    console.log(email.value)
    console.log(password.value)
    return await router.push('/profile/')
  }

  return {
    email,
    password,
    handleLogin,
  }
}
