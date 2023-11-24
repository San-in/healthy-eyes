import {makeAutoObservable} from 'mobx';

class Store {
  isAuth = false;
  isFirstRender = true;
  isPolicyModalVisible: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
  setIsAuth(status: boolean) {
    this.isAuth = status;
  }
  togglePolicyModalVisible() {
    this.isPolicyModalVisible = !this.isPolicyModalVisible;
  }

  setIsFirstRender() {
    this.isFirstRender = false;
  }
}
export const UIStore = new Store();
