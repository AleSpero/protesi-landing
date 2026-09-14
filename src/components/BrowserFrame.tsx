import Image from "next/image";

type BrowserFrameProps = {
  /** Shown in the decorative address bar. */
  url: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
};

/** A screenshot inside a decorative browser window. */
export function BrowserFrame({ url, src, alt, width, height, sizes, priority }: BrowserFrameProps) {
  return (
    <figure className="overflow-hidden rounded-[18px] border border-[#dde0ff] bg-white shadow-[0_30px_80px_rgb(26_41_96/0.16)]">
      {/* The 47px spacer mirrors the three dots (3 x 11px + 2 x 7px) so the
          address pill sits dead centre. */}
      <div
        aria-hidden="true"
        className="flex items-center gap-3.5 border-b border-[#e6e7fb] bg-lavender px-[18px] py-3"
      >
        <div className="flex gap-[7px]">
          <span className="block size-[11px] rounded-full bg-[#dde0ff]" />
          <span className="block size-[11px] rounded-full bg-[#dde0ff]" />
          <span className="block size-[11px] rounded-full bg-[#dde0ff]" />
        </div>
        <span className="mx-auto max-w-[420px] flex-1 truncate rounded-lg bg-white px-3.5 py-1.5 text-center text-[12px] text-muted">
          {url}
        </span>
        <span className="block w-[47px] shrink-0" />
      </div>

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full"
      />
    </figure>
  );
}
