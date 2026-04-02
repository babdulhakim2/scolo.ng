import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

type ConsentValue = "accepted" | "declined";

const STORAGE_KEY = "scolo.cookieConsent.v1";
const OPEN_SETTINGS_EVENT = "scolo:open-cookie-settings";

function getStoredConsent(): ConsentValue | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "declined" ? v : null;
  } catch {
    return null;
  }
}

function setStoredConsent(value: ConsentValue) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // ignore (private mode, storage disabled)
  }
}

function getDoNotTrackEnabled(): boolean {
  try {
    const dnt =
      navigator.doNotTrack ??
      (window as any).doNotTrack ??
      (navigator as any).msDoNotTrack;
    return dnt === "1" || dnt === "yes";
  } catch {
    return false;
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

export default function CookieConsentBanner() {
  const dnt = useMemo(() => getDoNotTrackEnabled(), []);
  const [consent, setConsent] = useState<ConsentValue | null>(() => getStoredConsent());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (consent) return;
    if (dnt) {
      setStoredConsent("declined");
      setConsent("declined");
      return;
    }
    setIsOpen(true);
  }, [consent, dnt]);

  useEffect(() => {
    const onOpen = () => {
      const latest = getStoredConsent();
      setConsent(latest);
      if (!latest && !dnt) setIsOpen(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, onOpen);
  }, [dnt]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-outline-variant/20 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-5 md:px-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">Cookie consent</p>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            We use essential storage for site functionality, and optional analytics storage only if you allow it. Read more in our{" "}
            <Link to="/privacy" className="underline hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <button
            onClick={() => {
              setStoredConsent("declined");
              setConsent("declined");
              setIsOpen(false);
            }}
            className="px-5 py-3 border border-outline text-white font-bold text-sm hover:bg-surface-container-high transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => {
              setStoredConsent("accepted");
              setConsent("accepted");
              setIsOpen(false);
            }}
            className="px-5 py-3 bg-primary text-on-primary font-bold text-sm hover:bg-primary-container transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

