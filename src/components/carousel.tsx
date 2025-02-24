import useEmblaCarousel from 'embla-carousel-react'
import { FC, useCallback } from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

interface Props {
  images: string[]
}

const Carousel: FC<Props> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [])
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container'>
        {images.map((image) => (
          <div key={image} className='embla__slide'>
            <img src={useBaseUrl(image)} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button className='embla__prev' onClick={scrollPrev}>
          Prev
        </button>
        <button className='embla__next' onClick={scrollNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Carousel
