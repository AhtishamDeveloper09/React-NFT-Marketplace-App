import { useState } from "react";

export function useNFTCards() {
  const [imageLoading, setImageLoading] = useState(false);
  const handleImageLoading = () => {
    setImageLoading(true);
  };
  return { imageLoading, handleImageLoading };
}
