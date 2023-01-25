import { useAuth } from "context/auth";
import { useEffect, useState } from "react";
import { api } from "services/api";

export default function Me() {
  const { token } = useAuth();

  const [data, setData] = useState({});

  const fetchUserData = async () => {
    const response = await api.get("/users/me");

    setData(response.data);
  };

  useEffect(() => {
    if (token) {
      fetchUserData();
    }
  }, [token]);

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
