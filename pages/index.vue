<template>
    <section class="">
        <div class="max-w-7xl mx-auto pt-12 lg:py-20 px-4">
            <div class="flex flex-col lg:flex-row items-center gap-10">
                <div class="max-w-xl lg:max-w-none">
                    <img src="/heroo.png" alt="">
                </div>
                <div class="lg:max-w-md xl:max-w-lg space-y-10">
                    <h1 class="text-xl md:text-2xl xl:text-3xl font-medium">
                        <strong class="text-3xl md:text-4xl xl:text-5xl text-red-500">Welcome</strong> to my subtitling and translation service. Are you looking for a hassle-free process of adding subtitles to your video content? Look no further!
                    </h1>
                    
                    <a href="#book" class="inline-block rounded bg-red-500 hover:bg-red-400 text-white text-lg px-8 py-2">
                        Book free quote NOW
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="py-20">
            <h2 class="max-w-xs md:max-w-md mx-auto text-3xl md:text-4xl xl:text-5xl font-bold text-center">
                What customers think about us
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
                        <div class="border rounded-md overflow-hidden bg-red-100">
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
                <a href="#" class="inline-block rounded bg-red-500 hover:bg-red-400 text-white text-lg px-8 py-2">
                    Gig on Fiverr
                </a>
            </div>
        </div>
    </section>

    <section id="book">
        <div class="max-w-7xl mx-auto px-4 py-12 lg:py-20">
            <h2 class="text-3xl md:text-4xl xl:text-5xl font-bold text-center max-w-xl mx-auto">
                Booking is <span class="text-red-500">Simple, Quick, <br>and Accurate.</span>
            </h2>
            <div class="mt-16">
                <ul class="max-w-4xl mx-auto space-y-12 text-sm sm:text-lg lg:text-xl text-gray-500">
                    <li class="flex gap-3">
                        <div class="min-w-16 sm:min-w-40 flex items-center justify-center rounded-l-xl bg-red-500 text-white sm:text-xl md:text-2xl py-2 px-6">
                            <span class="-rotate-90 sm:rotate-0">
                                Simple
                            </span>
                        </div>
                        <p>
                            All you need to do is to send me a download link to your video, and I will take care of the rest! I will transcribe the audio, translate it if requested, and create a subtitle file supported by all major video platforms.
                        </p>
                    </li>
                    <li class="flex gap-3">
                        <p>
                            All you need to do is to send me a download link to your video, and I will take care of the rest! I will transcribe the audio, translate it if requested, and create a subtitle file supported by all major video platforms.
                        </p>
                        <div class="min-w-16 sm:min-w-40 flex items-center justify-center rounded-r-xl bg-red-500 text-white sm:text-xl md:text-2xl py-2 px-6">
                            <span class="rotate-90 sm:rotate-0">
                                Quick
                            </span>
                        </div>
                    </li>
                    <li class="flex gap-3">
                        <div class="min-w-16 sm:min-w-40 flex items-center justify-center rounded-l-xl bg-red-500 text-white sm:text-xl md:text-2xl py-2 px-6">
                            <span class="-rotate-90 sm:rotate-0">
                                Accurate
                            </span>
                        </div>
                        <p>
                            All you need to do is to send me a download link to your video, and I will take care of the rest! I will transcribe the audio, translate it if requested, and create a subtitle file supported by all major video platforms.
                        </p>
                    </li>

                    <li class="relative bg-red-300 rounded-md p-10">
                        <p class="text-white text-center">
                            An invoice will be sent to you after the delivery of the subtitles. If you find any errors or misunderstandings, please reach out and I will correct them free of charge.
                        </p>

                        <svg class="absolute right-36 sm:right-40 -bottom-32 lg:-bottom-28 rotate-12 text-red-500 w-8 lg:w-10" width="64" height="210" viewBox="0 0 64 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.239 0.620314C24.999 37.2803 19.739 73.6903 9.23898 109C8.74898 110.67 10.869 112.61 12.419 111.44C29.0523 98.9937 45.669 86.5136 62.269 74.0003L58.999 71.5503C40.879 115.12 21.899 158.41 4.68898 202.36C3.93898 204.29 7.20898 205.7 8.06898 203.79C27.359 160.5 44.929 116.41 63.289 72.7203C63.999 71.0003 61.529 69.1203 59.999 70.2303C43.4256 82.7437 26.839 95.2437 10.239 107.73L13.419 110.18C23.879 74.6503 30.419 37.7303 29.529 0.620314C29.5094 0.463078 29.433 0.318422 29.3142 0.213542C29.1954 0.108662 29.0424 0.0507813 28.884 0.0507812C28.7255 0.0507813 28.5725 0.108662 28.4537 0.213542C28.335 0.318422 28.2586 0.463078 28.239 0.620314Z" fill="currentColor"/>
                            <path d="M1.65863 184.461C-1.00137 186.361 0.298633 189.811 0.518633 192.741C0.888633 197.741 1.30863 202.661 1.71863 207.621C1.84863 209.101 3.48863 210.471 4.93863 209.471C10.5986 205.571 17.3086 202.021 22.1786 197.181C23.7786 195.601 21.7686 193.381 19.9086 194.181C13.8486 197.001 8.25863 202.001 2.77863 205.771L5.99863 207.621C5.55863 202.621 5.11863 197.701 4.62863 192.741C4.34863 189.861 5.10863 185.871 2.12863 184.461C2.05718 184.42 1.97614 184.398 1.89363 184.398C1.81113 184.398 1.73008 184.42 1.65863 184.461Z" fill="currentColor"/>
                        </svg>
                    </li>
                </ul>
                <div class="flex justify-center mt-20">
                    <a href="#" class="inline-block rounded bg-red-500 hover:bg-red-400 text-white text-lg px-8 py-2">
                        Request a free quote
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section id="faqs" class="pb-20 pt-10 space-y-10 px-4 lg:px-0">
        <h2 class="text-3xl md:text-4xl xl:text-5xl font-bold text-center max-w-xl mx-auto">
            FAQs
        </h2>
        <div class="max-w-5xl mx-auto bg-white rounded-lg shadow-lg py-5 md:py-10 lg:py-20 px-5">
            <div class="w-full max-w-3xl mx-auto">
                <div v-for="(faq, index) in faqs" :key="index" :class="{'border-b': index !== faqs.length - 1, 'border-b-0': index === faqs.length - 1}" class="transition py-4">
                    <div
                    @click="toggleFaq(index)"
                    class="cursor-pointer transition flex gap-5 items-center justify-between"
                    >
                        <h3 :class="faq.isOpen ? 'text-brand-green-dark' : 'text-space-gray'" class="sm:text-xl font-bold transition ease-in-out">
                            {{ faq.question }}
                        </h3>
                        <div class="flex justify-start items-center">
                            <svg
                            v-if="faq.isOpen"
                            width="12"
                            height="3"
                            viewBox="0 0 8 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M0.0937656 2.91981V0.879812H7.98977V2.91981H0.0937656Z"
                                fill="#0F3641"
                            />
                            </svg>
                            <svg
                            v-else
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            class="text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M0.925766 7.21744V5.27344H11.1018V7.21744H0.925766ZM5.02977 0.905437H7.02177V11.5854H5.02977V0.905437Z"
                                fill="currentColor"
                            />
                            </svg>
                        </div>
                    </div>
                    <!-- Content -->
                    <div :class="faq.isOpen ? 'max-h-80' : 'max-h-0'" class="overflow-hidden transition-all duration-300 ease-in-out text-sm sm:text-base pt-2">
                        <p class="sm:text-lg font-medium text-space-gray">
                            {{ faq.answer }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

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

// Define FAQs
const faqs = ref([
  {
    question: 'What is Lorem Ipsum?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nemo reprehenderit ipsam atque vel, quisquam voluptatem quod accusamus, dolorem harum quam obcaecati asperiores nisi soluta amet! Rerum sequi iusto qui.',
    isOpen: false,
  },
  {
    question: 'Why do we use it?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nemo reprehenderit ipsam atque vel, quisquam voluptatem quod accusamus, dolorem harum quam obcaecati asperiores nisi soluta amet! Rerum sequi iusto qui.',
    isOpen: false,
  },
  {
    question: 'Where does it come from?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nemo reprehenderit ipsam atque vel, quisquam voluptatem quod accusamus, dolorem harum quam obcaecati asperiores nisi soluta amet! Rerum sequi iusto qui.',
    isOpen: false,
  },
  {
    question: 'Where can I get some?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nemo reprehenderit ipsam atque vel, quisquam voluptatem quod accusamus, dolorem harum quam obcaecati asperiores nisi soluta amet! Rerum sequi iusto qui.',
    isOpen: false,
  },
  {
    question: 'What is the point of using Lorem Ipsum?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nemo reprehenderit ipsam atque vel, quisquam voluptatem quod accusamus, dolorem harum quam obcaecati asperiores nisi soluta amet! Rerum sequi iusto qui.',
    isOpen: false,
  },
  {
    question: 'Is Lorem Ipsum simply random text?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nemo reprehenderit ipsam atque vel, quisquam voluptatem quod accusamus, dolorem harum quam obcaecati asperiores nisi soluta amet! Rerum sequi iusto qui.',
    isOpen: false,
  },
]);

// Toggle function for opening and closing FAQ
const toggleFaq = (index) => {
  // Close all other FAQs
  faqs.value.forEach((faq, i) => {
    if (i !== index) {
      faq.isOpen = false;
    }
  });

  // Toggle the selected FAQ
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>