const build = require("./app");
const request = require("supertest");

describe("Fasitfy tests", () => {
  const app = build();

  describe("Supertest tests", () => {
    test.skip("UNSKIP TO FIX TESTS", async () => {
      const response = await app.inject({ method: "GET", url: "/get" });
      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toEqual({ hello: "world" });
    });

    test("GET", async () => {
      const response = await request(app.server).get("/get");
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ hello: "world" });
    });

    test("POST", async () => {
      const response = await request(app.server)
        .post("/post")
        .send({ omelette: "du fromage" });

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({
        omelette: "du fromage",
        comment: "POST",
      });
    });

    test("PUT", async () => {
      const response = await request(app.server)
        .put("/put")
        .send({ omelette: "du fromage" });

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({
        omelette: "du fromage",
        comment: "PUT",
      });
    });

    test("DELETE", async () => {
      const response = await request(app.server).delete("/delete");
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({
        comment: "DELETE",
      });
    });
  });

});
