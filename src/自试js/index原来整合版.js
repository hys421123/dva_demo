import dva from 'dva';
import { Router, Route } from 'dva/router';
import { connect } from 'dva';
import styles from './index.less';


const delay = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

// 1. Initialize
const app = dva();

// 2. Model
app.model({
  namespace: 'count',
  state: 0,
  effects: {
    *add(action, { put, call }) {
      yield call(delay, 1000);
      yield put({ type: 'minus' });
    },
  },
  reducers: {
    add(count) { return count + 1 },
    minus(count) { return count - 1 },
  },
});

// 3. View
const App = connect(({ count }) => ({
  count
}))(function(props) {
  return (
    <div className={styles.normal}>
     <div className={styles.record}>Highest Record: {props.count.record}</div>
     <div className={styles.current}>
        <h2>{ props.count }</h2>
     </div> 
     <div className={styles.button}>
          <button key="add" onClick={() => { props.dispatch({type: 'count/add'})}}>+</button>
     </div>

   

    
    </div>
  );
});

// 4. Router
app.router(({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>
);

// 5. Start
app.start('#root');
