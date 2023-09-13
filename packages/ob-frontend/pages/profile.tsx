import { Layout } from "@/components/Layout/Layout";
import { SnackbarContext } from "@/context/SnackbarContext";
import { useUser } from "@/hooks/useUser";
import {
  Avatar,
  Button,
  Typography,
  Stack,
  Grid,
  Chip,
  IconButton,
  Dialog,
  Box
} from "@mui/material";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { useContext, useState } from "react";
import { useOpinion } from "@/hooks/useOpinions";
import { OpinionCard } from "@/components/Opinion/OpinionCard";
import { avgRateForOpinion } from "@/utils/opinions";
import { Delete, Edit } from "@mui/icons-material";

export const Profile = () => {
  const [deleteID, setDeleteID] = useState<null | string>(null);
  const router = useRouter();
  const { setUser, user } = useUser();
  const { getMyOpinions, deleteOpinion } = useOpinion();
  const { data, refetch } = useQuery("myOpinions", () => getMyOpinions());
  const { mutate } = useMutation("deleteOpinion", deleteOpinion, {
    onSuccess: data => {
      if (data) {
        refetch();
      }
    }
  });
  const snackbar = useContext(SnackbarContext);

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Stack
            spacing={2}
            sx={{ maxWidth: 300, margin: "0 auto" }}
            justifyContent="center"
            alignItems="center"
          >
            <Avatar sx={{ width: 96, height: 96 }}>
              {user?.email[0].toLocaleUpperCase()}
            </Avatar>
            <Typography variant="subtitle2" component="div">
              {user?.email}
            </Typography>
            <Button
              variant="contained"
              color="error"
              size="large"
              fullWidth
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
          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            variant="subtitle2"
            component="div"
            mb="8px"
            color="#8083a3"
          >
            Twoje opinie
          </Typography>
          <Stack spacing={2}>
            {data?.length ? (
              data.map(opinion => (
                <OpinionCard
                  actions={
                    <>
                      <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() => setDeleteID(opinion.id)}
                      >
                        <Delete />
                      </IconButton>
                      <IconButton
                        aria-label="edit"
                        onClick={() =>
                          router.push(`/opinion/edit/${opinion.id}`)
                        }
                      >
                        <Edit />
                      </IconButton>
                    </>
                  }
                  badge={
                    <Chip
                      label={
                        opinion.status === "APPROVED"
                          ? "Zatwierdzone"
                          : "Oczekuje na zatwierdzenie"
                      }
                      size="small"
                      color={
                        opinion.status === "APPROVED" ? "primary" : undefined
                      }
                    />
                  }
                  desc={opinion.advice}
                  key={opinion.id}
                  title={opinion.building.address}
                  subtitle={opinion.building.city}
                  rate={avgRateForOpinion(opinion)}
                />
              ))
            ) : (
              <Typography
                variant="subtitle2"
                component="div"
                mt="8px"
                textAlign="center"
              >
                Nie dodałeś jeszcze żadnej opinii
              </Typography>
            )}
          </Stack>
        </Grid>
      </Grid>
      <Dialog open={!!deleteID} onClose={() => setDeleteID(null)}>
        <Box padding={2}>
          <Typography variant="subtitle1" component="div">
            Czy na pewno chcesz usunąć tą opinie?
          </Typography>
          <Grid container justifyContent="flex-end" mt={2}>
            <Button
              onClick={() => {
                setDeleteID(null);
              }}
            >
              Anuluj
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                deleteID && mutate(deleteID);
                setDeleteID(null);
              }}
            >
              Usuń
            </Button>
          </Grid>
        </Box>
      </Dialog>
    </Layout>
  );
};

export default Profile;
