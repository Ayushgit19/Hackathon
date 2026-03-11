import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios"; 
import toast from "react-hot-toast"; 

import { AppContext } from "../context/AppContext";
import { SessionContext } from "../context/SessionContext";
import CreateSession from "./CreateSession";
const EditDraftPage = () => {
  const {
    setSessionTitle,
    setDescription,
    setSelectedImage,
    setSessionId,
  } = useContext(SessionContext);

  const { backendUrl } = useContext(AppContext);
  const { id: draftId } = useParams(); // /session/draft/:id → { id }

  useEffect(() => {
    const loadDraft = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/my-sessions/${draftId}`);
        if (res.data.success) {
          const draft = res.data.session;

          setSessionTitle(draft.title || "");
          setDescription(draft.description || "");
          setSelectedImage(draft.selectedImage || 0);
          setSessionId(draft._id);
        } else {
          toast.error("Draft not found");
        }
      } catch (err) {
        toast.error(err.message);
      }
    };

    loadDraft();
  }, [draftId]);

  return <CreateSession />;
};

export default EditDraftPage;
