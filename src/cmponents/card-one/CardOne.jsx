import { useState } from "react";

const CardOne = () => {
  const [mouseOver, setMouseOver] = useState(false);
  const [showFirstImage, setShowFirstImage] = useState(false);

  const style = {
    display: mouseOver ? "none" : "block",
  };
  const imge = {
    display: mouseOver ? "flex" : "none",
    cursor: "pointer",
  };
  const handelMouseEnter = () => {
    setMouseOver(true);
  };
  const handelMouseover = () => {
    setMouseOver(false);
  };
  const handelMOuseImagefirst = () => {
    setShowFirstImage(true);
  };
  const handelMOuseImagesecond = () => {
    setShowFirstImage(false);
  };
  console.log(showFirstImage);

  return (
    <div
      className="w-[24%] h-[300px]"
      onMouseEnter={handelMouseEnter}
      onMouseLeave={handelMouseover}
    >
      <img
        src={
          showFirstImage
            ? "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fac1032e-f16f-43fe-901d-cb9319eb0b01/zenvy-ask%C4%B1l%C4%B1-hafif-destekli-dolgulu-spor-s%C3%BCtyeni-t1Jgp1.png"
            : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/55c7fe68-74c2-406b-bea8-b8891b04e783/zenvy-ask%C4%B1l%C4%B1-hafif-destekli-dolgulu-spor-s%C3%BCtyeni-t1Jgp1.png"
        }
        alt=""
      />
      <div className="py-2">
        <h2 style={style}>Nike Zenvy Strap</h2>

        <div
          className="flex justify-between items-center w-[40%] h-[55px] "
          style={imge}
        >
          <img
            className="w-[49%] h-full "
            onMouseEnter={handelMOuseImagefirst}
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fac1032e-f16f-43fe-901d-cb9319eb0b01/zenvy-ask%C4%B1l%C4%B1-hafif-destekli-dolgulu-spor-s%C3%BCtyeni-t1Jgp1.png"
            alt=""
          />
          <img
            className="w-[49%] h-full"
            onMouseEnter={handelMOuseImagesecond}
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/55c7fe68-74c2-406b-bea8-b8891b04e783/zenvy-ask%C4%B1l%C4%B1-hafif-destekli-dolgulu-spor-s%C3%BCtyeni-t1Jgp1.png"
            alt=""
          />
        </div>
        <p>Sport Bra</p>
        <p>5 Colors</p>
        <p>200$</p>
      </div>
    </div>
  );
};

export default CardOne;
