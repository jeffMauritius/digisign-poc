import React from "react";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";

export default function ToggleFullScreen() {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleFullScreen}>
      <ChevronRightIcon className="h-4 w-4" />
    </Button>
  );
}
