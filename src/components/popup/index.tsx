import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

export type Props = {
    children: Element;
    onClickOut?: (this: HTMLDivElement, ev: MouseEvent) => any;
}
export default function Popup (props: Props) {
    const container = useRef(document.createElement('div'));

    useEffect(() => {
        if (props.onClickOut) container.current.addEventListener('click', props.onClickOut)
        container.current.className = 'popup-modal';
        document.body.appendChild(container.current);
        return () => container.current.remove();
    },[props.onClickOut]);

    return ReactDOM.createPortal(container.current,props.children);
}