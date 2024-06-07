<template>
    <section id="book">
        <div class="max-w-7xl mx-auto px-4 py-12 lg:py-20">
            <h2 class="text-3xl md:text-4xl xl:text-5xl font-bold text-center max-w-xl mx-auto">
                {{t("book.title")}} <span class="text-brand-red-500"> {{t("book.color-title")}} <br> {{t("book.color-title2")}}</span>
            </h2>
            <div class="mt-16">
                <ul class="max-w-4xl mx-auto space-y-12 text-sm sm:text-lg lg:text-xl text-gray-500">
                    <li class="flex items-center sm:items-stretch gap-3">
                        <div class="min-w-12 min-h-24 sm:min-h-fit sm:min-w-40 flex items-center justify-center rounded-l-xl bg-brand-red-500 text-white sm:text-xl md:text-2xl py-2 px-4 sm:px-6">
                            <span class="-rotate-90 sm:rotate-0">
                                {{t("book.simple.name")}}
                            </span>
                        </div>
                        <p>
                            {{t("book.simple.text")}}
                        </p>
                    </li>
                    <li class="flex items-center sm:items-stretch gap-3">
                        <p>
                            {{t("book.quick.text")}}
                        </p> 
                        <div class="min-w-12 min-h-24 sm:min-h-fit sm:min-w-40 flex items-center justify-center rounded-r-xl bg-brand-red-500 text-white sm:text-xl md:text-2xl py-2 px-4 sm:px-6">
                            <span class="rotate-90 sm:rotate-0">
                                {{t("book.quick.name")}}
                            </span>
                        </div>
                    </li>
                    <li class="flex items-center sm:items-stretch gap-3">
                        <div class="min-w-12 min-h-24 sm:min-h-fit sm:min-w-40 flex items-center justify-center rounded-l-xl bg-brand-red-500 text-white sm:text-xl md:text-2xl py-2 px-4 sm:px-6">
                            <span class="-rotate-90 sm:rotate-0">
                                {{t("book.accurate.name")}}
                            </span>
                        </div>
                        <p>
                            {{t("book.accurate.text")}} <strong>{{t("book.accurate.bold")}}</strong> {{t("book.accurate.text2")}}
                        </p>
                    </li>

                    <li class="relative bg-brand-red-300 rounded-md p-10">
                        <p class="text-white text-center">
                            {{t("book.description")}}
                        </p>

                        <svg class="absolute right-36 sm:right-40 -bottom-32 lg:-bottom-28 rotate-12 text-brand-red-500 w-8 lg:w-10" width="64" height="210" viewBox="0 0 64 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.239 0.620314C24.999 37.2803 19.739 73.6903 9.23898 109C8.74898 110.67 10.869 112.61 12.419 111.44C29.0523 98.9937 45.669 86.5136 62.269 74.0003L58.999 71.5503C40.879 115.12 21.899 158.41 4.68898 202.36C3.93898 204.29 7.20898 205.7 8.06898 203.79C27.359 160.5 44.929 116.41 63.289 72.7203C63.999 71.0003 61.529 69.1203 59.999 70.2303C43.4256 82.7437 26.839 95.2437 10.239 107.73L13.419 110.18C23.879 74.6503 30.419 37.7303 29.529 0.620314C29.5094 0.463078 29.433 0.318422 29.3142 0.213542C29.1954 0.108662 29.0424 0.0507813 28.884 0.0507812C28.7255 0.0507813 28.5725 0.108662 28.4537 0.213542C28.335 0.318422 28.2586 0.463078 28.239 0.620314Z" fill="currentColor"/>
                            <path d="M1.65863 184.461C-1.00137 186.361 0.298633 189.811 0.518633 192.741C0.888633 197.741 1.30863 202.661 1.71863 207.621C1.84863 209.101 3.48863 210.471 4.93863 209.471C10.5986 205.571 17.3086 202.021 22.1786 197.181C23.7786 195.601 21.7686 193.381 19.9086 194.181C13.8486 197.001 8.25863 202.001 2.77863 205.771L5.99863 207.621C5.55863 202.621 5.11863 197.701 4.62863 192.741C4.34863 189.861 5.10863 185.871 2.12863 184.461C2.05718 184.42 1.97614 184.398 1.89363 184.398C1.81113 184.398 1.73008 184.42 1.65863 184.461Z" fill="currentColor"/>
                        </svg>
                    </li>
                </ul>
                <div class="max-w-xl mx-auto flex flex-col items-center space-y-5 mt-20">
                    <div class="bg-brand-red-100 w-full p-5">
                        <form action="" class="grid sm:grid-cols-2 gap-5">
                            <div class="flex flex-col gap-2.5">
                                <label for="firstName" class="font-medium">
                                    {{t("book.form.first")}}
                                </label>
                                <input type="text" id="firstName" :placeholder="t('book.form.first')" class="focus:outline-none focus:ring-1 focus:ring-gray-400 h-10 px-4">
                            </div>
                            <div class="flex flex-col gap-2.5">
                                <label for="lastName" class="font-medium">
                                    {{t("book.form.last")}}
                                </label>
                                <input type="text" id="lastName" :placeholder="t('book.form.last')" class="focus:outline-none focus:ring-1 focus:ring-gray-400 h-10 px-4">
                            </div>
                            <div class="flex flex-col gap-2.5">
                                <label for="email" class="font-medium">
                                    {{t("book.form.email")}}
                                </label>
                                <input type="email" id="email" :placeholder="t('book.form.email')" class="focus:outline-none focus:ring-1 focus:ring-gray-400 h-10 px-4">
                            </div>
                            <div class="flex flex-col gap-2.5">
                                <label for="companyName" class="font-medium">
                                    {{t("book.form.company")}}
                                </label>
                                <input type="text" id="companyName" :placeholder="t('book.form.company')" class="focus:outline-none focus:ring-1 focus:ring-gray-400 h-10 px-4">
                            </div>
                            <div class="flex flex-col gap-2.5">
                                <label for="videoLink" class="font-medium">
                                    {{t("book.form.link")}}
                                </label>
                                <input type="text" id="videoLink" :placeholder="t('book.form.link')" class="focus:outline-none focus:ring-1 focus:ring-gray-400 h-10 px-4">
                            </div>
                            <div class="flex flex-col gap-2.5">
                                <span class="font-medium">
                                    {{t("book.form.need.name")}}
                                </span>
                                <div>
                                    <div class="flex items-center gap-2">
                                        <input type="checkbox" id="transc">
                                        <label for="transc" class="text-sm">
                                            {{t("book.form.need.one")}}
                                        </label>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <input type="checkbox" id="transl">
                                        <label for="transl" class="text-sm">
                                            {{t("book.form.need.two")}}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="sm:col-span-2 flex flex-col gap-2.5">
                                <label for="videoLink" class="font-medium">
                                    {{t("book.form.textare.name")}}
                                </label>
                                <textarea name="" id="" cols="30" rows="2":placeholder="t('book.form.textare.placeholder')" class="max-h-40 min-h-20 focus:outline-none focus:ring-1 focus:ring-gray-400 py-4 px-5"></textarea>
                            </div>
                            
                            <button type="submit" class="sm:col-span-2 w-fit mx-auto rounded bg-brand-red-500 hover:bg-brand-red-400 text-white text-lg px-8 py-2">
                                {{t("book.form.btn")}}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n()
</script>