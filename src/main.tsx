import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n";
import { detectLanguageByGeo } from "./i18n";

// Trigger geo-IP based language detection (non-blocking)
detectLanguageByGeo();

createRoot(document.getElementById("root")!).render(<App />);
