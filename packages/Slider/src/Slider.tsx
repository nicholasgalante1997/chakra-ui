import * as React from "react";
import {
  useSlider,
  useSliderThumb,
  useSliderTrack,
  useSliderContext,
  SliderProvider,
  useSliderLabel,
  SliderHookProps,
  useSliderRoot,
  useSliderMarker,
  useSliderInnerTrack,
} from "./Slider.hook";
import { PropsOf } from "@chakra-ui/system";

export function BaseSliderThumb(props: PropsOf<"div">) {
  const thumbProps = useSliderThumb(props);
  return <div data-chakra-slider-thumb="" {...thumbProps} />;
}

export function BaseSliderTrack(props: any) {
  const trackProps = useSliderTrack(props);
  return <div data-chakra-slider-track="" {...trackProps} />;
}

export function BaseSliderLabel(props: any) {
  const labelProps = useSliderLabel(props);
  return <label data-chakra-slider-label="" {...labelProps} />;
}

function BaseSliderRoot(props: any) {
  const slider = useSliderContext();
  const rootProps = useSliderRoot(props);
  return (
    <div data-chakra-slider="" {...rootProps}>
      {props.children}
      <input
        type="hidden"
        name={slider.name}
        value={slider.value}
        id={slider.id}
      />
    </div>
  );
}

export function BaseSlider(props: SliderHookProps & PropsOf<"div">) {
  const slider = useSlider(props);
  return (
    <SliderProvider value={slider}>
      <BaseSliderRoot {...slider.htmlProps} />
    </SliderProvider>
  );
}

export function BaseSliderMark(props: PropsOf<"div"> & { value: number }) {
  const markProps = useSliderMarker(props);
  return <div data-chakra-slider-mark="" {...markProps} />;
}

export function BaseSliderFilledTrack(props: PropsOf<"div">) {
  const innerTrackProps = useSliderInnerTrack(props);
  return <div {...innerTrackProps} />;
}