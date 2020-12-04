export default function({ store, redirect }) {
  if (store.state.isLogin === false) {
    console.log('[Middleware] authenticated');
    return redirect('/login')
  }
}
