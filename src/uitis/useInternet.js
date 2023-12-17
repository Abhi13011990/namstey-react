import { useEffect, useState } from "react";

const useOnlineStatus = () => {

  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    checkInternet();
  }, []);

  const checkInternet = () => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  };

  //Boolean value
  return onlineStatus;
};

export default useOnlineStatus;
