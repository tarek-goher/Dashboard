import "./index.css";
import App from "./App.tsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";

import React from "react";
// import ReactDOM from "react-dom";
import Dashboard from "./components/page/Dashbord/Dashboard.tsx";
import Team from "./components/page/team/team.tsx";
import Contacts from "./components/page/contacts/contacts.tsx";
import Invoices from "./components/page/invoices/invoices.tsx";
import Calender from "./components/page/Calender/Calender.tsx";
import FaQ from "./components/page/FaQ/FaQ.tsx";
import BarChart from "./components/page/BarChart/BarChart.tsx";
import PieChart from "./components/page/PieChart/PieChart.tsx";
import LineChart from "./components/page/LineChart/LineChart.tsx";
import GeographyChart from "./components/page/GeographyChart/GeographyChart.tsx";
import Form from "./components/page/Form/Form.tsx";
import NotFound from "./components/NotFound/NotFound.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="Form" element={<Form />} />
      <Route path="Calender" element={<Calender />} />
      <Route path="FaQ" element={<FaQ />} />
      <Route path="BarChart" element={<BarChart />} />
      <Route path="PieChart" element={<PieChart />} />
      <Route path="LineChart" element={<LineChart />} />
      <Route path="GeographyChart" element={<GeographyChart />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
