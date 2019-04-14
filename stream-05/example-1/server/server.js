const Koa = require('koa');
const router = require('koa-route');
const axios = require('axios');

const app = new Koa();

const fname = [
  'Oleh',
  '~Katsia',
  'John',
  'Viktor',
  '#Sue',
  'JavaScript',
  '<Thomas',
  '>Sergei',
  'Snehal',
  'Oleg',
  'Divia',
];

const lname = [
  'Peterson',
  'Abramov',
  'Cuban',
  'Twist',
  'Sidorov',
  'Vasiliev',
  'React',
];

let users = [];
const userGenerator = () => {
  if (users.length > 16) {
    users = [];
    return;
  }

  users.push({
    id: uuidv4(),
    fname: fname[Math.floor(Math.random() * fname.length)],
    lname: lname[Math.floor(Math.random() * lname.length)],
  });
};

setInterval(userGenerator, 3000);
let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.use(
  router.get('/users', async (ctx) => {
    await sleep(2000);
    ctx.body = users;
  }),
);

app.use(
  router.get('/users-sleep', async (ctx) => {
    await sleep(2000);
    ctx.body = users;
  }),
);

app.use(
  router.get('/users-random', async (ctx) => {
    await sleep(1000);
    const result = await axios(
      'https://api.randomuser.me/?nat=us,gb&results=50',
    );

    const parsedResult = result.data.results.map((user, i) => ({
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      thumbnail: user.picture.thumbnail,
      isActive: i === 0,
    }));

    ctx.body = parsedResult;
  }),
);

app.use((ctx, next) => {
  ctx.statusCode = 404;
  ctx.body = 'not found';
});

app.listen(5000);

function uuidv4(a) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuidv4);
}
