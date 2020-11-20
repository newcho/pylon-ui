import React, { useState } from "react";
import { useDispatch } from "react-redux";
import pageActions from "../../redux/page/actions";

import { toast } from "react-toastify";

import { FDI_VAULT } from "../../helpers/fdiVault/constants";
import { PYLON_VAULT } from "../../helpers/pylonVault/constants";

import "./main.scss";
import cx from "classnames";

const Main = () => {
  const vaultList = [...FDI_VAULT, ...PYLON_VAULT];
  const [idx, setIdx] = useState(-1);
  const [amount, setAmount] = useState(0);
  const [allowance, setAllowance] = useState(0);
  const dispatch = useDispatch();
  const handleSelectToken = (idx) => {
    setIdx(idx);
    setAllowance(0);
    console.log(idx);
    dispatch(
      pageActions.getAllowance(
        vaultList[idx].address,
        vaultList[idx].token1,
        (allowance) => setAllowance(allowance)
      )
    );
  };
  const handleApprove = () => {
    dispatch(
      pageActions.approveToken(vaultList[idx].token1, vaultList[idx].address, callbackApprove)
    )
  };
  const handleSend = () => {
    if (idx === -1) {
      toast.error("Select a vault");
      return;
    }

    if (amount > 0)
      dispatch(
        pageActions.sendReward(vaultList[idx].address, amount, callbackSend)
      );
    else toast.error("Invaild amount");
  };

  const callbackApprove = (status) => {
    if (status) {
      dispatch(
        pageActions.getAllowance(
          vaultList[idx].address,
          vaultList[idx].token1,
          (allowance) => setAllowance(allowance)
        )
      );
    } else {
      toast.error("Approve token failed");
    }
  }
  const callbackSend = (status) => {
    if (status) {
      toast.success("Success");
    } else {
      toast.error("Failed");
    }
  };

  return (
    <div className="main-container">
      <div className="main-wrapper">
        <div className="vault-selector">
          {vaultList.map((item, index) => (
            <div
              key={item.tokenName}
              role="button"
              className={cx("vault-item", { active: index === idx })}
              onClick={(e) => handleSelectToken(index)}
            >
              <img
                src={require(`../../assets/images/icons/${item.iconName}`)}
                width="30"
                alt=""
              />
              {` `}
              <div className="title">{item.title}</div>
            </div>
          ))}
        </div>{" "}
        {idx >= 0 && (
          <div className="reward-section">
            <div className="vault-item">
              <img
                src={require(`../../assets/images/icons/${vaultList[idx].iconName}`)}
                width="30"
                alt=""
              />
              {` `}
              <div className="title">{vaultList[idx].title}</div>
            </div>

            <input
              type="text"
              value={amount}
              placeholder="Amount"
              onChange={(e) => setAmount(e.target.value)}
            />
            {allowance == 0 ? (
              <button onClick={(e) => handleApprove()}>Approve PYLON</button>
            ) : (
              <button onClick={(e) => handleSend()}>Send Reward</button>
            )}
          </div>
        )}
        {idx == -1 && (<h1>=== Welcome ===</h1>)}
      </div>
    </div>
  );
};

export default Main;
