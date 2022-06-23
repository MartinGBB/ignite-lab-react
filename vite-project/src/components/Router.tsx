import { Routes, Route } from "react-router-dom";
import { Event } from "../pages/Event";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={ <h2>Home</h2> } />
      <Route path="/event" element={ <Event /> } />
    </Routes>
  );
}