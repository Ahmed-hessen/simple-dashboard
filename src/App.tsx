import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import WorkSpaces from "./pages/WorkSpaces";
import Account from "./pages/Account";
import Support from "./pages/Support";
import Logout from "./pages/Logout";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="workspaces" element={<WorkSpaces />} />
            <Route path="account" element={<Account />} />
            <Route path="support" element={<Support />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
