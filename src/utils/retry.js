export default function retry(request, times = 3) {
  return new Promise((resolve, reject) => {
    request()
      .then(resolve)
      .catch(error => {
        if (!times) {
          reject(error);
          return;
        }

        retry(request, times - 1)
          .then(resolve)
          .catch(reject);
      });
  });
}
