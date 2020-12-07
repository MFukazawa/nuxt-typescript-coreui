import { Middleware, Context } from '@nuxt/types'

const dashboard: Middleware = ({ store, route, redirect }: Context) => {
  if (store.state.isLogin && route.path === '/') {
    return redirect('/dashboard')
  }
}

export default dashboard
