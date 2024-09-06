import React from "react";
import { Button } from "./ui/button";
import { ChevronRightIcon, EnterFullScreenIcon, ExitFullScreenIcon } from "@radix-ui/react-icons";

export default function ToggleFullScreen() {
  const [toggleIcon, setToggleIcon] = React.useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      setToggleIcon(true);  
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        setToggleIcon(false); 
      document.exitFullscreen();
    }
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleFullScreen}>
      <ChevronRightIcon className="h-4 w-4" />
    </Button>
  );
}
