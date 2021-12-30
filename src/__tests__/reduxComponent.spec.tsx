import { render, screen, fireEvent, RenderResult } from '@testing-library/react'

import { Provider } from 'react-redux'

import { MemoryRouter } from 'react-router-dom'

import UserInfo from '../components/UserInfo'
import AddUser from '../pages/AddUser'

import { store } from '../redux/store'
import { UserState } from '../types'

const renderUser = (user: UserState): RenderResult =>
  render(
    <Provider store={store}>
      <UserInfo
        username={user.username}
        favoriteColor={user.favoriteColor}
        id={user.id}
      />
    </Provider>
  )

const renderAddUser = (): RenderResult =>
  render(
    <Provider store={store}>
      <MemoryRouter>
        <AddUser />
      </MemoryRouter>
    </Provider>
  )

const getAUser = (userId: string): UserState => {
  const user = store.getState().user.userList.find((user) => user.id === userId)
  expect(user).not.toBeUndefined()
  return user as UserState
}

test('Renders UserInfo', () => {
  const user = getAUser('1')
  const { asFragment } = renderUser(user)
  expect(asFragment()).toMatchSnapshot()
})

test('AddUser page', () => {
  renderAddUser()
  const initialLength = store.getState().user.userList.length

  let usernameInput = screen.getByPlaceholderText('Enter user name')

  expect(usernameInput).toBeInTheDocument()

  fireEvent.change(usernameInput, {
    target: { value: 'Please select favorite color' },
  })

  let submitButton = screen.getByText('Submit')

  fireEvent.click(
    submitButton,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  )

  let user = store.getState().user.userList.length
  expect(user).toBeGreaterThan(initialLength)
})
