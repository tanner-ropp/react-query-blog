import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//

import { Wrapper, Main } from "../components/styled";
import GlobalLoader from "../components/GlobalLoader";
import Sidebar from "../components/Sidebar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Admin from "../screens/admin";
import AdminPost from "../screens/admin/Post";
import Blog from "../screens/blog";
import BlogPost from "../screens/blog/Post";

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof document === "undefined" ? null : children}
    </div>
  );
}
const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeHydrate>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Wrapper>
            {/* <GlobalLoader /> */}
            <Sidebar />
            <Main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <h1>Welcome!</h1>
                    </>
                  }
                />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/:postId" element={<AdminPost />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:postId" element={<BlogPost />} />
              </Routes>
            </Main>
          </Wrapper>
          <ReactQueryDevtools />
        </BrowserRouter>
      </QueryClientProvider>
    </SafeHydrate>
  );
}
