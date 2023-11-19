import * as React from "react";

import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import {
  Box,
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import image1 from "../../assets/icons/ICON - Search.png";
import image2 from "../../assets/icons/Group 46.png";
import image3 from "../../assets/icons/Group 56.png";
import image4 from "../../assets/icons/Group 54.png";
import image5 from "../../assets/icons/Group 53.png";
import image6 from "../../assets/icons/Group 47.png";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const MiniDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerMouseEnter = () => {
    setOpen(true);
  };

  const handleDrawerMouseLeave = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{ opacity: open ? 0.8 : 1, zIndex: 1 }}
        open={open}
        onMouseEnter={handleDrawerMouseEnter}
        onMouseLeave={handleDrawerMouseLeave}
      >
        <List>
          {[
            { text: "Search", icon: image1 },
            { text: "Home", icon: image2 },
            { text: "TV Shows", icon: image3 },
            { text: "Movies", icon: image4 },
            { text: "Genres", icon: image5 },
            { text: "Watch Later", icon: image6 },
          ].map(({ text, icon }, index) => (
            <ListItem
              key={text}
              disablePadding={true}
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  marginTop: 3,
                }}
              >
                <img src={icon} alt="" style={{}} />

                <ListItemText
                  primary={text}
                  sx={{
                    opacity: open ? 1 : 0,
                    minWidth: 0,
                    ml: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {open && (
          <List sx={{ marginTop: 25 }}>
            <ListItemText
              primary="Language"
              sx={{
                marginLeft: 3,
                opacity: 0.8,
                fontWeight: 900,
                cursor: "pointer",
              }}
            />
            <ListItemText
              primary="Get Help"
              sx={{
                marginLeft: 3,
                opacity: 0.8,
                fontWeight: 900,
                cursor: "pointer",
              }}
            />
            <ListItemText
              primary="Exit"
              sx={{
                marginLeft: 3,
                opacity: 0.8,
                fontWeight: 900,
                cursor: "pointer",
              }}
            />
          </List>
        )}
      </Drawer>
    </Box>
  );
};

export default MiniDrawer;
