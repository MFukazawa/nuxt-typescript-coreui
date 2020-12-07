import { Middleware } from '@nuxt/types'

const authenticated: Middleware = ({ store, redirect }) => {
  if (!store.state.isLogin) {
    return redirect('/login')
  }
}
export default authenticated
