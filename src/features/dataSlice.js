import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    artId: 10205,
    apiData: {}

}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        loadData: (state, { payload}) => {
            state.apiData = payload;
        },
        nextImage: state => {
            state.artId++;
        },
        prevImage: state => {
            state.artId--;
        },
        setArtId: (state, {payload}) => {
            state.artId = payload;
        },
        reset: () => {
            return initialState
        }    
    }   
});

const getApiUrl = artId => `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`

export const {
    loadData,
    nextImage,
    prevImage,
    setArtId,
    reset} = dataSlice.actions

export const fetchData =() => {
    const dataThunk = async (dispatch, getState) => {
        debugger
        const stateData = getState();
        const { data } = stateData;
        const {artId} = data;
        const response = await fetch( getApiUrl(artId) );
        const json = await response.json();
        dispatch(loadData(json))  
    }
    return dataThunk 
}



export default dataSlice.reducer;




