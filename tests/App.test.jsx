import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";
import { expect } from "vitest";
import fs from "fs";
import path from "path";

describe("React-State : App", () => {
  it("ยังไม่ได้ใช้ useState()", async () => {
    render(<App />);

    const exercisePath = path.join(process.cwd(), "src/App.jsx");
    const data = await fs.readFileSync(exercisePath, "utf8");
    const regex = /useState/g;

    const found = data.match(regex);
    expect(found.length).toBe(2);
  });

  it("ยังไม่ใส่ function onClick ที่ปุ่ม 'สวัสดี!'", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "สวัสดี!" }));

    const greetingContainer = screen.getAllByText("สวัสดี!");
    expect(greetingContainer.length).toBe(2);
  });

  it("ยังไม่ใส่ function onClick ที่ปุ่ม 'Hi!'", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Hi!" }));

    const greetingContainer = screen.getAllByText("Hi!");
    expect(greetingContainer.length).toBe(2);
  });

  it("ยังไม่ใส่ function onClick ที่ปุ่ม '你好!'", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "你好!" }));

    const greetingContainer = screen.getAllByText("你好!");
    expect(greetingContainer.length).toBe(2);
  });
});
