<template>
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
                            class="text-brand-red-500"
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