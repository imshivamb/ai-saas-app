"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("71112a5b-0bb2-4bfc-af3f-91d51ad41fff");
  }, []);

  return null;
};
