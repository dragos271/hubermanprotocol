"use client";
import styles from "../styles/AudioPlayer.module.css";

export default function AudioPlayer({ src, label = "NSDR Session" }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.label}>{label}</div>
      <audio className={styles.audio} controls preload="none">
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}