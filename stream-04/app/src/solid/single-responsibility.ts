class MessageBox {
  constructor(private err: Error) {}
  show(message: string) {}
}

type applyFilters = (users: Array<any>) => Array<any>;

fetchPosts(() => {}).then(([posts, result]: Array<any>) => {
  renderView(posts, result);
});

export function fetchPosts(applyFilters: applyFilters) {
  return Promise.all([getPosts(), getUsers()]).then(([posts, users]) => {
    const result = applyFilters(users);
    return [posts, result];
  });
}

function getPosts(): Promise<any> {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .catch((error) => {
      handlerError(error, 'something went wrong while fetching the posts');
    });
}

function getUsers(): Promise<any> {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .catch((error) => {
      handlerError(error, 'something went wrong while fetching users');
    });
}

function renderView(result: any, posts: any) {
  const elem = document.getElementById('app') as HTMLElement;

  let lastUserId;
  elem.innerHTML = result
    .map((post: any, index: number) => {
      lastUserId = post.userId;
      let defaultString = '';
      const prevPost = posts[index - 1];
      if (prevPost) {
        if (prevPost.userId === lastUserId) {
          return `
                <li>title: <span style="font-size: 25px">${
                  post.title
                }</span></li>
                <li><strong>name:</strong>${
                  result.find((user: any) => user.id === post.userId).name
                }</li>
                <li><strong>email:</strong>${
                  result.find((user: any) => user.id === post.userId).email
                }</li> <hr />`;
        } else {
          defaultString += `</details>`;
        }
      }
      defaultString += `<details>
                        <summary>${
                          result.find((user: any) => user.id === post.userId)
                            .name
                        }</summary>
                        <li>title: <span style="font-size: 25px">${
                          post.title
                        }</span></li>
                        <li><strong>name:</strong> ${
                          result.find((user: any) => user.id === post.userId)
                            .name
                        }</li>
                        <li><strong>email:</strong> ${
                          result.find((user: any) => user.id === post.userId)
                            .email
                        }</li>`;
      return defaultString;
    })
    .join('');
}

function handlerError(error: any, message: string) {
  console.error(message);
  const messageBox = new MessageBox(error);
  messageBox.show(message);
}
