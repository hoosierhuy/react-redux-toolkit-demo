// Chakra UI
import { Button, Flex, Box } from '@chakra-ui/react'

// Libraries
import { Link } from 'react-router-dom'

/*
  Not part of the spec, but useful for navigating.
*/
const NavBar = () => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      as="nav"
      p={4}
      mx="auto"
      maxWidth="1150px"
    >
      <Box>
        <Link to="/userlist">
          <Button
            fontWeight={['medium', 'medium', 'medium']}
            fontSize={['xs', 'sm', 'lg', 'xl']}
            variant="ghost"
            _hover={{ bg: 'rgba(0,0,0,.2)' }}
            padding="1"
            color="black"
            letterSpacing="0.65px"
          >
            User Favorite Color App
          </Button>
        </Link>
      </Box>

      <Box>
        <Link to="/userlist">
          <Button
            fontWeight={['medium', 'medium', 'medium']}
            fontSize={['xs', 'sm', 'lg', 'xl']}
            variant="ghost"
            _hover={{ bg: 'rgba(0,0,0,.2)' }}
            p={[1, 4]}
            color="black"
          >
            Users List
          </Button>
        </Link>
        <Link to="/add-new-user">
          <Button
            fontWeight={['medium', 'medium', 'medium']}
            fontSize={['xs', 'sm', 'lg', 'xl']}
            variant="ghost"
            _hover={{ bg: 'rgba(0,0,0,.2)' }}
            p={[1, 4]}
            color="black"
          >
            Add User
          </Button>
        </Link>
      </Box>
    </Flex>
  )
}

export default NavBar
