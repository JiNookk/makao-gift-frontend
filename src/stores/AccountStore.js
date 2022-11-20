import { apiService } from '../services/ApiService';
import Store from './Store';

export default class AccountStore extends Store {
  constructor() {
    super();

    this.amount = 50000;

    this.signUpState = '';
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
