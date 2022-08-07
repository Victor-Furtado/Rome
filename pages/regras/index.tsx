import { Tabs } from '@mantine/core';
import { NextPage } from 'next';
import { GiMagicSwirl, GiRuleBook, GiSwordClash } from 'react-icons/gi'
import Combate from './combate';
import RegrasGerais from './geral';
import Magia from './magia';

const Page: NextPage = () => {
    return (
        <Tabs variant="outline" radius="lg" defaultValue='General Rules'>
            <Tabs.List>
                <Tabs.Tab value="General Rules" icon={<GiRuleBook />}>Regras Gerais</Tabs.Tab>
                <Tabs.Tab value="Magic" icon={<GiMagicSwirl />}>Magia</Tabs.Tab>
                <Tabs.Tab value="Combat" icon={<GiSwordClash />}>Combate</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="General Rules" pt="xs">
                <RegrasGerais />
            </Tabs.Panel>

            <Tabs.Panel value="Magic" pt="xs">
                <Magia />
            </Tabs.Panel>

            <Tabs.Panel value="Combat" pt="xs">
                <Combate />
            </Tabs.Panel>
        </Tabs>
    );
}

export default Page