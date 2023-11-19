import { FC, useState } from "react";

import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import MiniDrawer from "./components/SideNav";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import IMovieData from "./types/movieType";
import AxiosDataService from "./service/axiosDataService";

import MovieList from "./components/MovieList";
import VideoPlayer from "./components/VideoPlayer";
import FeaturedMovie from "./components/FeaturedMovie";

import { useMount } from "./hooks/useMount";

import "./App.css";

const App: FC = () => {
  const [featuredMovie, setFeaturedMovie] = useState<IMovieData | null>(null);
  const [trendingNow, setTrendingNow] = useState<IMovieData[] | null>(null);
  const [videoOpen, setVideoOpen] = useState<boolean>(false);

  useMount(() => {
    AxiosDataService.getAllTrendingNow().then((res) => {
      setTrendingNow(res.data);
    });
    const IdFromSessionStorage: string | null =
      window.sessionStorage.getItem("Id");
    if (IdFromSessionStorage && IdFromSessionStorage !== "1") {
      AxiosDataService.getTrendingNow(Number(IdFromSessionStorage)).then(
        (res) => {
          setFeaturedMovie(res.data);
        }
      );
    } else {
      AxiosDataService.getFeatured().then((res) => {
        setFeaturedMovie(res.data);
      });
    }
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#000000",
        paper: "#000000",
      },
    },
  });

  const playVideo = (setFeatured?: boolean, movieData?: IMovieData) => {
    if (setFeatured && movieData) {
      window.sessionStorage.setItem("Id", movieData.Id);
      setFeaturedMovie(movieData);
      setTimeout(() => {
        setVideoOpen(true);
      }, 2000);
    } else {
      if (!featuredMovie?.VideoUrl) {
        alert("video link doesnt exist");
        return;
      }
      setVideoOpen(true);
    }
  };

  const turnOffVideo = () => {
    setVideoOpen(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MiniDrawer />
      <Box sx={{ ml: 15 }}>
        {featuredMovie?.VideoUrl && videoOpen ? (
          <VideoPlayer
            source={featuredMovie.VideoUrl}
            turnOffVideo={turnOffVideo}
          />
        ) : (
          featuredMovie && (
            <FeaturedMovie playVideo={playVideo} movieData={featuredMovie} />
          )
        )}
        {trendingNow && (
          <MovieList playVideo={playVideo} movies={trendingNow} />
        )}
      </Box>
    </ThemeProvider>
  );
};

export default App;
