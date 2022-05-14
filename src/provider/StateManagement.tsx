import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import config from "../config";
import store from "../store/redux/store";

type Props = {
  children: ReactNode;
};

const { stateManagement } = config;

function RecoilProvider({ children }: Props) {
  if (stateManagement === "redux") {
    return <Provider store={store}>{children}</Provider>;
  }

  return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilProvider;
