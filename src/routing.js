import Albums from './containers/Albums'
import PlayLists from './containers/PlayLists'

const routes = [
  { path: '/', redirect: { name: 'albums'}  },
  {
    path: '/albums',
    name:'albums',
    component: Albums,
    meta:{ title : "Mes albums" }
  },
  {
    path: '/playlists',
    name:'playlists',
    component: PlayLists,
    meta:{ title : "Mes playlists" } }
]

export default routes
