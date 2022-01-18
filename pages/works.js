import { Container, Heading, SimpleGrid, Divider, Text } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import svdThumb from '../public/static/images/svd-trade.png'
import tmlRenewalThumb from '../public/static/images/tml-renewal.jpg'

import Layout from '../components/layouts/article'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[ 1, 1, 2 ]} gap={6}>
                <Section>
                    <WorkGridItem id="svd-trade" title="Svd Trade" thumbnail={svdThumb}>
                        Website for the construction company "SVD TRADE".
                        <Text pt={3}>.Net Core 3.1, pure CSS, HTML, JS</Text>
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="tml-renewal" title="TML Renewal" thumbnail={tmlRenewalThumb}>
                    SPA Web application, pet project, over 30.000+ lines of code written. A large project on virtual states, their relationships and economies. A huge number of modules.
                        <Text pt={3}>Blazor, Blazorise UI, ABP Framework, MYSQL, EF Core, Bootstrap, SCSS, Signal R, TypeScript</Text>
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works