import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

import user from './module/login'; //로그인 성공한 유저 정보 (이메일, 이름)
import forum from './module/forum'; //서비스 포럼
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};
const rootReducer = combineReducers({
  user,
  forum,
});

export default persistReducer(persistConfig, rootReducer);
