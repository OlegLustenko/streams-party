import * as fs from 'fs';
import {Post} from '../dependency-inversion';
import {IExportPostService} from './models/iexport-post-service';
import {IPost} from './models/ipost';
import {IPostService} from './models/ipost-service';

export class PostService implements IPostService {
  private _fileName = 'posts.json';
  getAll(): Promise<Post[]> {
    return fs.promises.readFile(this._fileName, 'utf8').then((posts) => {
      return JSON.parse(posts);
    });
  }

  save(post: Post): Promise<void> {
    return fs.promises.writeFile(this._fileName, post);
  }

  export(service: IExportPostService): Promise<string> {
    return this.getAll().then((posts) => service.export(posts));
  }
}
