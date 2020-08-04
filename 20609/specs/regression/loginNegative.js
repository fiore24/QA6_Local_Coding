import LoginPage from "../../../pageObjects/login.page";
import {userNegativeData} from "../../data/userNegativeData";
import {admin, student} from "../../../testData/user";

describe ("LOGIN NEGATIVE", () => {
  before( () => {
    LoginPage.open();
  });

  it('TC-084 should enter wrong email', () => {
    LoginPage.login(userNegativeData.emailWrong, admin.password);
    browser.waitUntil( () => LoginPage.errorMessageCloseBtn.isDisplayed());
  });

  it('TC-085 should enter wrong password', () => {
    LoginPage.login(admin.email, userNegativeData.passwordWrong);
    browser.waitUntil( () => LoginPage.errorMessageCloseBtn.isDisplayed());
  });

  it('TC-086 should enter wrong email and password', () => {
    LoginPage.login(userNegativeData.emailWrong, userNegativeData.passwordWrong);
    browser.waitUntil( () => LoginPage.errorMessageCloseBtn.isDisplayed());
  });

  it('TC-087 should enter student email and admin password', () => {
    LoginPage.login(student.email, admin.password);
    browser.waitUntil( () => LoginPage.errorMessageCloseBtn.isDisplayed());
  });

  it('TC-088 should enter admin email and student password', () => {
    LoginPage.login(admin.email, student.password);
    browser.waitUntil( () => LoginPage.errorMessageCloseBtn.isDisplayed());
  });

  it('TC-089 should leave empty password field', () => {
    browser.refresh();
    LoginPage.inputUsername.setValue(admin.email);
    expect(LoginPage.loginBtn.isEnabled()).equal(false);
  });

  it('TC-090 should leave empty email field', () => {
    browser.refresh();
    LoginPage.inputPassword.setValue(admin.password);
    expect(LoginPage.loginBtn.isEnabled()).equal(false);
  });

});