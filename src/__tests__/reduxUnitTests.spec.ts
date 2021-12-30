import { store } from '../redux/store'
import { deleteUser, addNewUser } from '../redux/userSlice'

test('Deletes a user from list with id', () => {
  let state = store.getState().user
  const initialUserCount = state.userList.length

  store.dispatch(deleteUser({ id: '1' }))
  state = store.getState().user

  expect(state.userList.length).toBeLessThan(initialUserCount)
})

test('Adds a new user', () => {
  let state = store.getState().user
  const initialUserCount = state.userList.length

  store.dispatch(
    addNewUser({
      id: '4',
      favoriteColor: 'salmon',
      username: 'Testers manual',
    })
  )
  state = store.getState().user
  const newlyAddedUser = state.userList.find((user) => user.id === '4')
  expect(newlyAddedUser?.favoriteColor).toBe('salmon')
  expect(newlyAddedUser?.username).toBe('Testers manual')
  expect(state.userList.length).toBeGreaterThan(initialUserCount)
})
