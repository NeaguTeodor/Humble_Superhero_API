import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("Superheroes E2E (End-to-End)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it("POST /superheroes - should create a new superhero", async () => {
    const newHero = { name: "Nikola Tesla", superpower: "Empathy", humilityScore: 10 };

    const response = await request(app.getHttpServer())
      .post("/superheroes")
      .send(newHero)
      .expect(201);

    expect(response.body).toMatchObject(newHero);
  });

  it("POST /superheroes - should fail if humilityScore is out of range", async () => {
    const invalidHero = { name: "Donald Trump", superpower: "Self-Love", humilityScore: 15 };

    const response = await request(app.getHttpServer())
      .post("/superheroes")
      .send(invalidHero)
      .expect(400);

    expect(response.body.message).toContain("humilityScore must not be greater than 10");
  });

  it("GET /superheroes - should return a list of superheroes", async () => {
    const response = await request(app.getHttpServer()).get("/superheroes").expect(200);
    
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("superpower");
    expect(response.body[0]).toHaveProperty("humilityScore");
  });
});
