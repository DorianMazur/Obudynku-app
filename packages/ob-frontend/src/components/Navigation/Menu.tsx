import React, { useContext, useState } from "react";
import Image from "next/image";
import styles from "./Menu.module.scss";

import { Close, MenuRounded } from "@mui/icons-material";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "@/theme";
import {
  IconButton,
  Divider,
  Button,
  Stack,
  Grid,
  AppBar,
  Container,
  Toolbar,
  Drawer,
  Box,
  ListItemButton,
  ListItemText
} from "@mui/material";
import Link from "next/link";
import { useUser } from "@/hooks/useUser";
import { SnackbarContext } from "@/context/SnackbarContext";

const MobileMenu: React.FC = () => {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [open, setOpen] = useState(false);
  const snackbar = useContext(SnackbarContext);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <AppBar position="static" sx={{ background: "white", boxShadow: "none" }}>
      <Container maxWidth="lg" disableGutters>
        <Toolbar sx={{ padding: "0 !important" }}>
          <Link href="/" style={{ flexGrow: 1 }}>
            <Image
              src="/logo.svg"
              alt="Obudynku Logo"
              height="46"
              width="138"
              onClick={() => router.push("/")}
            />
          </Link>

          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              ml: 2,
              color: "black"
            }}
          >
            <MenuRounded />
          </IconButton>

          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <Box
              sx={{
                p: 2,
                height: 1,
                minWidth: 200,
                backgroundColor: "#ffffff"
              }}
            >
              <IconButton sx={{ mb: 2 }}>
                <Close onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton onClick={() => router.push("/")}>
                  <ListItemText primary="Opinie" />
                </ListItemButton>
                <ListItemButton onClick={() => router.push("/ranking")}>
                  <ListItemText primary="Ranking miast" />
                </ListItemButton>
                {user && (
                  <ListItemButton onClick={() => router.push("/profile")}>
                    <ListItemText primary="Profil" />
                  </ListItemButton>
                )}
                <Box ml={1} mt={1} mb={1}>
                  <Button
                    variant="outlined"
                    onClick={() => router.push("/opinion/new")}
                  >
                    Dodaj opinie
                  </Button>
                </Box>
                <Divider sx={{ mb: 2, mt: 2 }} />
                <Box ml={1} mt={1} mb={1}>
                  {user ? (
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => {
                        router.replace("/");
                        setUser(undefined);
                        snackbar.showSnackbar({
                          message: "Pomyślnie wylogowano",
                          severity: "success"
                        });
                      }}
                    >
                      Wyloguj się
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => router.push("/signin")}
                    >
                      Logowanie
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export const Menu: React.FC = () => {
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { user, setUser } = useUser();
  const snackbar = useContext(SnackbarContext);

  return (
    <Grid
      container
      className={styles.ob__menu}
      justifyContent="space-between"
      alignItems="center"
    >
      {isMobile ? (
        <MobileMenu />
      ) : (
        <>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Obudynku Logo"
              height="46"
              width="138"
              onClick={() => router.push("/")}
            />
          </Link>
          <Grid xs={10}>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
              justifyContent="flex-end"
              alignItems="center"
            >
              <Stack spacing={2} direction="row">
                <Button onClick={() => router.push("/")} variant="text">
                  Opinie
                </Button>
                <Button onClick={() => router.push("/ranking")} variant="text">
                  Ranking miast
                </Button>
                {user && (
                  <Button
                    onClick={() => router.push("/profile")}
                    variant="text"
                  >
                    Profil
                  </Button>
                )}
                <Button
                  variant="outlined"
                  onClick={() => router.push("/opinion/new")}
                >
                  Dodaj opinie
                </Button>
              </Stack>
              {user ? (
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    router.replace("/");
                    setUser(undefined);
                    snackbar.showSnackbar({
                      message: "Pomyślnie wylogowano",
                      severity: "success"
                    });
                  }}
                >
                  Wyloguj się
                </Button>
              ) : (
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    onClick={() => router.push("/signin")}
                  >
                    Logowanie
                  </Button>
                </Stack>
              )}
            </Stack>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Menu;
