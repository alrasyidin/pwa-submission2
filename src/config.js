// isi auth token api football
const authToken = ''
export const baseurl = 'https://api.football-data.org/v2/'
export const standing = `${baseurl}competitions/2021/standings`

export const headers = {
  headers: {
    'X-Auth-Token': authToken
  }
}