export const getImageUrl = (imageName: string, aspectRatio: number) => {
  return `https://res.cloudinary.com/dhrg3xz0y/image/upload/q_auto/f_auto/ar_${getAR(
    aspectRatio
  )},c_fill/c_scale,w_auto,dpr_auto/${imageName}`;
};

const getAR = Ar => {
  if (Ar < 1) {
    return "2:3";
  } else if (Ar === 1) {
    return "1:1";
  } else if (Ar > 1 && Ar < 1.5) {
    return "4:3";
  } else if (Ar >= 1.5 && Ar < 2) {
    return "16:9";
  } else if (Ar >= 2 && Ar < 2.5) {
    return "21:9";
  } else if (Ar >= 2.5 && Ar < 3) {
    return "24:9";
  } else {
    return "32:9";
  }
};
