import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { Store } from "../utils/store";

const Shipping = () => {
  const router = useRouter();
  const {
    state: { userInfo },
  } = useContext(Store);
  useEffect(() => {
    if (!userInfo) {
      router.push("/login?redirect=/shipping");
    }
  }, []);
  return (
    <div>
      <h1>Shipping page</h1>
    </div>
  );
};

export default Shipping;
