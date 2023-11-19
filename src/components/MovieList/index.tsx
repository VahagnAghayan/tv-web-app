import { FC } from "react";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import IMovieData from "../../types/movieType";

const StyledImage = styled("img")<{ src: string }>(({ src }) => ({
  width: "50px",
  height: "200px",
  cursor: "pointer",
}));

interface MovieListProps {
  movies: IMovieData[];
  playVideo: (setFeatured?: boolean, movieData?: IMovieData) => void;
}

interface CustomSliderProps {
  movies: IMovieData[];
  playVideo: (setFeatured?: boolean, movieData?: IMovieData) => void;
}

const CustomSlider: FC<CustomSliderProps> = ({ movies, playVideo }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    variableWidth: true,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {movies.map((item) => {
        return (
          <StyledImage
            key={item.Id}
            src={`/assets/images/${item.CoverImage}`}
            onClick={() => playVideo(true, item)}
          />
        );
      })}
    </Slider>
  );
};

const MovieList: FC<MovieListProps> = ({ movies, playVideo }) => {
  return (
    <div style={{ marginTop: 10, width: "95%" }}>
      <Typography variant="h5">Trending Now</Typography>
      <CustomSlider movies={movies} playVideo={playVideo} />
    </div>
  );
};

export default MovieList;
