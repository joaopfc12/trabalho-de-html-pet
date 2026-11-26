import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { buscarPets, cadastrarPet } from '../services/api';
import { filtrarPorBusca } from '../utils/filtros';


export function usePets({ especie = '', porte = '', busca = '' } = {}) {
  const consulta = useQuery({
    queryKey: ['pets', especie, porte],
    queryFn: () => buscarPets({ especie, porte }),
  });

  const pets = consulta.data ? filtrarPorBusca(consulta.data, busca) : undefined;

  return { ...consulta, pets };
}


export function useCadastrarPet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cadastrarPet,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['pets'] }),
  });
}
