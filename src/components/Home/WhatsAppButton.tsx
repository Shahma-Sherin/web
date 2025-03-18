import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, [isClient]);
  return (
    <>
      {isClient && (
        <Tooltip title="Contact">
          <Link
            href={
              "https://wa.me/+919745145573?text=Hai%20Shahma%20Sherin%20K%2C%0A"
            }
            target="_blank"
            className="fixed z-[9999] bottom-3 right-4 flex bg-[#B2A4D4] p-4 text-white rounded-full text-3xl"
          >
            <div>
              <WhatsAppIcon />
            </div>
          </Link>
        </Tooltip>
      )}
    </>
  );
}
