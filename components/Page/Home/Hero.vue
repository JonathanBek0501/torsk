<template>
    <section class="">
        <div class="max-w-7xl mx-auto pt-12 lg:py-20 px-4">
            <div class="flex flex-col lg:flex-row items-center gap-10">
                <div class="max-w-xl lg:max-w-none">
                    <img src="/heroo.png" alt="">
                </div>
                <div class="lg:max-w-md xl:max-w-lg space-y-10">
                    <h1 class="text-xl md:text-2xl xl:text-3xl font-medium">
                        <strong class="text-3xl md:text-4xl xl:text-5xl text-brand-red-500">{{t("hero.title")}}</strong> {{t("hero.text")}}
                    </h1>
                    
                    <a href="#book" class="inline-block rounded bg-brand-red-500 hover:bg-brand-red-400 text-white text-lg px-8 py-2">
                        {{t("hero.btn")}}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { t } = useI18n()
</script>