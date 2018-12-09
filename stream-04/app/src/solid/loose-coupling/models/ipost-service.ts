import {IExportPostService} from './iexport-post-service';
import {IPost} from './ipost';

export interface IPostService {
  getAll(): Promise<IPost[]>;
  save(post: IPost): Promise<void>;
  export(service: IExportPostService): Promise<string>;
}
