import dva from 'dva';
import './index.css';

// 1. Initialize
 const app = dva({
   initialState: {
     productsmodels: [
       {  key:1, name: 'dva', id: 1 },
       { key:2, name: 'antd', id: 2 },
     ],
   },
 });
// 2. Plugins
// app.use({});

// 3. Model
 app.model(require('./models/productsmodels'));


// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');



