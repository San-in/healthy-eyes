import {makeAutoObservable} from 'mobx';

class Store {
  isAuth = false;
  isFirstRender = true;

  constructor() {
    makeAutoObservable(this);
  }
  setIsAuth(status: boolean) {
    this.isAuth = status;
  }

  setIsFirstRender() {
    this.isFirstRender = false;
  }
}
export const UIStore = new Store();
