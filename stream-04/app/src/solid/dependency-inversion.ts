import * as fs from 'fs';

export interface Post {
  id: number;
  title: string;
  body: string;
  postedBy: string;
}

export interface IPostService {
  getAll(): Promise<Post[]>;

  save(post: Post): Promise<void>;
}

export class PostService implements IPostService {
  private _fileName: string = 'posts.json';

  getAll(): Promise<Post[]> {
    return fs.promises.readFile(this._fileName, 'utf8').then((posts) => {
      return JSON.parse(posts);
    });
  }

  save(post: Post): Promise<void> {
    return fs.promises.writeFile(this._fileName, post);
  }
}

export class MockPostService implements IPostService {
  mockPosts: Post[] = [
    {
      id: 1,
      title: 'mock title',
      body: 'mock body',
      postedBy: 'qwe',
    },
    {
      id: 100,
      title: 'mock title',
      body: 'mock body',
      postedBy: 'qwe',
    },
    {
      id: 10000,
      title: 'mock title',
      body: 'mock body',
      postedBy: 'qwe',
    },
    {
      id: 1000,
      title: 'mock title',
      body: 'mock body',
      postedBy: 'qwe',
    },
  ];

  getAll(): Promise<Post[]> {
    return Promise.resolve(this.mockPosts);
  }

  save(post: Post): Promise<void> {
    this.mockPosts.push(post);
    return Promise.resolve();
  }
}

export class NewsFeed {
  constructor(private _service: IPostService) {
  }

  show() {
    return this._service.getAll().then((posts) => {
      posts.forEach((post) => {
        console.log(post);
      });
    });
  }
}

// const newsFeed = new NewsFeed(new PostService());
const newsFeed = new NewsFeed(new MockPostService());
newsFeed.show();

/*
* private*
* this._service = _service
*
* */
