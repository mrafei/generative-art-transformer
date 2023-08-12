import ImageIcon from "@/components/Icons/ImageIcon";
import Input from "@/components/Input";
import { useCallback, useState } from "react";
import Button from "@/components/Button";
import type { FC } from "react";
import type { ImageTransformHook } from "@/hooks/useImageTransform";
import { toast } from "react-toastify";

type DashboardCanvasProps = Pick<
  ReturnType<ImageTransformHook>,
  "image" | "setImage" | "transformedImage" | "setTransformedImage"
>;
const DashboardCanvas: FC<DashboardCanvasProps> = (props) => {
  const { image, setImage, transformedImage, setTransformedImage } = props;
  const [tempImage, setTempImage] = useState("");
  const renderedImage = transformedImage || image;

  const checkImage = useCallback(
    (imageSrc: string) => {
      setTempImage(imageSrc);
      const img = new Image();
      img.onload = () => {
        setImage(imageSrc);
        setTempImage("");
      };
      img.onerror = () =>
        toast("Inserted url is not a valid image url.", {
          toastId: "image-url-error",
          type: "error",
        });
      img.src = imageSrc;
    },
    [setImage],
  );
  return (
    <div className="flex p-10 justify-center items-center flex-1 bg-neutral-200">
      {renderedImage ? (
        <div className="flex flex-col gap-3 items-center justify-center">
          <img
            src={renderedImage}
            alt="uploaded-image"
            className="rounded-lg overflow-hidden"
          />
          <div className="flex justify-center gap-5 items-center w-full">
            {transformedImage ? (
              <Button onClick={() => setTransformedImage(null)}>reset</Button>
            ) : null}
            <Button
              onClick={() => {
                setImage(null);
                setTransformedImage(null);
              }}
            >
              clear
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 items-center justify-center bg-white px-10 pt-10 pb-5 rounded-lg">
          <ImageIcon />
          <p>Insert your image url here</p>
          <Input value={tempImage} onChange={setTempImage} />
          <Button disabled={!tempImage} onClick={() => checkImage(tempImage)}>
            open
          </Button>
        </div>
      )}
    </div>
  );
};

export default DashboardCanvas;
