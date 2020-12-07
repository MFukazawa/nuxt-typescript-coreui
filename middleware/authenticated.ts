import { Middleware, Context } from '@nuxt/types'

const authenticated: Middleware = ({ store, redirect }: Context) => {
  if (!store.state.isLogin) {
    return redirect('/login')
  }
}
export default authenticated
