import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AccessAlarmsTwoToneIcon from "@mui/icons-material/AccessAlarmsTwoTone";
import FilePresentIcon from "@mui/icons-material/FilePresent";

import DvrTwoToneIcon from "@mui/icons-material/DvrTwoTone";
import DeviceHubTwoToneIcon from "@mui/icons-material/DeviceHubTwoTone";

///import react
import { useMemo, useState } from "react";

/// import component
import Memo from "./Menu/Memo";
import Asset from "./Menu/Asset";
import Ticket from "./Menu/Ticket";
import Remind from "./Menu/Remind";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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

const DashboardDetail = ({ open, setOpen }) => {
  const [selectMenu, setSelectMenu] = useState("");
  const list = useMemo(
    () => [
      {
        title: "แจ้งปัญหาระบบ IT",
        icon: <DvrTwoToneIcon />,
        link: "Ticket",
        component: <Ticket {...{ setSelectMenu, link: "Ticket" }} />,
      },
      {
        title: "Asset",
        icon: <DeviceHubTwoToneIcon />,
        link: "Asset",
        component: <Asset {...{ setSelectMenu, link: "Asset" }} />,
      },
      {
        title: "Memo",
        icon: <FilePresentIcon />,
        link: "Memo",
        component: <Memo {...{ setSelectMenu, link: "Memo" }} />,
      },
      {
        title: "Remind",
        icon: <AccessAlarmsTwoToneIcon />,
        link: "Remind",
        component: <Remind {...{ setSelectMenu, link: "Remind" }} />,
      },
    ],
    []
  );

  const navigate = useNavigate();

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {list.map((item) => (
            <ListItem key={item.title} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => navigate(item.link)}
                selected={selectMenu === item.link}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          {list.map((item) => (
            <Route key={item.title} path={item.link} element={item.component} />
          ))}
        </Routes>
      </Box>
    </>
  );
};

export default DashboardDetail;
