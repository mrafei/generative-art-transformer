import ImageIcon from "@/components/Icons/ImageIcon";
import Input from "@/components/Input";
import { useCallback, useState } from "react";
import Button from "@/components/Button";
import { toast } from "react-toastify";
import Link from "next/link";
import { ART_ROUTE } from "@/constants/routes";
import {
  IMAGE_CLEAR_BUTTON_ID,
  IMAGE_INPUT_TEST_ID,
  IMAGE_SUBMIT_BUTTON_ID,
} from "@/constants/tests";
import type { FC } from "react";
import type { ImageTransformHook } from "@/hooks/useImageTransform";

type DashboardCanvasProps = Pick<
  ReturnType<ImageTransformHook>,
  "image" | "setImage" | "transformedImage" | "setTransformedImage"
>;
const DashboardCanvas: FC<DashboardCanvasProps> = (props) => {
  const { image, setImage, transformedImage, setTransformedImage } = props;
  const [tempImage, setTempImage] = useState("");
  const renderedImage = transformedImage?.url || image;

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
              <>
                <Link target="_blank" href={ART_ROUTE(transformedImage.id)}>
                  <Button>share</Button>
                </Link>
                <Button onClick={() => setTransformedImage(null)}>reset</Button>
              </>
            ) : null}
            <Button
              data-testid={IMAGE_CLEAR_BUTTON_ID}
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
          <Input
            data-testid={IMAGE_INPUT_TEST_ID}
            value={tempImage}
            onChange={setTempImage}
          />
          <Button
            data-testid={IMAGE_SUBMIT_BUTTON_ID}
            disabled={!tempImage}
            onClick={() => checkImage(tempImage)}
          >
            open
          </Button>
        </div>
      )}
    </div>
  );
};

export default DashboardCanvas;
