"use client";

import { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Link from "next/link";
import { tokens } from "@/app/theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import {
  Box,
  Button,
  useTheme,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Tooltip title={title} placement="right" arrow>
      <div>
        <MenuItem
          active={selected === title}
          style={{
            color: colors.grey[100],
          }}
          onClick={() => setSelected(title)}
          icon={icon}
          component={<Link href={to} />}
        >
          <Typography>{title}</Typography>
        </MenuItem>
      </div>
    </Tooltip>
  );
};

const SubItem = ({ title, to, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isHover, setIsHover] = useState(false);

  function MouseOver() {
    setIsHover(true);
  }
  function MouseOut() {
    setIsHover(false);
  }

  return (
    <Tooltip title={title} placement="right" arrow>
      <div>
        <MenuItem
          active={selected === title}
          style={{
            color: colors.grey[100],
            backgroundColor: isHover ? "#868dfb" : colors.primary[400],
          }}
          onClick={() => setSelected(title)}
          onMouseOver={MouseOver}
          onMouseOut={MouseOut}
          component={<Link href={to} />}
          icon={<ArrowRightOutlinedIcon fontSize="10px" />}
        >
          <Typography>{title}</Typography>
        </MenuItem>
      </div>
    </Tooltip>
  );
};

export default function Sidenav() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <Box
      sx={{
        background: `${colors.primary[400]} !important`,
        height: "100%",
      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        rootStyles={{
          border: "none",
          background: `${colors.primary[400]} !important`,
        }}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: disabled ? "#f5d9ff" : `${colors.grey[100]}`,
                  backgroundColor: active
                    ? "#6870fa"
                    : `${colors.primary[400]}`,
                  "&:hover": {
                    backgroundColor: "#868dfb",
                  },
                };
            },
          }}
        >
          <MenuItem //PROFİL FOTOĞRAFI BÖLÜMÜ
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "0px 0 1px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box p={1} backgroundColor={`${colors.primary[400]}`}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/profil-photo.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Muhammet Çelik
                </Typography>
                <Typography variant="h5" color={colors.blueAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENUS */}
          <Item
            title="Dashboard"
            to="/admin"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          {/* DATA */}
          <Typography
            variant="h6"
            color={colors.primary[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Data
          </Typography>

          {/* BLOG */}
          <Tooltip title="Blog" placement="right" arrow>
            <Box component="div">
              <SubMenu
                label="Blog"
                icon={<ContentPasteOutlinedIcon />}
                rootStyles={{
                  border: "none",
                  background: `${colors.primary[400]} !important`,
                }}
              >
                <SubItem
                  title="Oluştur"
                  to="/admin/blog/create"
                  selected={selected}
                  setSelected={setSelected}
                />
                <SubItem
                  title="Listele"
                  to="/admin/blog/list"
                  selected={selected}
                  setSelected={setSelected}
                />
              </SubMenu>
            </Box>
          </Tooltip>

          <Item
            title="Manage Team"
            to="/admin/team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Contacts Information"
            to="/admin/contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Invoices Balances"
            to="/admin/invoices"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          {/* PAGES */}
          <Typography
            variant="h6"
            color={colors.primary[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Pages
          </Typography>
          <Item
            title="Profile Form"
            to="/admin/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Calendar"
            to="/admin/calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="FAQ"
            to="/admin/faq"
            icon={<HelpOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          {/* CHARTS */}
          <Typography
            variant="h6"
            color={colors.primary[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Charts
          </Typography>

          <Item
            title="Bar Chart"
            to="/admin/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Pie Chart"
            to="/admin/pie"
            icon={<PieChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Line Chart"
            to="/admin/line"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Geography Chart"
            to="/admin/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>
      </Sidebar>
    </Box>
  );
}
