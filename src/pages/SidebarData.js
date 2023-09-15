import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeOutlinedIcon />,
    link: "/",
  },
  {
    title: "Movies",
    icon: <SmartDisplayIcon />,
    link: "/",
  },
  {
    title: "Tv Shows",
    icon: <VideocamOutlinedIcon />,
    link: "/",
  },
  {
    title: "Upcoming",
    icon: <CalendarTodayOutlinedIcon />,
    link: "/",
  },
];
