import request from "supertest";
import { expect } from "chai";
const app = require("/Users/macbook/Documents/Sites/Sanbercode-Batch55/Tugas3-API/testAPI.js");

describe("API Automation Testing", () => {
  it("POST Request - Create User", async () => {
    // Kirim permintaan POST ke endpoint
    const response = await request.post("https://kasir-api.belajarqa.com/users");

    // Asssertion menggunakan Chai
    expect(response.status).to.equal(201);
    expect(response.body.message).to.equal("User berhasil ditambahkan");
  });

  it("POST Request - Add Unit", async () => {
    // Kirim permintaan POST ke endpoint
    const response = await request
      .post("https://kasir-api.belajarqa.com/units")
      .set(
        "Authorization",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYzNDhjZGU5LTAyMjQtNGJkNi1hNzMyLTc2ZTRjYjJiZDRhMSIsImNvbXBhbnlJZCI6IjkxOTNlOTZjLTI3ZWQtNGM5OC04OTM5LWFlNDljMWIyMTE4OSIsImlhdCI6MTcxNDg4NzI0M30.ktWXH8FwmwlFttbREMHnDr-WNF3gXqwIdddzjfCLJO8"
      );

    // Asssertion menggunakan Chai
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("makanan ringan");
  });

  it("POST Request - Add Customers", async () => {
    // Kirim permintaan POST ke endpoint
    const response = await request
      .post("https://kasir-api.belajarqa.com/custumers")
      .set(
        "Authorization",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYzNDhjZGU5LTAyMjQtNGJkNi1hNzMyLTc2ZTRjYjJiZDRhMSIsImNvbXBhbnlJZCI6IjkxOTNlOTZjLTI3ZWQtNGM5OC04OTM5LWFlNDljMWIyMTE4OSIsImlhdCI6MTcxNDg4NzI0M30.ktWXH8FwmwlFttbREMHnDr-WNF3gXqwIdddzjfCLJO8"
      );

    // Asssertion menggunakan Chai
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Budi");
  });

  it("POST Request - Delete Users", async () => {
    // Kirim permintaan POST ke endpoint
    const response = await request
      .delete("https://kasir-api.belajarqa.com/users/90391fcf-4c36-4c11-ac35-c6bfe87c7fe0")
      .set(
        "Authorization",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYzNDhjZGU5LTAyMjQtNGJkNi1hNzMyLTc2ZTRjYjJiZDRhMSIsImNvbXBhbnlJZCI6IjkxOTNlOTZjLTI3ZWQtNGM5OC04OTM5LWFlNDljMWIyMTE4OSIsImlhdCI6MTcxNDg4NzI0M30.ktWXH8FwmwlFttbREMHnDr-WNF3gXqwIdddzjfCLJO8"
      );

    // Asssertion menggunakan Chai
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal("User berhasil dihapus");
  });
});
