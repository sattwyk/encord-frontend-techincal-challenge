import { useState } from "react";
export function useActive(): { images: boolean; predict: boolean; activeImages: () => void; activePredict: () => void; } {
    const [active, setActive] = useState({
        images: true,
        predict: false,
    });

    const activeImages = () => setActive({predict: false, images: true});
    const activePredict = () => setActive({predict: true, images: false});


    return {images: active.images, predict: active.predict, activeImages, activePredict}
}