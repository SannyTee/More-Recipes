import account from '../helper/account';

export default {
  /**
   * Enables Users to signup for account
   * @param {Object}  req
   * @param {Object} res
   * @returns  {JSON} Returns success or failure message
   */
  signup(req, res) {
    account.createUser(req, res);
  },
  /**
   * Enables Users to signin into account
   * @param {Object}  req
   * @param {Object} res
   * @returns  {JSON} Returns success or failure message
   */
  signIn(req, res) {
    account.signInUser(req, res);
  }
};
