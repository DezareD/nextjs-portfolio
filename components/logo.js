import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    opacity: .75;
    transition: .2s;

    &:hover img {
        opacity: 1;
    }
`

const Logo = () => {
    const footPrintImage = `/static/images/logotype${useColorModeValue('', '-dark')}.png`;

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={footPrintImage} width={20} height={20} alt="logotype" />
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontFamily='M PLUS Rounded 1c'
                    fontWeight="bold" ml={3}>Osipov Pavel</Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo;