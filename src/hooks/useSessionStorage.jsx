import { useState } from "react";

const useSessionStorage = (key = "") => {
  const [storagedData, setStoragedData] = useState(
    () => JSON.parse(sessionStorage.getItem(key)) || null
  );

  const saveInfoIntoStorage = (newInfo = null) => {
    if (newInfo) {
      sessionStorage.setItem(key, JSON.stringify(newInfo));
      setStoragedData(newInfo);
    }
  };

  const deleteInfoInStorage = () => {
    sessionStorage.removeItem(key);
    setStoragedData(null);
  };

  const getInfoFromStorage = () => {
    const InfoInStorage = JSON.parse(sessionStorage.getItem(key));
    setStoragedData(InfoInStorage);
  };

  return {
    storagedData,
    saveInfoIntoStorage,
    deleteInfoInStorage,
    getInfoFromStorage,
  };
};

export default useSessionStorage;
