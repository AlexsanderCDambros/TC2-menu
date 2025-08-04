import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IMenuItem } from "../interfaces/iheader-Item";
import { useRecoilValue } from "recoil";
import { menuLinksState } from "../recoil/atoms/menuLinks";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Minha Aplicação" }) => {
  const menus = useRecoilValue(menuLinksState);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/";

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickLogout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  if (isLoginPage) {
    return null; // Ou retorne um header minimalista se preferir
  }

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {menus.map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={handleClose}
                    component="a"
                    href={item.link}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menus.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  href={item.link}
                  sx={{ textTransform: "none" }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                key={999}
                color="inherit"
                onClick={onClickLogout}
                sx={{ textTransform: "none" }}
              >
                Sair
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
