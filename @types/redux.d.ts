import 'redux';

declare module 'redux' {
  import { Task } from 'redux-saga';

  interface Store {
    sagaTask: Task;
  }
}