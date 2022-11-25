import Store from './Store.js';

export default class LoginFormStore extends Store {
  constructor() {
    super();

    this.userName = '';
    this.password = '';
  }

  changeUserName(userName) {
    this.userName = userName;

    this.publish();
  }

  changePassword(password) {
    this.password = password;

    this.publish();
  }

  reset() {
    this.userName = '';
    this.password = '';

    this.publish();
  }
}

export const loginFormStore = new LoginFormStore();
