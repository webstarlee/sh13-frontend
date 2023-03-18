export const API_URL = `http://${window.location.hostname}:8081/api`;
export const HOST_URL = `http://${window.location.hostname}:8081`;

export const convertApiUrl = (url) => {
  const lng = window.localStorage.getItem("i18nextLng").slice(0, 2);
  const convertedUrl = API_URL+"/"+url+"?lng="+lng;
  return convertedUrl;
}
