import { useState } from "react";

export const GalleryPicture = (props: any) => {
   const [numberPicture, setNumberPicture] = useState(1);

   return (
      <div style={{ display: "flex" }}>
         <button
            onClick={() => setNumberPicture(numberPicture === 1 ? props.count : numberPicture - 1)}>
            {"<"}
         </button>
         {props.renderPicture(numberPicture)}
         <button
            onClick={() => setNumberPicture(numberPicture === props.count ? 1 : numberPicture + 1)}>
            {">"}
         </button>
      </div>
   );
};

const PictureItem = (props: any) => {
   return <img src={props.url} width={"100%"} />;
};

GalleryPicture.Item = PictureItem;
