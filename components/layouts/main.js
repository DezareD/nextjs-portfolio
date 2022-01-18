import Head from 'next/head'
import Navbar from '../navbar.js'
import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import VoxelMill from '../voxel-mill'

const Main = ({ children, router }) =>
{
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=devide-width, initial-scale=1" />
                <title>Osipov Pavel - portfolio</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <VoxelMill />
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main