import { FC } from "react";

import { Button, Container } from "@mui/material";

interface VideoPlayerProps {
  source: string;
  turnOffVideo: () => void;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ source, turnOffVideo }) => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 15 }}>
      <video controls={true} width="100%" height="auto">
        <source src={source} type="video/mp4" />
      </video>

      <Button variant="outlined" onClick={turnOffVideo}>
        Go Back
      </Button>
    </Container>
  );
};

export default VideoPlayer;
