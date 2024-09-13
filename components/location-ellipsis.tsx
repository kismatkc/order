import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const LocationEllipsis = ({ location }: { location: string }) => {
  const modifiedLocation =
    location.length > 30 ? `${location.slice(0, 30)}...` : location;
  return (
    <div className="flex justify-end p-3 text-sm">
      <Link href="/" className="cursor-pointer flex gap-1">
        <MapPin
          strokeWidth={1}
          fill="black"
          className="[&>circle]:fill-white"
        />

        <span>{modifiedLocation}</span>
      </Link>
    </div>
  );
};

export default LocationEllipsis;
