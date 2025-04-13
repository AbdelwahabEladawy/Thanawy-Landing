import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import HomeContent from "./Components/HomeContent/HomeContent";
import Testimonials from "./Components/Testimonials/Testimonials";
import Layout from "./Pages/Layout";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <main className="flex xl:flex-row flex-col w-full gap-4">
          <HomeContent />
          <Testimonials />
        </main>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
