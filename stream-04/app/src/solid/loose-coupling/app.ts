import {JsonExportService} from './json-export-service';
import {PostService} from './post-service';

const app = new PostService();
app.export(new JsonExportService()).then((posts) => {
  console.log('result: ', posts);
});
