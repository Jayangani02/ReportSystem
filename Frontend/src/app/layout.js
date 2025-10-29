import "./globals.css";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

export const metadata = {
  title: "HR Reporting System",
  description: "Employee Management and Reporting Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

