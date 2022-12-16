import MyRoutes from "./routes/MyRoutes";
import { Header, Footer } from "./components";
function App() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Header />
      <div style={{ minHeight: "80vh" }} className="flex justify-center">
        <MyRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
