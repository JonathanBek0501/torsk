<template>
    <header>
        <div class="bg-red-500 flex justify-between lg:grid grid-cols-3 py-4 px-5">
            <div class="ml-0 m-auto">
                <span class="font-medium text-xl text-white">
                    Torsk.net
                </span>
            </div>
            <div class="hidden md:flex justify-center">
                <a v-for="(navLink, index) in navLinks" :key="index" :href="navLink.href" class="text-white text-lg font-medium transition-all ease-in-out hover:bg-black/10 p-4">
                    {{ navLink.title }}
                </a>
            </div>
            <div class="flex gap-4 ml-auto my-auto">
                <button class="rounded-full overflow-hidden size-7">
                    <img src="/flag-sweden.png" alt="">
                </button>
                <button class="rounded-full overflow-hidden size-7">
                    <img src="/flag-uk.png" alt="">
                </button>
            </div>
        </div>
        <div class="block md:hidden bg-red-400 px-5">
            <div class="flex justify-center">
                <a v-for="(navLink, index) in navLinks" :key="index" :href="navLink.href" class="text-white font-medium transition-all ease-in-out hover:bg-black/10 p-2">
                    {{ navLink.title }}
                </a>
            </div>
        </div>
    </header>
</template>

<script setup>
const navLinks = ref([
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'FAQs',
        href: '#faqs',
    },
    {
        title: 'Request a quote',
        href: '#book',
    }
])
</script>