import {jwtDecode as decode} from 'jwt-decode';

class AuthService {
  getToken = () => localStorage.getItem('id_token');

  setToken = (token: string) => localStorage.setItem('id_token', token);

  removeToken = () => localStorage.removeItem('id_token');

  getDecodedToken = () => {
    const token = this.getToken();
    return token ? decode(token) : null;
  };

  isTokenExpired = (token: string) => {
    if (!token) return true;
    const decoded = decode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp! < currentTime;
  };

  isLoggedIn = () => {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  };

  login = (token: string) => {
    this.setToken(token);
    window.location.assign('/');
  };

  logout = () => {
    this.removeToken();
    window.location.assign('/');
  };

  handleAuthentication = (token: string) => {
    if (token) {
      this.login(token);
    } else {
      this.logout();
    }
  };
}

export default new AuthService();
