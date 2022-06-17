// ========== Services
// import all modules
import http from './http';
import { IJoinBody } from '../interfaces';

class Service {
  public static joinRoom(data: IJoinBody) {
    return http().post('/chat/join', data);
  }
}

export default Service;
