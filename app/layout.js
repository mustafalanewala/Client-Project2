import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Inventory Management System",
  description: "",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-100">
        <ToastContainer />
        <div className="max-w-full mx-auto ">{children}</div>
      </body>
    </html>
  );
}
