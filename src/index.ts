export default function Home() {
  console.log("Hello from index.ts");

  const app = document.getElementById("app");
  if (app) {
    app.textContent = "Hello from TypeScript!";
  }
}

Home();
