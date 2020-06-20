import React, {
  useState,
  useRef,
  ReactElement,
  useEffect,
  useCallback,
} from "react";
import { useTransition, animated } from "react-spring";
import cn from "classnames";
import * as RX from "rxjs";
import SlideSale from "./slides/sale";
import SlideSummerClothes from "./slides/clothes-summer";
import "./style.scss";

const slides = [<SlideSale />, <SlideSummerClothes />] as ReactElement[];

export default function SliderMain() {
  const [activeIndex, setIndex] = useState(0);
  const previousIndex = useRef(0);
  const transitions = useTransition(activeIndex, null, {
    from: () => ({
      transform: `translateX(${
        activeIndex >= previousIndex.current ? "" : "-"
      }100%)`,
    }),
    enter: { transform: "translateX(0)" },
    leave: () => ({
      transform: `translateX(${
        activeIndex >= previousIndex.current ? "-" : ""
      }100%)`,
    }),
  });

  useEffect(() => {
    const interval = RX.interval(5000).subscribe(() => {
      const next =
        slides.length === previousIndex.current + 1
          ? 0
          : previousIndex.current + 1;
      requestAnimationFrame(() => setIndex(next));
    });
    return () => interval.unsubscribe();
  }, [setIndex]);

  const clickSlide = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
      event.preventDefault();
      event.stopPropagation();
      setIndex(index);
    },
    [setIndex]
  );

  previousIndex.current = activeIndex;
  return (
    <div className="page-main-slider">
      {transitions.map(({ key, props: style }) => (
        <animated.div
          key={key}
          className="page-main-slider-slide"
          style={style}
        >
          {slides[activeIndex]}
        </animated.div>
      ))}
      <div className="page-main-slider-counter">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "page-main-slider-count",
              index === activeIndex && "active"
            )}
            onClick={(event) => clickSlide(event, index)}
          />
        ))}
      </div>
    </div>
  );
}
