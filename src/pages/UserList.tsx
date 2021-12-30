// Chakra UI
import { Box, Flex, Stack } from '@chakra-ui/react'

// Libraries
import { Link } from 'react-router-dom'

// App Level
import { useAppSelector } from '../hooks'
import UserInfo from '../components/UserInfo'

const UserList = () => {
  const userList = useAppSelector((state) => state.user.userList)
  console.log(userList)

  return (
    <Flex
      height="50vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box color="black" px="1rem" py="1rem">
        <Stack spacing={5}>
          {userList.map((user) => (
            <UserInfo
              key={user.id}
              username={user.username}
              favoriteColor={user.favoriteColor}
              id={user.id}
            />
          ))}
        </Stack>
      </Box>

      <Box d="flex" flexDirection="row" justifyContent="center">
        <Link to="/add-new-user">Add Users</Link>
      </Box>
    </Flex>
  )
}

export default UserList
