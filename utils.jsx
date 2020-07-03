/** This is just a sample which it's only simulates API login call,
 * Its not going to do anything
 */
export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "majid" && password === "123") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
