import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Menu.module.scss";

import {
  ListAltOutlined,
  PeopleOutlined,
  Search,
  AddBoxOutlined
} from "@mui/icons-material";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "@/theme";
import {
  IconButton,
  Divider,
  Button,
  Stack,
  Grid,
  Avatar,
  Typography
} from "@mui/material";
import Link from "next/link";
import { useUser } from "@/hooks/useUser";

const MobileMenu: React.FC = () => {
  const router = useRouter();
  const { user } = useUser();

  return (
    <>
      <Link href="/">
        <a>
          <Stack>
            <IconButton>
              <Search />
            </IconButton>
            <Typography variant="caption" fontWeight={600} color="#8083a3">
              Szukaj
            </Typography>
          </Stack>
        </a>
      </Link>
      <Link href="/ranking">
        <a>
          <Stack alignItems="center">
            <IconButton>
              <ListAltOutlined />
            </IconButton>
            <Typography variant="caption" fontWeight={600} color="#8083a3">
              Ranking
            </Typography>
          </Stack>
        </a>
      </Link>
      {user && (
        <Link href="/opinion/new">
          <a>
            <Stack alignItems="center">
              <IconButton color="primary">
                <AddBoxOutlined />
              </IconButton>
              <Typography variant="caption" fontWeight={600} color="#00D066">
                Dodaj opinie
              </Typography>
            </Stack>
          </a>
        </Link>
      )}
      <Divider orientation="vertical" flexItem />
      {user ? (
        <Link href="/profile">
          <a>
            <Avatar>{user.email[0].toLocaleUpperCase()}</Avatar>
          </a>
        </Link>
      ) : (
        <Stack spacing={2} direction="row">
          <Button variant="text" onClick={() => router.push("/signin")}>
            Logowanie
          </Button>
          <Button variant="contained" onClick={() => router.push("/signup")}>
            Rejestracja
          </Button>
        </Stack>
      )}
    </>
  );
};

export const Menu: React.FC = () => {
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { user } = useUser();

  return (
    <Grid
      container
      className={styles.ob__menu}
      justifyContent="space-around"
      alignItems="center"
    >
      {!isMobile && (
        <Grid item xs>
          <Link href="/">
            <a>
              <Image
                src="/logo.svg"
                alt="Obudynku Logo"
                height="46"
                width="138"
                onClick={() => router.push("/")}
              />
            </a>
          </Link>
        </Grid>
      )}
      {isMobile ? (
        <MobileMenu />
      ) : (
        <Grid item xs={8}>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Stack spacing={2} direction="row">
              <Link href="/">
                <a>
                  <Button variant="text">Szukaj</Button>
                </a>
              </Link>
              <Button onClick={() => router.push("/ranking")} variant="text">
                Ranking miast
              </Button>
              {user && (
                <Button
                  variant="contained"
                  onClick={() => router.push("/opinion/new")}
                >
                  Dodaj opinie
                </Button>
              )}
            </Stack>
            {user ? (
              <Link href="/profile">
                <a>
                  <Avatar>{user.email[0].toLocaleUpperCase()}</Avatar>
                </a>
              </Link>
            ) : (
              <Stack spacing={2} direction="row">
                <Button variant="text" onClick={() => router.push("/signin")}>
                  Logowanie
                </Button>
                <Button
                  variant="contained"
                  startIcon={<PeopleOutlined />}
                  onClick={() => router.push("/signup")}
                >
                  Rejestracja
                </Button>
              </Stack>
            )}
          </Stack>
        </Grid>
      )}
    </Grid>
  );
};

export default Menu;
