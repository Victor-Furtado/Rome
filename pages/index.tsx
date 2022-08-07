import { Image, Stack, Text, Title } from '@mantine/core';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Stack>
      <Title order={1}>O império romano</Title>
      <Text>
        Um dos impérios mais reverenciados pelos povos do ocidente, Nunca antes -
        nem depois - tantas nações, povos e culturas diferentes estiveram unidas
        sob um mesmo governo direto. Roma é legendária pelo poderio de suas legiões, sua
        nobreza decadente e os esportes bárbaros e sangrentos que divertiam seu povo.
        O mundo de Roma é rico em aventura, intriga e história.
      </Text>
      <Text>
        Roma era o nome tanto do império quanto da cidade que o gerou. Para a maioria de seus cidadãos os
        dois eram a mesma coisa. &quot;Todos os caminhos levam a Roma&quot; era uma verdade literal; as inúmeras vias
        pavimentadas que ligavam o Império tinham a cidade Imperial como destino final.
        Grandes batalhas, intrigas na corte e combates de vida ou morte na arena esperam por você no maior império que o mundo já conheceu.
      </Text>
      <Image sx={(theme) => ({ filter: '' })} alt='Arte de Roma' src='/images/Rome.png' />
    </Stack>
  );
}

export default Home