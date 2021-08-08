import React, { useCallback } from "react";
import { Bear } from "types/Bear";
import styles from "./index.module.css";

interface BearSelectionProps {
    currentBear: Bear | null;
}

/**
 * Show the currently selected bear. This is the bear that was just
 * entered in the input box
 */
export const BearSelection: React.FC<BearSelectionProps> = ({
    currentBear,
}) => {
    // Cut the hash down into a sorter string
    const formatHash = useCallback(
        (hash: string): string => {
            return `${hash.substr(0, 6)}...${hash.substr(-4)}`;
        },
        [currentBear]
    );

    return (
        <div className={styles.bearSelection}>
            {currentBear ? "You are a" : ""}
            <span className={styles.bearName}>
                {currentBear ? currentBear.name : ""}
            </span>
            <span className={styles.bearHash}>
                {currentBear ? formatHash(currentBear.hash) : ""}
            </span>
        </div>
    );
};
