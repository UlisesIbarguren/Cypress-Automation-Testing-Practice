import RegistrationPage from '../pageObjects/registration';

describe('Registration', () => {
  it('Registers a new user', () => {
    const timestamp = Date.now();
    const username = `User${timestamp}`;
    const userData = {
      firstName: 'Test',
      lastName: username,
      email: `${username}@example.com`,
      telephone: '4444-6666',
      password: 'Password123'
    };

    RegistrationPage.visit();
    RegistrationPage.fillForm(userData);
    RegistrationPage.getConfirmationMessage().should('have.text', ' Your Account Has Been Created!');
  });
});
