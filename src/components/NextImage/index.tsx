'use client'

import * as React from 'react'

import Image, { ImageProps, StaticImageData } from 'next/image'

import { cn } from '@/lib/utils'

type NextImageProps = {
  useSkeleton?: boolean
  fallback?: StaticImageData | string
  classNames?: {
    image?: string
    blur?: string
  }
  alt: string
} & (
  | { width: string | number; height: string | number }
  | { layout: 'fill'; width?: string | number; height?: string | number }
) &
  ImageProps

/**
 *
 * @description Must set width using `w-` className
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 */
export default function NextImage({
  useSkeleton = false,
  src,
  width,
  height,
  alt,
  fallback,
  className,
  classNames,
  ...rest
}: NextImageProps) {
  const [status, setStatus] = React.useState(
    useSkeleton ? 'loading' : 'complete'
  )
  const [imgSrc, setImgSrc] = React.useState(src)
  const widthIsSet = className?.includes('w-') ?? false

  React.useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <figure
      style={!widthIsSet ? { width: `${width}px` } : undefined}
      className={className}
    >
      <Image
        className={cn(
          'size-full',
          classNames?.image,
          status === 'loading' && cn('animate-pulse', classNames?.blur)
        )}
        priority
        src={imgSrc}
        alt={alt}
        onLoad={() => setStatus('complete')}
        onError={() => {
          fallback && setImgSrc(fallback)
        }}
        width={width}
        height={height}
        {...rest}
      />
    </figure>
  )
}
