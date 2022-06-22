// ========== Services
// import all modules
import http from './http';

class Service {
  public static getAllData() {
    return http().get('/course/all/summary-only/');
  }
}

export default Service;
