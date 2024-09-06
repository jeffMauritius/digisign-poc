import React from "react";
import { Button } from "./ui/button";
import { ChevronRightIcon, EnterFullScreenIcon, ExitFullScreenIcon } from "@radix-ui/react-icons";

export default function ToggleFullScreen() {
  const [toggleIcon, setToggleIcon] = React.useState(true);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      setToggleIcon(false);  
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        setToggleIcon(true); 
      document.exitFullscreen();
    }
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleFullScreen}>
       { toggleIcon ? <EnterFullScreenIcon className="h-4 w-4"/> : <ExitFullScreenIcon className="h-4 w-4"/> } 
    </Button>
  );
}
