<script setup lang="ts">

type Props = {
    className: string
}

const props = withDefaults(defineProps<Props>(), {
    className: ''
})

const msg = 'Hello, Vue'
</script>

<template>
    <header :class="`bg-[#f00] ${props.className}`">
        <h1 class="font-bold">{{ msg }}</h1>
    </header>
</template>