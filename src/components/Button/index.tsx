import { FC } from "react";
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface CustomButtonProps {
  type: "Play" | "More Info";
  playVideo?: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({ type, playVideo }) => {
  if (type === "Play") {
    return (
      <Button
        variant="contained"
        sx={{ backgroundColor: "#ffffff", borderRadius: 8, color: "#000000" }}
        startIcon={<PlayArrowIcon />}
        onClick={playVideo}
      >
        {type}
      </Button>
    );
  }
  if (type === "More Info") {
    return (
      <Button
        variant="contained"
        sx={{ backgroundColor: "#1739e3", borderRadius: 8, color: "#ffffff" }}
      >
        {type}
      </Button>
    );
  }
  return null;
};

export default CustomButton;
