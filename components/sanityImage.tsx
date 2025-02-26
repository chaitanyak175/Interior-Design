import Image from "next/image";

interface ImageProps {
    imageUrl: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
}

export function SanityImage({
    imageUrl,
    alt = "Image",
    width = 400,
    height = 300,
    className = "",
}: ImageProps) {
    if (!imageUrl) return null;

    return (
        <div className={`relative ${className}`}>
            <Image
                src={imageUrl}
                alt={alt}
                width={width}
                height={height}
                quality={75}
                priority={false}
                loading="lazy"
                className="object-cover"
            />
        </div>
    );
}

export function GalleryImage({
    imageUrl,
    alt = "Gallery image",
    width = 384,
    height = 300,
    className = "",
}: ImageProps) {
    if (!imageUrl) return null;

    return (
        <div className={`relative ${className}`}>
            <img
                src={imageUrl}
                alt={alt}
                width={width}
                height={height}
                className="object-cover w-full h-full"
                onError={(e) => {
                    e.currentTarget.src = "/placeholder-image.jpg";
                    e.currentTarget.onerror = null;
                }}
            />
        </div>
    );
}
