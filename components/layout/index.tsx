import { NextPage } from 'next';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import { FaGithub } from 'react-icons/fa'
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    MediaQuery,
    Burger,
    useMantineTheme,
    Image,
    Title,
    Button,
    Center,
    Text,
} from '@mantine/core';

import { NavItem, NavList } from './navList';

interface IProps {
    children: ReactNode;
}

export const Layout: NextPage<IProps> = ({ children }) => {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} style={{ backgroundColor: theme.colors.dark[5] }}>
                    <Navbar.Section grow mt="xs" style={{ overflow: 'auto' }}>
                        <NavList>
                            <NavItem href='/'>INTRODUÇÃO</NavItem>
                            <NavItem href='/linha-do-tempo'>LINHA DO TEMPO</NavItem>
                            <NavItem href='/legislacao'>CÓDIGO DE LEIS</NavItem>
                            <NavItem href='/sociedade'>SOCIEDADE ROMANA</NavItem>
                            <NavItem href='/outros-povos'>OUTROS POVOS</NavItem>
                            <NavItem href='/regras'>REGRAS DE JOGO</NavItem>
                            <NavItem href='/personagem'>CRIAÇÂO DE PERSONAGEM</NavItem>
                            <NavItem href='/consultas'>CONSULTAS E TABELAS</NavItem>
                            <NavItem href='/galerias'>MAPAS E GALERIA</NavItem>
                        </NavList>
                    </Navbar.Section>
                    <Navbar.Section>
                        <Center>
                            <Button leftIcon={<FaGithub size={14} />}>
                                Vem fazer parte!
                            </Button>
                        </Center>
                    </Navbar.Section>
                </Navbar >
            }
            footer={
                <Footer height={60} p="md" style={{ backgroundColor: theme.colors.dark[6] }}>
                    <Title order={4}>Feito com 💚 por Victor Furtado</Title>
                </Footer>
            }
            header={
                <Header height={70} p="md" style={{ backgroundColor: theme.colors.dark[6] }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', height: '100%' }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>
                        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                            <Image
                                height={64}
                                fit="contain"
                                radius="xl"
                                src="/images/SPQR.png"
                                alt="SPQR"
                            />
                        </MediaQuery>
                        <Title order={1}>ROMA RPG</Title>
                    </div>
                </Header>
            }
        >
            <main style={{ marginLeft: 16 }}>
                {children}
            </main>
        </AppShell >
    );
}