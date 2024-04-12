import { useState } from "react";

const useSessionStorage = (key = "") => {
  const [storagedData, setStoragedData] = useState(() =>
    JSON.parse(sessionStorage.getItem(key))
  );

  const getInfoInStorage = () => {
    const InfoInStorage = JSON.parse(sessionStorage.getItem(key));
    if (InfoInStorage) {
      setStoragedData(InfoInStorage);
    }
  };

  const saveInfoInStorage = (newInfo = "") => {
    if (newInfo) {
      sessionStorage.setItem(key, JSON.stringify(newInfo));
      setStoragedData(newInfo);
    }
  };

  const deleteInfoInStorage = () => {
    sessionStorage.removeItem(key);
    setStoragedData(null);
  };

  return {
    storagedData,
    getInfoInStorage,
    saveInfoInStorage,
    deleteInfoInStorage,
  };
};

export default useSessionStorage;
