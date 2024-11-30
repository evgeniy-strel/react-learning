import React, { useState } from "react";
import { GalleryPicture } from "./GalleryPicture";

const IMG_SOURCES = Array(6)
   .fill(0)
   .map((value, index) => `RenderProps/${index + 1}.jpg`);

const RenderProps = () => {
   return (
      <div>
         <h2>Render Props</h2>
         <GalleryPicture
            count={6}
            renderPicture={(numberPicture: number) => (
               <GalleryPicture.Item url={IMG_SOURCES[numberPicture - 1]} />
            )}
         />
      </div>
   );
};

export default RenderProps;
