import {IPost} from './ipost';

export interface IExportPostService {
  export(posts: IPost[]): string;
}
