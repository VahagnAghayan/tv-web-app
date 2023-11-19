import { FC } from "react";

import { styled } from "@mui/material/styles";
import { Typography, Stack } from "@mui/material";

import { secondsToHms } from "../../utils/helpers/secondsToHms";
import IMovieData from "../../types/movieType";

import CustomButton from "../Button";

interface FeaturedMovieProps {
  movieData: IMovieData;
  playVideo: () => void;
}

const StyledImage = styled("img")<{ src: string }>(({ src }) => ({
  width: "100vw",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: "-1",
}));

const StyledColumnLayout = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

const FeaturedMovie: FC<FeaturedMovieProps> = ({ movieData, playVideo }) => {
  const {
    Id,
    Title,
    CoverImage,
    TitleImage,
    Date,
    ReleaseYear,
    MpaRating,
    Category,
    Duration,
    VideoUrl,
    Description,
  } = movieData;
  return (
    <>
      <StyledImage src={`/assets/images/${CoverImage}`} />
      <StyledColumnLayout sx={{ marginTop: 20 }}>
        <Typography variant="h6" sx={{ opacity: 0.7 }}>
          Movie
        </Typography>
        <img src={`/assets/images/${TitleImage}`} style={{ width: "30%" }} />
        <Stack spacing={3} direction="row">
          <Typography variant="h6">{ReleaseYear}</Typography>
          <Typography variant="h6">{MpaRating}</Typography>
          <Typography variant="h6">{secondsToHms(+Duration)}</Typography>
        </Stack>

        <Typography variant="h1">TEXT</Typography>
        <Typography variant="body1" sx={{ width: "30%" }} gutterBottom={true}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Stack spacing={2} direction="row">
          <CustomButton type="Play" playVideo={playVideo} />
          <CustomButton type="More Info" />
        </Stack>
      </StyledColumnLayout>
    </>
  );
};

export default FeaturedMovie;
