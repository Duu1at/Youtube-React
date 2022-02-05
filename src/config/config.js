export const KEY = 'AIzaSyCDpP6oxGn6KaVm3_fDjcPz8l11ttXj810'
const RESULTS = 10
export const API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + RESULTS + '&key=' + KEY + '&q='
export const GET_INFO_BY_ID = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=' + KEY + '&id='
