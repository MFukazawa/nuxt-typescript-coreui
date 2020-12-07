export default function ({ route, redirect }) {
  console.log('this is dashboard middleware');

  // TODO if logged in & route.path is '/'
  if (route.path === '/') {
    return redirect('/dashboard')
  }
}
