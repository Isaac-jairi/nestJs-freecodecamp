import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return 'login';
  }
  signup() {
    return 'signup';
  }
}
