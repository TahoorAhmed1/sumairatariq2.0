"use client";
import { Nunito } from "next/font/google";
import "../globals.css";
import { ToastContainer } from "react-toastify";
const inter = Nunito({ subsets: ["latin"], weight: "400" });
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/common/header";
import { useHome } from "@/store/home";
import { API } from "@/services";
import { useEffect } from "react";
import axios from "axios";

export default function RootLayout({ children }) {
  const { setUser } = useHome();

  const getUser = async (id) => {
    try {
      let res = await API.getCustomerInfo(id);
      let data = res.data;
      setUser(data[0]);
    } catch (error) {}
  };

  useEffect(() => {
    let id = JSON.parse(localStorage.getItem("user_id"));
    if (id) {
      getUser(id);
    }
  }, []);

  let data = [
    {
      id: "2becf772-e370-45cc-9047",
      name: "Formals",
      SubCategory: [
        {
          id: "3d538f90-1625-4e52-b05c",
          name: " Two Piece",
          Category: "2becf772-e370-45cc-9047",
        },
        {
          id: "7fd40da5-50e6-4247-b0c6",
          name: " Three Piece",
          Category: "2becf772-e370-45cc-9047",
        },
      ],
    },
    {
      id: "42e2b00d-b44a-4db5-9e2d",
      name: "New Arrivals",
      SubCategory: [
        {
          id: "6229e69c-2068-413f-804a",
          name: " Two Piece",
          Category: "42e2b00d-b44a-4db5-9e2d",
        },
        {
          id: "94d37450-b1da-4d8e-a74f",
          name: " Three Piece",
          Category: "42e2b00d-b44a-4db5-9e2d",
        },
      ],
    },
    {
      id: "6b0c2cde-abfc-4ad2-a733",
      name: " Luxury",
      SubCategory: [
        {
          id: "4c0e381f-1e0a-4d28-8329",
          name: " Two Piece",
          Category: "6b0c2cde-abfc-4ad2-a733",
        },
        {
          id: "9d50e400-95ef-4c7f-81a6",
          name: " Three Piece",
          Category: "6b0c2cde-abfc-4ad2-a733",
        },
      ],
    },
    {
      id: "bec2c378-f9db-48c0-8fc6",
      name: " Casuals",
      SubCategory: [
        {
          id: "851b30eb-460f-43d4-93d6",
          name: " Two Piece",
          Category: "bec2c378-f9db-48c0-8fc6",
        },
        {
          id: "8752757a-5e13-4853-9f6b",
          name: " Three Piece",
          Category: "bec2c378-f9db-48c0-8fc6",
        },
      ],
    },
  ];

  let CategoriesL = data.slice(Math.ceil(data.length / 2));
  let CategoriesR = data.slice(0, Math.ceil(data.length / 2));
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header
          CategoriesL={CategoriesL}
          CategoriesR={CategoriesR}
          data={data}
        />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <div className="flex justify-between container py-12">{children}</div>
      </body>
    </html>
  );
}