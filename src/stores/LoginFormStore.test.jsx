import LoginFormStore from './LoginFormStore';

describe('LoginFormStore', () => {
  let loginFormStore;

  beforeEach(() => {
    loginFormStore = new LoginFormStore();
  });

  it('changeUserName', () => {
    expect(loginFormStore.userName).toBe('');

    loginFormStore.changeUserName('a');

    expect(loginFormStore.userName).toBe('a');
  });

  it('changePassword', () => {
    expect(loginFormStore.password).toBe('');

    loginFormStore.changePassword('a');

    expect(loginFormStore.password).toBe('a');
  });

  it('reset', () => {
    loginFormStore.changeUserName('a');
    loginFormStore.changePassword('a');

    expect(loginFormStore.userName).toBe('a');
    expect(loginFormStore.password).toBe('a');

    loginFormStore.reset();

    expect(loginFormStore.userName).toBe('');
    expect(loginFormStore.password).toBe('');
  });
});
