import dva from 'dva';
import count from './models/count';
import router from './router';

const app = dva();
app.model(count);
app.router(router);
app.start('#root');
