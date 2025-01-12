import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Blogs from "./components/Blogs";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AddBlog from "./components/AddBlog";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/create-new" element={<AddBlog />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}
