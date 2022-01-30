import Image from "next/image";
import Link from "next/link";

interface ArticleImageProps {
  src?: string;
  alt?: string;
  href?: string;
  height?: string;
  figClassName?: string;
  imgClassName?: string;
}

const ArticleImage = ({
  src = "",
  alt = "",
  href = "",
  height = "",
  figClassName = "",
  imgClassName = "",
}: ArticleImageProps) => {
  return (
    <figure className={figClassName}>
      <Link href={href}>
        <a>
          <Image
            src={src}
            alt={alt}
            width="100%"
            height={height}
            layout="responsive"
            objectFit="cover"
            priority
            className={imgClassName}
          />
        </a>
      </Link>
    </figure>
  );
};

export { ArticleImage };
