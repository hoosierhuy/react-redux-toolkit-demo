// Chakra UI
import { Button, Box, Heading, Text } from '@chakra-ui/react'

// App Level
import { useAppDispatch } from '../hooks'
import { deleteUser } from '../redux/userSlice'

const UserInfo = ({
  username,
  favoriteColor,
  id,
  ...rest
}: {
  username: string | undefined
  favoriteColor: string | undefined
  id: string
}) => {
  const dispatch = useAppDispatch()

  return (
    <Box
      p={3}
      height="4rem"
      width="23.375rem"
      justifyContent="space-between"
      d="flex"
      borderWidth="1px"
      borderColor={favoriteColor}
      {...rest}
    >
      <Box d="flex" flexDirection="column">
        <Text fontSize="l">{username}</Text>
      </Box>

      <Button
        colorScheme="black"
        backgroundColor="gray.200"
        variant="outline"
        borderRadius="0"
        onClick={() => dispatch(deleteUser({ id }))}
      >
        Delete
      </Button>
    </Box>
  )
}

export default UserInfo
