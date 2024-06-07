<template>
    <section>
        <div class="py-20">
            <h2 class="max-w-xs md:max-w-md mx-auto text-3xl md:text-4xl xl:text-5xl font-bold text-center">
                {{t("reviews.title")}}
            </h2>
            <div class="pt-10">
                <swiper
                :spaceBetween="24"
                :slidesPerView="1.2"
                :slidesOffsetBefore="20"
                :slidesOffsetAfter="20"
                :breakpoints="{
                    '768': {
                    slidesPerView: 2.5,
                    spaceBetween: 28,
                    },
                    '1024': {
                    slidesPerView: 3.5,
                    spaceBetween: 32,
                    },
                    '1440': {
                    slidesPerView: 4.5,
                    spaceBetween: 40,
                    },
                }"
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                }"
                :allowTouchMove="false"
                :modules="modules"
                class="swiperPartnerBrands"
                >
                    <swiper-slide v-for="(review, index) in reviews" :key="index">
                        <div class="border rounded-md overflow-hidden bg-brand-red-100">
                            <div class="bg-black bg-opacity-80 flex items-center gap-4 text-gray-300 py-2 px-3">
                                <span>
                                    {{ review.name }}: 
                                </span>
                                <div class="flex items-center">
                                    <svg v-for="(item, index) in 5" :key="index" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                </div>
                            </div>
                            
                            <p class="text-sm p-3">
                                {{ review.text }}
                            </p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="flex justify-center mt-10">
                <a href="#" class="inline-block rounded bg-brand-red-500 hover:bg-brand-red-400 text-white text-lg px-8 py-2">
                    {{t("reviews.btn")}}
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const { t } = useI18n()

const modules = [Autoplay];

const reviews = ref([
    {
        name: 'Justin',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis mollitia aspernatur ratione tempore id voluptatem.',
    },
    {
        name: 'Studiolyze',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis mollitia aspernatur ratione tempore id voluptatem.',
    },
    {
        name: 'Alice',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis mollitia aspernatur ratione tempore id voluptatem.',
    },
    {
        name: 'oromtv',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis mollitia aspernatur ratione tempore id voluptatem.',
    },
    {
        name: 'Alex',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis mollitia aspernatur ratione tempore id voluptatem.',
    },
    {
        name: 'Brayn',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis mollitia aspernatur ratione tempore id voluptatem.',
    },
])
</script>