import { Image, Stack, Text, Title } from '@mantine/core';
import { NextPage } from 'next';

const Page: NextPage = () => {
    return (
        <Stack>
            <Title order={1}>O povo romano</Title>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <Image src='/images/CHINA.png' width={200} />
                <Stack>
                    <Text>

                    </Text>
                </Stack>
            </div>
        </Stack>
    );
}

export default Page