import { Button, Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react' 
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" background={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={5}>
                Hello, i'm Pavel Osipov, a full-stack developer based in Moscow. 
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Osipov Pavel
                    </Heading>
                    <p>Web developer, ( C#, Blazor, React, Next.js, .net core ) / Designer</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" maxHeight="100px" display="inline-block" borderRadius="50%"
                    src="/static/images/iam.jpg" alt="Profile images" />
                </Box>
            </Box>


            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>I am a second-year student of a technical university in Moscow, RTU MIREA, since the age of 14 I have been learning programming and mastering the basics of the web. Now I already have a fairly large number of skills in my arsenal, but I will always be ready to learn something new. Technology never stands still and I am with them.</Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <Box my={4}>
                    <BioSection>
                        <BioYear>2002</BioYear>
                        Born in the Moscow region, Odintsovo
                    </BioSection>
                    <BioSection>
                        <BioYear>2014</BioYear>
                        Started learning programming using examples of simple scripting programming languages ​​( Pawn, Lua )
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        Getting Started with .Net foundation ( .net framework, .net core, C# )
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        First freelance order to create a website
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Graduated from the suburban school and passed the exams
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Admission to a technical university in Moscow
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Start learning c++, Java, Typescript, React
                    </BioSection>
                </Box>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I like
                </Heading>
                <Paragraph>Music, good movies, good food, awesome company of friends, design, sports and problem programming problems.</Paragraph>
            </Section>
        </Container> 
        </Layout>
    )
}

export default Page