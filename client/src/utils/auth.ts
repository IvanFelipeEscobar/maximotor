import {jwtDecode as decode} from 'jwt-decode';

class AuthService {
  getToken = () => localStorage.getItem('id_token');

  setToken = (token: string) => localStorage.setItem('id_token', token);

  removeToken = () => localStorage.removeItem('id_token');

  isTokenExpired = (token: string) => {
    const decoded = decode(token);
    const currentTime = Date.now() / 1000;
    if (!token || decoded.exp! < currentTime || token === undefined) {
      this.logout();
      return true
    } else return false
  };

  isLoggedIn = () => {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  };

  login = (token: string) => {
    this.setToken(token);
    window.location.assign('/user-dashboard');
  };

  // signup = (token: string) => {
  //   this.setToken(token);
  //   window.location.assign('/new-user');
  // };

  logout = () => {
    this.removeToken();
    window.location.assign('/');
  };
}

export const Auth = new AuthService();
