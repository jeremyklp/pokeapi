import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userSlice = createSlice({
		name: 'user',
    initialState: "juan",
    reducers: {
        changeuser: (state, action)=> action.payload
    }
})


export const {changeuser}= userSlice.actions;
export default userSlice.reducer;