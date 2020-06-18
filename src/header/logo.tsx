import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { ReactComponent as IconReebook } from "./icon-reebok.svg";
import { ReactComponent as IconAddidas } from "./icon-adidas.svg";
import { ReactComponent as IconColumbia } from "./icon-columbia.svg";
import { ReactComponent as IconDecatlon } from "./icon-decatlon.svg";
import { ReactComponent as IconPuma } from "./icon-puma.svg";
import { ReactComponent as IconNike } from "./icon-nike.svg";
import * as Rx from "rxjs";

const logoContributers = [
  <IconReebook/>,
  <IconAddidas/>,
  <IconColumbia/>,
  <IconDecatlon/>,
  <IconPuma/>,
  <IconNike/>,
];

export default function Logo() {
  const [indexContributer, setIndexContributer] = useState(0);
  const indexContributerRef = useRef(indexContributer);
  const transitions = useTransition(indexContributer, null, {
    from: { transform: "translateY(100%)" },
    enter: { transform: "translateY(0)" },
    leave: { transform: "translateY(-100%)" },
  });
  indexContributerRef.current = indexContributer;
  useEffect(() => {
    const interval = Rx.interval(2000).subscribe(() => {
      const next =
        logoContributers.length === indexContributerRef.current + 1
          ? 0
          : indexContributerRef.current + 1;
      setIndexContributer(next);
    });
    return () => interval.unsubscribe();
  }, [setIndexContributer]);

  return (
    <Link to="/" className="header-logo">
      {transitions.map(({ item, key, props: style }) => 
      <animated.picture key={key} style={style} className="header-logo-icon">
          {logoContributers[item]}
      </animated.picture>
      )}
    </Link>
  );
}
