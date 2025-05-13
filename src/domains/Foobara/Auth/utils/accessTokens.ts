import { getQuery } from '../../../base/QueryCache'
import { GetCurrentUser } from '../../../BlogWww/GetCurrentUser'

const accessTokens = new Map<string, string>()

const logout = (urlBase: string): void => {
  accessTokens.delete(urlBase)
  const query = getQuery(GetCurrentUser, undefined)
  query.setDirty()
}
let handleLogout: (baseUrl: string) => void = logout

const tokenForUrl = (baseUrl: string): string | undefined => accessTokens.get(baseUrl)
const handleLogin: (baseUrl: string, accessToken: string) => void = (baseUrl, accessToken) => {
  accessTokens.set(baseUrl, accessToken)
  const query = getQuery(GetCurrentUser, undefined)
  query.setDirty()
}

if (typeof BroadcastChannel !== 'undefined') {
  const logoutChannel = new BroadcastChannel('foobara-auth-events')

  logoutChannel.addEventListener('message', (event: MessageEvent<string>) => {
    accessTokens.delete(event.data)
  })

  handleLogout = (baseUrl: string) => {
    logout(baseUrl)
    logoutChannel.postMessage(baseUrl)
  }
}

export {
  handleLogin,
  handleLogout,
  tokenForUrl
}
