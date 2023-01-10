import React, { useContext, createContext } from 'react';
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    '0x4edaeFAa06c747e01a3886aa82763E78E92ADDb3'
  );

  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    'createCampaign'
  );

  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form) => {
    const data = await createCampaign([
      address, //owner
      form.title, //title
    ]);
  };
};
