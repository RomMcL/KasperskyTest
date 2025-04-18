import { createSlice } from "@reduxjs/toolkit";
import { IData_SnippetNews } from "../../types/news";
import data from "../../data/data.json"


interface DataNewsState{
    dataNews: IData_SnippetNews[];
    news: IData_SnippetNews[];
}

const initialState: DataNewsState = {
    dataNews: [...data],
    news: [],
}


export const newsSlice = createSlice({
    name: 'newsSlice',
    initialState,
    reducers: {
        changeNews: (state, action) => {
            state.news = action.payload;
        },
    }
});

export const { changeNews, } = newsSlice.actions;
export default newsSlice.reducer;