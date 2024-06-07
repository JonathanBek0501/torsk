<template>
  <header>
    <div class="bg-brand-red-500 flex justify-between lg:grid grid-cols-3 py-4 px-5">
      <div class="ml-0 m-auto">
        <span class="font-medium text-xl text-white"> Torsk.net </span>
      </div>
      <div class="hidden md:flex justify-center">
        <a
          v-for="(navLink, index) in navLinks"
          :key="index"
          :href="navLink.href"
          class="text-white text-lg font-medium transition-all ease-in-out hover:bg-black/10 p-4"
        >
          {{ navLink.title }}
        </a>
      </div>
      <div class="flex gap-4 ml-auto my-auto">
        <button @click="handleChangeLan('sv')" class="rounded-full overflow-hidden size-7">
          <img src="/flag-sweden.png" alt="Swedish flag" />
        </button>
        <button @click="handleChangeLan('en')" class="rounded-full overflow-hidden size-7">
          <img src="/flag-uk.png" alt="UK flag" />
        </button>
      </div>
    </div>
    <div class="block md:hidden bg-brand-red-400 px-5">
      <div class="flex justify-center">
        <a
          v-for="(navLink, index) in navLinks"
          :key="index"
          :href="navLink.href"
          class="text-white font-medium transition-all ease-in-out hover:bg-black/10 p-2"
        >
          {{ navLink.title }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '../store/lang'

const { setLocale, t } = useI18n()
const selectedLanguage = ref(null)
const languageStore = useLanguageStore()

const navLinks = ref([
  {
    title: t("nav.home"),
    href: "/",
  },
  {
    title: t("nav.faqs"),
    href: "#faqs",
  },
  {
    title: t("nav.quote"),
    href: "#book",
  },
])

const updateNavLinks = () => {
  navLinks.value = [
    {
      title: t("nav.home"),
      href: "/",
    },
    {
      title: t("nav.faqs"),
      href: "#faqs",
    },
    {
      title: t("nav.quote"),
      href: "#book",
    },
  ]
}

const handleChangeLan = (newLan) => {
  selectedLanguage.value = newLan
  languageStore.setSelectedLanguage(newLan)
  setLocale(newLan).then(() => {
    updateNavLinks() // Update nav links after the locale is set
  })
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("selectedLanguage", newLan)
  }
}

onMounted(() => {
  if (typeof localStorage !== "undefined") {
    selectedLanguage.value = localStorage.getItem("selectedLanguage") || "en"
  }

  languageStore.getSelectedLanguage()
  setLocale(languageStore.selectedLanguage).then(() => {
    updateNavLinks()
  })
})

watch(selectedLanguage, (newLang) => {
  setLocale(newLang).then(() => {
    updateNavLinks()
  })
})
</script>
