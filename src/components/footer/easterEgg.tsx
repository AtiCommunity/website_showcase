"use client";

import { akronim, honk } from "@/styles/fonts";
import { GiCrownedSkull } from "react-icons/gi";

const showModal = () => {
    const easteregg = document.getElementById("easteregg") as HTMLDialogElement;
    if (easteregg) {
        const infiniteCloseButton = document.getElementById(
            "infinite-close-button"
        );
        if (infiniteCloseButton) {
            infiniteCloseButton.style.display = "none";
        }

        const closeButton = document.getElementById("close-button");
        if (closeButton) {
            closeButton.style.display = "block";
        }

        easteregg.showModal();
    }
};

const closeModal = () => {
    const closeButton = document.getElementById("close-button");
    if (closeButton) {
        closeButton.style.display = "none";
    }

    const infiniteCloseButton = document.getElementById(
        "infinite-close-button"
    );
    if (infiniteCloseButton) {
        infiniteCloseButton.style.display = "block";
    }
};

const EasterEgg = () => {
    return (
        <>
            <dialog id="easteregg" className="modal">
                <div className="modal-box">
                    <button
                        id="close-button"
                        className="btn btn-ghost btn-circle absolute right-2 top-2"
                        onClick={closeModal}
                    >
                        ✕
                    </button>
                    <button
                        id="infinite-close-button"
                        className="btn btn-ghost btn-circle absolute right-2 top-2 hidden"
                    >
                        <span className="loading loading-infinity loading-md"></span>
                    </button>
                    <h3 className={`${honk.className} text-8xl`}>Oh no!</h3>
                    <p>
                        You&apos;ve found my easter egg! I&apos;m lost!
                        NOOOOOOoooooo... <br /> But good job ! Try to leave now.
                    </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button></button>
                </form>
            </dialog>
            <button onClick={showModal}>
                <GiCrownedSkull fontSize={50} />
            </button>
            <p className={`${akronim.className} text-3xl`}>AtiCommunity</p>
        </>
    );
};

export default EasterEgg;
