import "./App.css";
import MyRoutes from "./routes/MyRoutes";
import { Header, Footer } from "./components";
function App() {
  return (
    <div className="App m-4 h-screen">
      <Header />
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
