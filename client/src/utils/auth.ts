import {jwtDecode as decode} from 'jwt-decode';

class AuthService {
  getToken = () => localStorage.getItem('id_token');

  setToken = (token: string) => localStorage.setItem('id_token', token);

  removeToken = () => localStorage.removeItem('id_token');

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

  signup = (token: string) => {
    this.setToken(token);
    window.location.assign('/new-user');
  };

  logout = () => {
    this.removeToken();
    window.location.assign('/');
  };
}

export const Auth = new AuthService();
