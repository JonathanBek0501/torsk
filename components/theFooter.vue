<template>
    <footer>
        <p class="bg-brand-red-500 text-white text-center py-2">
            &copy; {{t("footer")}}
        </p>
    </footer>
</template>

<script setup>
const { t } = useI18n()
</script>