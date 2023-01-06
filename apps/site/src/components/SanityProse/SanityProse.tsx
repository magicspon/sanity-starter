import * as React from 'react'
import { Button, Prose, NoProse } from '@ui/primitives'
import { PortableText, PortableTextProps } from '@portabletext/react'
import { getImageDimensions } from '@ui/utils/getImageDimensions'
import { SanityImage } from '~components/SanityImage'
import QuoteIcon from '@ui/svgs/quote.svg'

export interface TPortableProseProps
  extends React.ComponentProps<typeof Prose> {
  content: PortableTextProps['value']
}

export function SanityProse({
  content,
  ...props
}: TPortableProseProps): JSX.Element {
  return (
    <Prose {...props}>
      <PortableText
        value={content}
        components={{
          block: {
            blockquote: ({ children }) => (
              <NoProse>
                <blockquote className="text-body text-lg italic font-serif">
                  {children}
                </blockquote>
              </NoProse>
            ),
          },
          types: {
            quotes: ({ value }) => {
              return (
                <NoProse asChild>
                  <div className="ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] bg-pebble py-14 pl-12 pr-gutter md:px-gutter my-14 lg:py-32">
                    <div className="max-w-2xl mx-auto relative">
                      <QuoteIcon className="text-mustard w-8 md:w-12 absolute -left-10 md:-left-14 -top-2" />

                      <blockquote className="text-body text-lg md:text-2xl  italic font-serif">
                        {value.quote}
                      </blockquote>
                    </div>
                  </div>
                </NoProse>
              )
            },
            image: ({ value }) => {
              const img = value.asset._ref
              const [width, height] = getImageDimensions(img) ?? [600, 400] // default image size

              return (
                <NoProse>
                  <SanityImage
                    src={value}
                    width={width}
                    height={height}
                    alt=""
                  />
                </NoProse>
              )
            },
            link: ({ value }) => {
              const rel = value.external ? 'noreferrer noopener' : undefined
              return (
                <span className="not-prose inline-block mr-4 mb-4">
                  <Button asChild>
                    <a href={value.internal ?? value.external} rel={rel}>
                      {value.text}
                    </a>
                  </Button>
                </span>
              )
            },
          },
        }}
      />
    </Prose>
  )
}
