import {IExportPostService} from './models/iexport-post-service';
import {IPost} from './models/ipost';

export class JsonExportService implements IExportPostService {
  export(posts: IPost[]): string {
    return JSON.stringify(posts);
  }
}
