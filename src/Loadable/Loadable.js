import Loadable from 'react-loadable'
import Loader from '../components/loader/Loader'

export const Home = Loadable({
  loader: () => import('../components/home/Home'),
  loading: Loader,
})

export const Results = Loadable({
  loader: () => import('../components/results/Results'),
  loading: Loader,
})

export const Profile = Loadable({
  loader: () => import('../components/profile/Profile'),
  loading: Loader,
})

export const Steps = Loadable({
  loader: () => import('../components/createUser/Steps'),
  loading: Loader,
})

export const nonProLogin = Loadable({
  loader: () => import('../components/login/nonProLogin'),
  loading: Loader,
})

export const nonProSignup = Loadable({
  loader: () => import('../components/login/nonProSignup'),
  loading: Loader,
})

export const proLogin = Loadable({
  loader: () => import('../components/login/proLogin'),
  loading: Loader,
})

export const Privacy = Loadable({
  loader: () => import('../components/footer/privacy'),
  loading: Loader,
})

export const editProfile = Loadable({
  loader: () => import('../components/profile/editProfile'),
  loading: Loader,
})