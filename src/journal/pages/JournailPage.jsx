import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournailPage = () => {
  const dispatch = useDispatch();

  const { isSaving, active } = useSelector((state) => state.journal);
  
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {active ? <NoteView /> : <NothingSelectedView/>}
      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size="larger"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined
          sx={{
            fontSize: 30,
          }}
        />
      </IconButton>
    </JournalLayout>
  );
};
