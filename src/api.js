export const getRespositories = () => {
  return fetch("https:/api.github.com/users/haiip/repos", {
    method: "GET"
  }).then(r => r.json());
};
