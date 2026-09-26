"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { trackCustomEvent } from "@/lib/analytics";
import { SALES_VIDEO_URL } from "@/lib/config";

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

type SalesVideoProps = {
  /** When true, render only the player (no outer section) for use inside Hero */
  embedded?: boolean;
};

export function SalesVideo({ embedded = false }: SalesVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoSrc = SALES_VIDEO_URL;
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [videoError, setVideoError] = useState(!videoSrc);
  const hit50 = useRef(false);
  const hitComplete = useRef(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleHide = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setShowControls(true);
    hideTimer.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) {
        setShowControls(false);
      }
    }, 2800);
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  function togglePlay() {
    const v = videoRef.current;
    if (!v || videoError || !videoSrc) return;
    if (v.paused) {
      void v.play();
    } else {
      v.pause();
    }
    scheduleHide();
  }

  function onPlay() {
    setPlaying(true);
    setStarted(true);
    if (!started) {
      trackCustomEvent("VideoStart");
    }
    scheduleHide();
  }

  function onPause() {
    setPlaying(false);
    setShowControls(true);
  }

  function onTimeUpdate() {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setCurrent(v.currentTime);
    const pct = (v.currentTime / v.duration) * 100;
    if (pct >= 50 && !hit50.current) {
      hit50.current = true;
      trackCustomEvent("Video50Percent");
    }
  }

  function onEnded() {
    setPlaying(false);
    setShowControls(true);
    if (!hitComplete.current) {
      hitComplete.current = true;
      trackCustomEvent("VideoComplete");
    }
  }

  function seek(e: React.ChangeEvent<HTMLInputElement>) {
    const v = videoRef.current;
    if (!v) return;
    const t = Number(e.target.value);
    v.currentTime = t;
    setCurrent(t);
    scheduleHide();
  }

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    scheduleHide();
  }

  function changeVolume(e: React.ChangeEvent<HTMLInputElement>) {
    const v = videoRef.current;
    if (!v) return;
    const vol = Number(e.target.value);
    v.volume = vol;
    setVolume(vol);
    v.muted = vol === 0;
    setMuted(vol === 0);
    scheduleHide();
  }

  async function toggleFullscreen() {
    const el = containerRef.current;
    if (!el) return;
    try {
      if (!document.fullscreenElement) {
        await el.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // fullscreen may be blocked
    }
    scheduleHide();
  }

  const progress = duration > 0 ? (current / duration) * 100 : 0;

  const player = (
          <div
            ref={containerRef}
            className="group relative aspect-video overflow-hidden rounded-xl border border-border bg-ink shadow-sm"
            onMouseMove={scheduleHide}
            onTouchStart={scheduleHide}
          >
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster="/sales-video-poster.jpg"
              playsInline
              preload="metadata"
              src={videoSrc || undefined}
              onPlay={onPlay}
              onPause={onPause}
              onTimeUpdate={onTimeUpdate}
              onEnded={onEnded}
              onLoadedMetadata={() => {
                if (videoRef.current) setDuration(videoRef.current.duration);
              }}
              onError={() => setVideoError(true)}
              onClick={togglePlay}
            />

            {/* Poster / placeholder overlay when not started or error */}
            {(!started || videoError) && (
              <button
                type="button"
                onClick={togglePlay}
                className="absolute inset-0 flex flex-col items-center justify-center bg-ink/55 transition-colors hover:bg-ink/45"
                aria-label="Play video"
                disabled={!videoSrc || videoError}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-200 hover:scale-105 sm:h-[72px] sm:w-[72px]">
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-1 h-7 w-7 text-ink"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                {videoError && (
                  <p className="mt-4 max-w-xs px-4 text-center text-sm text-white/90">
                    {!videoSrc ? (
                      <>
                        Weka{" "}
                        <code className="rounded bg-white/15 px-1.5 py-0.5 text-xs">
                          NEXT_PUBLIC_SALES_VIDEO_URL
                        </code>{" "}
                        kwenye{" "}
                        <code className="rounded bg-white/15 px-1.5 py-0.5 text-xs">
                          .env.local
                        </code>
                        .
                      </>
                    ) : (
                      <>Video haijazidiwa. Angalia URL ya Cloudflare R2.</>
                    )}
                  </p>
                )}
              </button>
            )}

            {/* Center play when paused mid-video */}
            {started && !playing && !videoError && showControls && (
              <button
                type="button"
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-ink/30"
                aria-label="Play"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow">
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-0.5 h-6 w-6 text-ink"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}

            {/* Controls bar */}
            <div
              className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2.5 pt-10 transition-opacity duration-300 ${
                showControls || !playing ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="mb-2">
                <input
                  type="range"
                  min={0}
                  max={duration || 0}
                  step={0.1}
                  value={current}
                  onChange={seek}
                  aria-label="Video progress"
                  className="video-range h-1 w-full cursor-pointer appearance-none rounded-full bg-white/30"
                  style={{
                    background: `linear-gradient(to right, #dc2626 ${progress}%, rgba(255,255,255,0.3) ${progress}%)`,
                  }}
                />
              </div>
              <div className="flex items-center gap-2 text-white">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="rounded p-1.5 hover:bg-white/15"
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  className="rounded p-1.5 hover:bg-white/15"
                  aria-label={muted ? "Unmute" : "Mute"}
                >
                  {muted || volume === 0 ? (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  )}
                </button>

                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={muted ? 0 : volume}
                  onChange={changeVolume}
                  aria-label="Volume"
                  className="hidden h-1 w-16 cursor-pointer appearance-none rounded-full bg-white/30 sm:block"
                />

                <span className="ml-1 text-xs tabular-nums text-white/90">
                  {formatTime(current)} / {formatTime(duration)}
                </span>

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="ml-auto rounded p-1.5 hover:bg-white/15"
                  aria-label="Fullscreen"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
  );

  if (embedded) {
    return player;
  }

  return (
    <section className="border-b border-border bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <FadeIn>{player}</FadeIn>
      </div>
    </section>
  );
}
