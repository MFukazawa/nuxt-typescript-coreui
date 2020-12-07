import { Middleware } from '@nuxt/types'

const dashboard: Middleware = ({ store, route, redirect }) => {
  if (store.state.isLogin && route.path === '/') {
    return redirect('/dashboard')
  }
}

export default dashboard
