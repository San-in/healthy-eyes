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

  setIsFirstRender(status: boolean) {
    this.isFirstRender = status;
  }
}
const UIStore = new Store();
export default UIStore;
