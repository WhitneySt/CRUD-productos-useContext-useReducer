import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import useSessionStorage from "../../hooks/useSessionStorage";

const pages = [
  {
    page: "Iniciar Sesión",
    link: "/login",
    needAuth: false,
  },
  {
    page: "Registrarse",
    link: "/register",
    needAuth: false,
  },
  {
    page: "Productos",
    link: "/",
    needAuth: true,
  },
];
const settings = ["Profile", "Logout"];

function NavigationBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [links, setLinks] = useState([]);

  const { user: { user, userDispatch } } = useAppContext();
  const { deleteInfoInStorage } = useSessionStorage('user');
  const navigate = useNavigate()

  useEffect(() => {
    setLinks(() =>
      pages.filter((item) => {
        if (user.isAuth) {
          return item.needAuth === true;
        } else {
          return item.needAuth === false;
        }
      })
    );
  }, [user]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = (path) => {
    if (path === "Logout") {
      userDispatch({
        type: "LOGOUT"
      });
      deleteInfoInStorage();
      navigate("/login")
    }
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(145, 107, 197, 0.452)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StorefrontOutlinedIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            STORE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {links.map((page, index) => (
                <MenuItem key={index} onClick={() => navigate(page.link)}>
                  <Typography textAlign="center">{page.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <StorefrontOutlinedIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            STORE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {links.map((page, index) => (
              <Button
                key={index}
                onClick={() => navigate(page.link)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.page}
              </Button>
            ))}
          </Box>
          {user.isAuth && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={user?.user?.name || "Remy Sharp"}
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => handleLogOut(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBar;
