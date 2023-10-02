import { Layout } from "@/components/Layout/Layout";
import { useUser } from "@/hooks/useUser";
import * as yup from "yup";
import {
  Button,
  Typography,
  Stack,
  Grid,
  Chip,
  IconButton,
  Dialog,
  Box,
  Tabs,
  Tab,
  TextField
} from "@mui/material";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { useContext, useState } from "react";
import { useOpinion } from "@/hooks/useOpinions";
import { OpinionCard } from "@/components/Opinion/OpinionCard";
import { avgRateForOpinion } from "@/utils/opinions";
import { Delete, Edit } from "@mui/icons-material";
import { useFormik } from "formik";
import { SnackbarContext } from "@/context/SnackbarContext";

export const Profile = () => {
  const [deleteID, setDeleteID] = useState<null | string>(null);
  const router = useRouter();
  const { user, changePassword } = useUser();
  const { getMyOpinions, deleteOpinion } = useOpinion();
  const [tab, setTab] = useState("opinions");
  const { data, refetch } = useQuery("myOpinions", () => getMyOpinions());
  const snackbar = useContext(SnackbarContext);
  const { mutate } = useMutation("deleteOpinion", deleteOpinion, {
    onSuccess: data => {
      if (data) {
        refetch();
      }
    }
  });
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      newPasswordConfirm: ""
    },
    onSubmit: ({ newPassword }, { resetForm }) => {
      changePassword(newPassword).then(() => {
        snackbar.showSnackbar({
          message: "Hasło zostało zmienione",
          severity: "success"
        });
        resetForm();
      });
    },
    validationSchema: yup.object({
      newPassword: yup.string().required("Wpisz hasło"),
      newPasswordConfirm: yup
        .string()
        .oneOf([yup.ref("newPassword"), null], "Hasła muszą być takie same")
    })
  });

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle2" component="div" textAlign="center">
            Witaj, {user?.email} !
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            variant="scrollable"
            sx={{ "& .MuiTabs-flexContainer": { justifyContent: "center" } }}
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab label="Twoje opinie" value="opinions" />
            <Tab label="Zmień hasło" value="password" />
          </Tabs>
        </Grid>
        {tab === "opinions" && (
          <Grid item xs={12}>
            <Stack spacing={1}>
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
        )}
        {tab === "password" && (
          <Grid item xs={12} justifyContent="center" display="flex">
            <Stack spacing={2} width={300}>
              <TextField
                name="newPassword"
                label="Nowe hasło"
                type="password"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.newPassword)}
                helperText={formik.errors.newPassword}
                onBlur={formik.handleBlur}
              />
              <TextField
                name="newPasswordConfirm"
                label="Potwierdź nowe hasło"
                type="password"
                value={formik.values.newPasswordConfirm}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.newPasswordConfirm)}
                helperText={formik.errors.newPasswordConfirm}
                onBlur={formik.handleBlur}
              />
              <Button
                variant="contained"
                onClick={() => {
                  formik.submitForm();
                }}
              >
                Szukaj
              </Button>
            </Stack>
          </Grid>
        )}
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
