import React from "react";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { IoWaterOutline, IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

const GardenModal = ({ onClose, onPlantSelect, trees }) => {
  const handlePlantSelect = (plantIconUrl) => {
    onPlantSelect(plantIconUrl);
    onClose();
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalContent} onClick={onClose}>
          <div className={styles.mainInfo}>
            <h3 className={styles.modalTitle}>Aggiungi un nuovo albero</h3>
            <button className={styles.closeBtn} onClick={onClose}>
              <IoClose className={styles.closeIcon} />
            </button>
          </div>
          {/* <div className={styles.shop}>
              {plantsData.map((plant, index) => (
                <div key={index} className={styles.plant}>
                  <p className={styles.name}>{plant.name}</p>
                  <div className={styles.plantInfo}>
                    <img
                      width="50"
                      height="50"
                      src={plant.imageUrl}
                      alt={plant.name}
                    />
                    <div className={styles.resources}>
                      <p>
                        {" "}
                        <IoWaterOutline />2
                      </p>
                      <p>
                        {" "}
                        <IoWaterOutline />2
                      </p>
                    </div>
                  </div> */}
          {/* <button
                    className={styles.addBtn}
                    onClick={() => handlePlantSelect(plant.imageUrl)}
                  > */}
          {/* <FaCheck className={styles.addIcon} />
                  </button>
                </div>
              ))}
            </div> */}
          <div className={styles.shop}>
            {trees.map((tree, index) => (
              <div key={index} className={styles.plant}>
                <p className={styles.name}>{tree.name}</p>
                <button
                  className={styles.plantInfo}
                  onClick={() => handlePlantSelect(tree.sprite)}
                >
                  <img
                    width="50"
                    height="50"
                    src={tree.sprite}
                    alt={tree.name}
                  />
                  <div>
                    <p>{tree.cost.soil} soil</p>
                    <p>{tree.cost.seeds} seeds</p>
                    <p>{tree.cost.water} water</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GardenModal;
