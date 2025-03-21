"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import loadingJson from "../../public/asset/lottie/loading.json";
import dynamic from "next/dynamic";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <Lottie animationData={loadingJson} loop />
    </div>
  );
};

export default LoadingScreen;
