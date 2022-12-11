import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app/app.module';
import { config } from 'dotenv';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let access_token: string;

  beforeAll(async () => {
    config();
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/auth/login (POST)', () => {
    const login_user = {
      username: 'admin',
      password: process.env.ADMIN_PASSWORD,
    };

    return request(app.getHttpServer())
      .post('/auth/login')
      .send(login_user)
      .expect(201)
      .then((res) => {
        access_token = JSON.parse(res.text).access_token;
      });
  });

  it('/auth/profile (GET)', () => {
    return request(app.getHttpServer())
      .get('/auth/profile')
      .auth(access_token, {
        type: 'bearer',
      })
      .expect(200)
      .expect('Hello admin');
  });

  afterAll(async () => {
    await app.close();
  });
});
