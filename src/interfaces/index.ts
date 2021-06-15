export interface IBLog {
  title?: string;
  content?: string;
  id?: string;
}

export interface IAction {
  type: Actions;
  payload?: IBLog;
}

export type Actions = 'ADD_BLOG_POST' | 'DELETE_BLOG_POST' | 'GET_BLOG_POST';

export interface IContext {
  state?: IBLog[];
  [key: string]: any;
}
