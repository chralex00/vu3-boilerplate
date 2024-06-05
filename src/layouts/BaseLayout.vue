<script lang="ts">
import { version } from "../../package.json";
import { Component, Vue, toNative } from "vue-facing-decorator";

@Component
class BaseLayout extends Vue {}

export default toNative(BaseLayout)
</script>

<template>
    <main>
        <slot />
    </main>
</template>