import RegistrationPage from '../pageObjects/registration';

describe('Registration', () => {
  it('Registers a new user', () => {
    const timestamp = Date.now();
    const username = `User${timestamp}`;
    RegistrationPage.visit();
    RegistrationPage.fillForm(username);
    RegistrationPage.getConfirmationMessage().should('have.text', ' Your Account Has Been Created!');
  });
});
