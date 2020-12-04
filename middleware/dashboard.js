export default function ({ params, route, redirect }) {
  if (route.path === '/') {
    return redirect('/dashboard')
  }
}
