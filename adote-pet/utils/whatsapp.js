import { Alert, Linking } from 'react-native';


export function formatarNumero(contato) {
  const digitos = String(contato || '').replace(/\D/g, '');
  if (!digitos) return '';

  if (digitos.length === 10 || digitos.length === 11) return `55${digitos}`;
  return digitos;
}

export function montarMensagem(pet) {
  const abrigo = pet.abrigo ? ` do ${pet.abrigo}` : '';
  return (
    `Olá! Vi o(a) ${pet.nome}${abrigo} no app Adote um Pet ` +
    `e tenho interesse em adotar. Ele(a) ainda está disponível?`
  );
}

export async function abrirWhatsApp(pet) {
  const numero = formatarNumero(pet.contato);

  if (!numero) {
    Alert.alert('Sem contato', 'Este pet ainda não tem um número de contato cadastrado.');
    return false;
  }

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(montarMensagem(pet))}`;

  try {
    await Linking.openURL(url);
    return true;
  } catch {
    Alert.alert('Erro', 'Não foi possível abrir o WhatsApp.');
    return false;
  }
}
