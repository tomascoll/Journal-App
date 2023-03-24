import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving:false,
    messageSave:'',
    notes:[],
    active:null,
    // active:{
    //     id:'abc123',
    //     title:'',
    //     body:'',
    //     date: 12345,
    //     imageUrls: []
    // }
  },
  reducers: {
    savingNewNote: (state) =>{
      state.isSaving = true

    },
    addNewEmptyNote: ( state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false
    },
    setActiveNote: (state, action) => {
      state.active = action.payload
      state.messageSave=``
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) =>{
      state.isSaving = true
      state.messageSave=``

    },
    updateNotes: (state, action) => {
      state.isSaving = false
      state.notes = state.notes.map(
        note =>{
          if( note.id === action.payload.id){
            return action.payload
          }
          return note
        }
      )
      state.messageSave=`${action.payload.title}, actualizada correctamente`
    },
    setPhotosToActiveNote: (state, action)=>{
      state.active.imageUrls = [...state.active.imageUrls,...action.payload]
      state.isSaving = false
    },
    deleteNoteById:(state, action) => {
      state.active = null
      state.notes = state.notes.filter(note => note.id !== action.payload)
    },
    clearNotesLogout:(state, action)=>{
      state.isSaving = false
      state.messageSave = ''
      state.notes = []
      state.active = null
    }
  },
});
// Action creators are generated for each case reducer function
export const { clearNotesLogout, setPhotosToActiveNote, savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNotes, deleteNoteById } = journalSlice.actions;
