
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS} from 'chart.js/auto'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSetAtom } from "jotai"
import { swiperIndex } from "src/data/stores"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MainCard, NPCCard, GraphCard, KeywordCard, JobCard } from "./Card"
import { Categories } from "./Categories"

export function CardContainer() {
  const setActiveIndex = useSetAtom(swiperIndex);

  return (
    <div className="w-full h-full z-0">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1.2}
        effect="fade"
        centeredSlides={true}
        freeMode={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full"
        >
        <div slot="container-start" className="mb-5"><Categories/></div>
          <SwiperSlide>
            <MainCard/>
          </SwiperSlide>
          <SwiperSlide>
            <NPCCard/>
          </SwiperSlide>
          <SwiperSlide>
            <GraphCard/>
          </SwiperSlide>
          <SwiperSlide>
            <JobCard />
          </SwiperSlide>
          <SwiperSlide>
            <KeywordCard/>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}
