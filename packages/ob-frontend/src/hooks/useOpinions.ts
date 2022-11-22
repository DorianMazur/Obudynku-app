import { useQuery } from 'react-query';
import axios from 'axios';
import { Opinion, OpinionRequest, OpinionStatistic } from '@/types/Opinion';
import useOpinionStore from '@/store/useOpinionStore';
import { useState, useEffect } from 'react';
import useUserStore from '@/store/useUserStore';

export const getLatestOpinions = async () => {
  const { data } = await axios.get<Opinion[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/opinion/latest`
  );
  return data;
};

export const getMyOpinions = async (token?: string) => {
  const response = await axios.get<Opinion[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/opinion/my`,
    { headers: { Authorization: 'Bearer ' + token } }
  );
  return response.data;
};

export const getMyOpinion = async (id: string, token?: string) => {
  const response = await axios.get<Opinion>(
    `${process.env.NEXT_PUBLIC_API_URL}/opinion/${id}`,
    { headers: { Authorization: 'Bearer ' + token } }
  );
  return response.data;
};

export const createOpinion = async (data: OpinionRequest, token?: string) => {
  const response = await axios.post<void>(
    `${process.env.NEXT_PUBLIC_API_URL}/opinion/new`,
    data,
    { headers: { Authorization: 'Bearer ' + token } }
  );
  return response.status === 201;
};

export const editOpinion = async (
  data: OpinionRequest & { id: string },
  token?: string
) => {
  const response = await axios.post<Opinion>(
    `${process.env.NEXT_PUBLIC_API_URL}/opinion/${data.id}`,
    data,
    { headers: { Authorization: 'Bearer ' + token } }
  );
  return response.status === 201;
};

export const deleteOpinion = async (id: string, token?: string) => {
  const response = await axios.delete<void>(
    `${process.env.NEXT_PUBLIC_API_URL}/opinion/${id}`,
    { headers: { Authorization: 'Bearer ' + token } }
  );
  return response.status === 200;
};

export const getOpinionStatistics = async () => {
  const response = await axios.get<OpinionStatistic[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/opinion/statistics`
  );
  return response.data.map((item) => ({
    ...item,
    localization: parseFloat(Number(item.localization).toFixed(2)),
    internet: parseFloat(Number(item.internet).toFixed(2)),
    safety: parseFloat(Number(item.safety).toFixed(2)),
    construction: parseFloat(Number(item.construction).toFixed(2)),
    acustic: parseFloat(Number(item.acustic).toFixed(2)),
  }));
};

export const useOpinion = () => {
  const {
    newOpinionLocation,
    setNewOpinionLocation,
    newOpinionRates,
    setNewOpinionRate,
    newOpinionSummary,
    setNewOpinionSummary,
    clearNewOpinion,
  } = useOpinionStore();
  const { user } = useUserStore();

  const [hasHydrated, setHasHydrated] = useState<boolean>(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  return {
    newOpinionLocation: hasHydrated ? newOpinionLocation : undefined,
    newOpinionRates: hasHydrated ? newOpinionRates : undefined,
    newOpinionSummary: hasHydrated ? newOpinionSummary : undefined,
    setNewOpinionLocation,
    setNewOpinionRate,
    setNewOpinionSummary,
    getLatestOpinions,
    clearNewOpinion,
    getOpinionStatistics,
    getMyOpinions: () => getMyOpinions(user?.token),
    createOpinion: (opinion: OpinionRequest) =>
      createOpinion(opinion, user?.token),
    deleteOpinion: (id: string) => deleteOpinion(id, user?.token),
    getMyOpinion: (id: string) => getMyOpinion(id, user?.token),
    editOpinion: (opinion: OpinionRequest & { id: string }) =>
      editOpinion(opinion, user?.token),
  };
};
