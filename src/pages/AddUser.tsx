// React
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Chakra UI
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react'

// Other libraries
import { v4 as uuidv4 } from 'uuid'

// App level
import { useAppDispatch } from '../hooks'
import { addNewUser } from '../redux/userSlice'

const AddUser = () => {
  const dispatch = useAppDispatch()

  const [username, setUsername] = useState<string | undefined>('')

  const colorsArr = [
    'Please select favorite color',
    'red',
    'orange',
    'blue',
    'purple',
  ]
  const [favoriteColor, setFavoriteColor] = useState<string | undefined>('')

  const handleOnSubmit = () => {
    if (username)
      dispatch(addNewUser({ favoriteColor, username, id: uuidv4() }))

    setFavoriteColor('')
    setUsername('')
  }

  return (
    <Flex
      height="50vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      color="black"
    >
      <Box>
        <FormControl isRequired>
          <FormLabel color="black">User Name</FormLabel>
          <Input
            width="23.375rem"
            height="2.5rem"
            borderRadius="0"
            borderColor="#888888"
            value={username}
            isRequired
            placeholder="Enter user name"
            onChange={(evt) => setUsername(evt.currentTarget.value)}
          />
          <FormLabel color="black" marginTop={4}>
            Favorite Color
          </FormLabel>
          <Select
            width="23.375rem"
            height="2.5rem"
            borderRadius="0"
            borderColor="#888888"
            isRequired
            value={favoriteColor}
            onChange={(evt) => setFavoriteColor(evt.target.value)}
          >
            {colorsArr.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </Select>
        </FormControl>

        <Button
          width="23.375rem"
          height="2.5rem"
          borderRadius="0"
          marginTop={8}
          backgroundColor="#FFC700"
          type="submit"
          onClick={handleOnSubmit}
        >
          Submit
        </Button>

        <Box d="flex" flexDirection="row" justifyContent="center" marginTop={8}>
          <Link to="/userlist">View User List</Link>
        </Box>
      </Box>
    </Flex>
  )
}

export default AddUser
