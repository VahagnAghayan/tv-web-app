import { useEffect } from "react";

export const useMount = (effect: any) => {
  return useEffect(effect, []);
};
