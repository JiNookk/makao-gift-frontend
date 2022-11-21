import { apiService } from '../services/ApiService';
import Store from './Store';

export default class AccountStore extends Store {
  constructor() {
    super();

    // TODO : 손봐야함.
    this.amount = 50000;

    this.signUpState = '';
  }

  async login({ userName, password }) {
    try {
      const {
        accessToken,
        name,
        amount,
      } = await apiService.login({ userName, password });

      this.name = name;
      this.amount = amount;

      return accessToken;
    } catch (e) {
      this.errorMessage = e.response.data.message;

      // TODO: 고칠것
      this.amount = 0;

      return '';
    } finally {
      this.publish();
    }
  }

  purchase({ itemCost }) {
    if (itemCost > this.amount || itemCost < 0) {
      return;
    }

    this.amount -= itemCost;
    this.publish();
  }

  changeSignUpState(state, { errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;

    this.signUpState = state;

    this.publish();
  }

  async requestSignUp({
    name, userName, password, confirm,
  }) {
    this.changeSignUpState('processing');

    try {
      await apiService.requestSignUp({
        name, userName, password, confirm,
      });
      this.changeSignUpState('success');
    } catch (e) {
      const { message } = e.response.data;
      this.changeSignUpState('fail', { errorMessage: message });
    }
  }

  get isSignUpProcessing() {
    return this.signUpState === 'processing';
  }

  get isSignUpSuccess() {
    return this.signUpState === 'success';
  }

  get isSignUpFail() {
    return this.signUpState === 'fail';
  }
}

export const accountStore = new AccountStore();
