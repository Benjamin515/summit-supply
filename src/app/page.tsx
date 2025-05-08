"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

// import ShopLayout from "./shop/layout";
import Landing from "@/components/layouts/Landing";

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="">
      {<Landing />}
      {/* {pathname !== "/shop" ? <Landing /> : <ShopLayout />} */}
    </div>
  );
}
