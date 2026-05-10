"use client";

import { useEffect } from "react";

export default function GlobalHandlers() {
  useEffect(() => {
    const preventDefault = (event) => {
      event.preventDefault();
    };

    const preventPinchZoom = (event) => {
      if (event.touches && event.touches.length > 1) {
        event.preventDefault();
      }
    };

    const preventGesture = (event) => {
      event.preventDefault();
    };

    const preventZoomKeys = (event) => {
      const zoomKey = ["=", "+", "-", "0"].includes(event.key);
      if ((event.ctrlKey || event.metaKey) && zoomKey) {
        event.preventDefault();
      }
    };

    const preventWheelZoom = (event) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
      }
    };

    window.addEventListener("contextmenu", preventDefault);
    window.addEventListener("touchstart", preventPinchZoom, { passive: false });
    window.addEventListener("touchmove", preventPinchZoom, { passive: false });
    window.addEventListener("gesturestart", preventGesture);
    window.addEventListener("gesturechange", preventGesture);
    window.addEventListener("keydown", preventZoomKeys, { passive: false });
    window.addEventListener("wheel", preventWheelZoom, { passive: false });

    return () => {
      window.removeEventListener("contextmenu", preventDefault);
      window.removeEventListener("touchstart", preventPinchZoom, { passive: false });
      window.removeEventListener("touchmove", preventPinchZoom, { passive: false });
      window.removeEventListener("gesturestart", preventGesture);
      window.removeEventListener("gesturechange", preventGesture);
      window.removeEventListener("keydown", preventZoomKeys, { passive: false });
      window.removeEventListener("wheel", preventWheelZoom, { passive: false });
    };
  }, []);

  return null;
}
