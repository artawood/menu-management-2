import React from "react";
import styles from "./NotLiveOverlay.module.css";
import { Warning } from "../Icons";

const NotLiveOverlay = () => (
  <div className={styles.overlay}>
    <h2 className={`mt-2 ${styles.overlayText}`}>
      <Warning height="20" /> &nbsp; Not live with ItsaCheckmate
    </h2>
  </div>
);

export default NotLiveOverlay;
