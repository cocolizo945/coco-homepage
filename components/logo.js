import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import FootprintIcon from './icons/footprint'
import Rigoberto from './icons/rigo'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
        <Rigoberto viewBox="0 0 737 754"
        width="30"
        height="30"/>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Eduardo Mendez Miranda
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo
