import { configureStore } from '@reduxjs/toolkit'
import user from "./slices/User.slice"

export default configureStore({
  reducer: {
      user
	}
})